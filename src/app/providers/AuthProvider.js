'use client';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';
import { useAuthStore } from '@/store/authStore';

export default function AuthProvider({ children }) {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return unsubscribe;
  }, [setUser]);

  return children;
}
