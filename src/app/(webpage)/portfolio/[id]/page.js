"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getPortfolio } from '@/firebase/firestore';

export default function PortfolioDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    if (!id) return;
    getPortfolio(id).then(setItem).catch(console.error);
  }, [id]);
  if (!item) return null;
  return (
    <div id="sub_content" className="container">
      <h2>{item.title?.ko}</h2>
      <p>{item.description?.ko}</p>
      <div className="images">
        {item.image_urls?.map((src, idx) => (
          <img key={idx} src={src} alt="" />
        ))}
      </div>
    </div>
  );
}
