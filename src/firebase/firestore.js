import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function getPortfolioCategories() {
  const snapshot = await getDocs(collection(db, "portfolio_category"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getKioskCategories() {
  const snapshot = await getDocs(collection(db, "kiosk_category"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getPortfolios() {
  const snapshot = await getDocs(collection(db, "portfolio"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getPortfolio(id) {
  const snap = await getDoc(doc(db, "portfolio", id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function getKiosks() {
  const snapshot = await getDocs(collection(db, "kiosk"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getKiosk(id) {
  const snap = await getDoc(doc(db, "kiosk", id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function addContact(data) {
  await addDoc(collection(db, "contact"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}


export async function uploadBoardContent(boardName, data) {
  const image_urls = [];
  for (let file of data.images || []) {
    if (!file) continue;
    const path = `${boardName}/${Date.now()}_${file.name}`;
    const refStorage = ref(storage, path);
    await uploadBytes(refStorage, file);
    image_urls.push(await getDownloadURL(refStorage));
  }

  const thum_url = image_urls[0] || '';

  const payload = {
    ...data,
    image_urls,
    thum_url,
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, boardName), payload);
  return docRef.id;
}