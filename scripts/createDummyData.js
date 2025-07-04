import { collection, addDoc } from 'firebase/firestore';
import { db } from '../src/firebase/firebaseConfig.js';
import { portfolioData, kioskData } from '../src/firebase/dummyData.js';

async function run() {
  for (const item of portfolioData) {
    await addDoc(collection(db, 'portfolio'), item);
  }
  for (const item of kioskData) {
    await addDoc(collection(db, 'kiosk'), item);
  }
  console.log('Dummy data inserted');
}

run().catch(err => console.error(err));
