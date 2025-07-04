// renameCollections.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: serviceAccount.project_id
});
const db = admin.firestore();

/**
 * 컬렉션 전체를 새 이름으로 복사하고, 원본은 삭제합니다.
 * @param {string} from 기존 컬렉션명
 * @param {string} to   새 컬렉션명
 */
async function moveCollection(from, to) {
  const snapshot = await db.collection(from).get();

  console.log(`Moving ${snapshot.size} docs from ${from} → ${to}...`);
  const batch = db.batch();

  snapshot.docs.forEach(doc => {
    const fromRef = db.collection(from).doc(doc.id);
    const toRef   = db.collection(to).doc(doc.id);

    // 1) 새 컬렉션에 복사
    batch.set(toRef, doc.data());
    // 2) 원본에서 삭제
    batch.delete(fromRef);
  });

  // Firestore 배치는 최대 500개 오퍼레이션이므로,
  // 대량 데이터 시엔 500개씩 나눠서 실행하도록 확장 필요
  await batch.commit();
  console.log(`→ Done moving ${from} to ${to}`);
}

async function swap() {
  // 1) kiosk → tmp_kiosk
  await moveCollection('kiosk',       'tmp_kiosk');
  // 2) portfolio → kiosk
  await moveCollection('portfolio',   'kiosk');
  // 3) tmp_kiosk → portfolio
  await moveCollection('tmp_kiosk',   'portfolio');
  // 4) 임시 컬렉션 제거
  await db.collection('tmp_kiosk').get()
    .then(s => Promise.all(s.docs.map(d => d.ref.delete())));
  console.log('🎉 Collections swapped successfully!');
}

swap().catch(console.error);
