"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getKiosks } from '@/firebase/firestore';
import useTranslate from '@/hooks/useTranslate';

export default function KioskList() {
  const [items, setItems] = useState([]);
  const translate = useTranslate();
  useEffect(() => {
    getKiosks().then(setItems).catch(console.error);
  }, []);
  return (
    <div id="sub_content" className="container">
      <h2>{translate("메뉴kiosk")}</h2>
      <ul>
        {items.map((p) => (
          <li key={p.id}>
            <Link href={`/kiosk/${p.id}`}>{p.title?.ko}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
