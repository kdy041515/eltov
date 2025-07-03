'use client';
import AccessibilityManager from './AccessibilityManager';

export default function Providers({ children }) {
  return (
    <>
      <AccessibilityManager />
      {children}
    </>
  );
}
