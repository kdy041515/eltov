"use client";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import CategoryList from "@/components/partials/board/CategoryList";
import GallList from "@/components/partials/board/GallList";
import useTranslate from '@/hooks/useTranslate';
import { useEffect, useState } from 'react';
import { getKiosks } from '@/firebase/firestore';

export default function KioskHardware() {
  const translate = useTranslate();
  const [items, setItems] = useState([]);
  useEffect(() => {
    getKiosks().then(setItems).catch(console.error);
  }, []);
  return (
    <>
      <SubVisual
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80"
        titleCode="키오스크hw타이틀"
        subtextCode="키오스크hw서브타이틀"
      />

       <div id="sub_content" className="container">
          <CategoryList/>
          <GallList items={items}/>
      </div>
    </>
  );
}
