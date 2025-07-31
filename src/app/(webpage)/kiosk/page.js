"use client";
import { useEffect, useState } from "react";
import { getKiosks, getKioskCategories } from "@/firebase/firestore";
import useTranslate from "@/hooks/useTranslate";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import CategoryList from "@/components/partials/board/CategoryList";
import GallList from "@/components/partials/board/GallList";
import { useRouter } from "next/navigation";

import { Suspense } from "react";

function KioskListContent() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const router = useRouter();

  useEffect(() => {
    getKiosks().then(setItems).catch(console.error);
    getKioskCategories().then(setCategories).catch(console.error);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get("category");
    if (param) setSelectedCategory(param);
  }, []);

  const handleCategoryChange = (category) => {
    const href = `/kiosk?category=${encodeURIComponent(category)}`;
    router.push(href);
    setSelectedCategory(category);
  };

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "전체") return true;
    return item.category_code === selectedCategory;
  });

  return (
    <>
      <SubVisual
        image="/assets/images/subvisual/subvisual_kioskhw.jpg"
        titleCode="키오스크hw타이틀"
        subtextCode="키오스크hw서브타이틀"
      />
      <div id="sub_content" className="container sub_round">
        <div className="round_inner">
          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
          />
          <GallList items={filteredItems} linkPrefix="/kiosk" />
        </div>
      </div>
    </>
  );
}

export default function KioskList() {
  return (
    <Suspense fallback={null}>
      <KioskListContent />
    </Suspense>
  );
}
