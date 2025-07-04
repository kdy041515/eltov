import { collection, getDocs, getDoc, doc, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebaseConfig';

export async function getPortfolios() {
  const snapshot = await getDocs(collection(db, 'portfolio'));
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getPortfolio(id) {
  const snap = await getDoc(doc(db, 'portfolio', id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function getKiosks() {
  const snapshot = await getDocs(collection(db, 'kiosk'));
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getKiosk(id) {
  const snap = await getDoc(doc(db, 'kiosk', id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function addContact(data) {
  await addDoc(collection(db, 'contact'), { ...data, createdAt: serverTimestamp() });
}
