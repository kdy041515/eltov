"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getPortfolios } from '@/firebase/firestore';
import useTranslate from '@/hooks/useTranslate';

export default function PortfolioList() {
  const [items, setItems] = useState([]);
  const translate = useTranslate();
  useEffect(() => {
    getPortfolios().then(setItems).catch(console.error);
  }, []);
  return (
    <div id="sub_content" className="container">
      <h2>{translate("포트폴리오타이틀")}</h2>
      <ul>
        {items.map((p) => (
          <li key={p.id}>
            <Link href={`/portfolio/${p.id}`}>{p.title?.ko}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
