// seed.js
const admin = require('firebase-admin');

// 1) 서비스 계정 키 JSON 파일을 직접 require
//    프로젝트 루트에 serviceAccountKey.json 이 있는지 확인!
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // projectId 는 serviceAccount 에 포함되어 있으므로 생략해도 됩니다.
});

const db = admin.firestore();

async function seed() {
  console.log('▶️ Seeding start');

  await db.collection('portfolio').add({
    title_en:       'Sample Portfolio en123',
    title_ko:       '샘플 포트폴리오 KO123',
    title_jp:       'サンプルポートフォリオ jp123',
    title_cn:       '示例作品集 123CN',
    description_en: 'This is a sample 123portfolio description in English.',
    description_ko: '이것은 한국어 샘플 설명입니다.123',
    description_jp: 'これは日本語のサンプル説明です。123',
    description_cn: '这是中文示例说明。123',
    createdAt:      admin.firestore.FieldValue.serverTimestamp(),
    thum_url:       'https://example.com/thumb1.jpg',
    image_urls:     ['https://example.com/img2.jpg','https://example.com/img3.jpg'],
    video_urls:     ['https://example.com/video1.mp4'],
    category_code:  '터치디스플레이가로형'
  });
  await db.collection('portfolio').add({
    title_en:       'Sample Portfolio en123',
    title_ko:       '샘플 포트폴리오 KO123',
    title_jp:       'サンプルポートフォリオ jp123',
    title_cn:       '示例作品集 123CN',
    description_en: 'This is a sample 123portfolio description in English.',
    description_ko: '이것은 한국어 샘플 설명입니다.123',
    description_jp: 'これは日本語のサンプル説明です。123',
    description_cn: '这是中文示例说明。123',
    createdAt:      admin.firestore.FieldValue.serverTimestamp(),
    thum_url:       'https://example.com/thumb1.jpg',
    image_urls:     ['https://example.com/img2.jpg','https://example.com/img3.jpg'],
    video_urls:     ['https://example.com/video1.mp4'],
    category_code:  '터치디스플레이세로형'
  });
  await db.collection('portfolio').add({
    title_en:       'Sample Portfolio en123',
    title_ko:       '샘플 포트폴리오 KO123',
    title_jp:       'サンプルポートフォリオ jp123',
    title_cn:       '示例作品集 123CN',
    description_en: 'This is a sample 123portfolio description in English.',
    description_ko: '이것은 한국어 샘플 설명입니다.123',
    description_jp: 'これは日本語のサンプル説明です。123',
    description_cn: '这是中文示例说明。123',
    createdAt:      admin.firestore.FieldValue.serverTimestamp(),
    thum_url:       'https://example.com/thumb1.jpg',
    image_urls:     ['https://example.com/img2.jpg','https://example.com/img3.jpg'],
    video_urls:     ['https://example.com/video1.mp4'],
    category_code:  'DID'
  });
  console.log('✅ portfolio seeded');

  await db.collection('kiosk').add({
    title_en:       'Sample Kiosk en22',
    title_ko:       '샘플 키오스크 KO33',
    title_jp:       'サンプルキオスク jpqq',
    title_cn:       '示例自助服务 CNff',
    description_en: 'Sample kiosk description in English.vv',
    description_ko: '샘플 키오스크 설명입니다qq.',
    description_jp: 'これはキオスクのサンプル説明qqweです。',
    description_cn: '这是自助服务的示例qwe说明。',
    createdAt:      admin.firestore.FieldValue.serverTimestamp(),
    thum_url:       'https://example.com/kiosk_thumb1.jpg',
    image_urls:     ['https://example.com/kiosk3.jpg'],
    video_urls:     [],
    category_code:  '공항'
  });
  for (const category of ['공항', '터미널', '사무실', '쇼핑몰', '병원', '학교', '호텔', '기타']) {
    for (let i = 0; i < 2; i++) {
      await db.collection('kiosk').add({
        title_en:       `Sample Kiosk en ${category} ${i}`,
        title_ko:       `샘플 키오스크 KO ${category} ${i}`,
        title_jp:       ` ${category} ${i}`,
        title_cn:       ` CN ${category} ${i}`,
        description_en: `Sample kiosk description in English ${category} ${i}`,
        description_ko: `  ${category} ${i}.`,
        description_jp: ` ${category} ${i}  `,
        description_cn: ` CN ${category} ${i}.`,
        createdAt:      admin.firestore.FieldValue.serverTimestamp(),
        thum_url:       `https://example.com/kiosk_${category}_${i}_thumb.jpg`,
        image_urls:     [ `https://example.com/kiosk_${category}_${i}.jpg` ],
        video_urls:     [],
        category_code:  category
      });
    }
  }
  console.log('✅ kiosk seeded');

  await db.collection('contact').add({
    name:       '홍길동22',
    tel:        '010-1234-1234',
    email:      'hon2g@example.com',
    category:   'general-inquiry',
    createdAt:  admin.firestore.FieldValue.serverTimestamp()
  });
  console.log('✅ contact seeded');

//   const categories = [
//     {
//       code: '공항',
//       ko: '공항',
//       jp: '空港',
//       ch: '机场',
//       en: 'Airport',
//       index: 0
//     },
//     {
//       code: '교육',
//       ko: '교육',
//       jp: '教育',
//       ch: '教育',
//       en: 'Education',
//       index: 1
//     },
//     {
//       code: '기타',
//       ko: '기타',
//       jp: 'その他',
//       ch: '其他',
//       en: 'Etc',
//       index: 9
//     },
//     {
//       code: '정부',
//       ko: '정부',
//       jp: '政府',
//       ch: '政府',
//       en: 'Government',
//       index: 2
//     },
//     {
//       code: '사무실',
//       ko: '사무실',
//       jp: 'オフィス',
//       ch: '办公室',
//       en: 'Office',
//       index: 3
//     },
//     {
//       code: '병원',
//       ko: '병원',
//       jp: '病院',
//       ch: '医院',
//       en: 'Hospital',
//       index: 4
//     },
//     {
//       code: '호텔',
//       ko: '호텔',
//       jp: 'ホテル',
//       ch: '酒店',
//       en: 'Hotel',
//       index: 5
//     },
//     {
//       code: '공원',
//       ko: '공원',
//       jp: '公園',
//       ch: '公园',
//       en: 'Park',
//       index: 6
//     },
//     {
//       code: '쇼핑몰',
//       ko: '쇼핑몰',
//       jp: 'ショッピングモール',
//       ch: '购物中心',
//       en: 'Shopping Mall',
//       index: 7
//     },
//     {
//       code: '쇼케이스',
//       ko: '쇼케이스',
//       jp: 'ショーケース',
//       ch: '展示',
//       en: 'Showcase',
//       index: 8
//     }
//   ];

//   categories.forEach(category => {
//     db.collection('portfolio_category').add(category);
//   });

//   const categories2 = [
//     {
//       code: '터치디스플레이가로형',
//       ko: '터치 디스플레이 가로형',
//       jp: '空港',
//       ch: '机场',
//       en: 'Airport',
//       index: 0
//     },
//     {
//       code: '터치디스플레이세로형',
//       ko: '터치 디스플레이 세로형',
//       jp: '教育',
//       ch: '教育',
//       en: 'Education',
//       index: 1
//     },
//     {
//       code: 'DID',
//       ko: 'DID',
//       jp: 'DID',
//       ch: 'DID',
//       en: 'DID',
//       index: 2
//     },
//   ];

//   categories2.forEach(category => {
//     db.collection('kiosk_category').add(category);
//   });
  console.log('✅ portfolio cate seeded');

  console.log('🎉 All collections seeded successfully');
}

seed().catch(err => {
  console.error('❌ Error seeding data:', err);
  process.exit(1);
});
