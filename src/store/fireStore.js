import {
  collection,
  addDoc,
  serverTimestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebaseConfig';

/**
 * @param {string} boardName
 * @param {object} params
 * @param {string} params.title
 * @param {string} params.description
 * @param {File[]} params.images
 * @param {string[]} params.youtubeUrls
 * @returns {string}
 */
export async function uploadBoardContent(
  boardName,
  { title, description, images, youtubeUrls }
) {
  const imageUrls = [];
  for (let i = 0; i < images.length; i++) {
    const file = images[i];
    if (!file) continue;
    const storageRef = ref(
      storage,
      `${boardName}/${Date.now()}_${file.name}`
    );
    await uploadBytes(storageRef, file);
    imageUrls.push(await getDownloadURL(storageRef));
  }

  const docRef = await addDoc(
    collection(db, boardName),
    {
      title,
      description,
      images: imageUrls,
      youtubeUrls: youtubeUrls.filter((u) => u),
      createdAt: serverTimestamp(),
    }
  );

  return docRef.id;
}
