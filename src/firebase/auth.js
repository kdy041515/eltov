import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

/**
 * @param {string} id
 * @param {string} password
 */
export function loginWithId(id, password) {
  return signInWithEmailAndPassword(auth, id, password);
}

export function logout() {
  return signOut(auth);
}
