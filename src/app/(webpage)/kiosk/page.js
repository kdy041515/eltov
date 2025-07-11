"use client";
import { useEffect, useState } from "react";
import { getKiosks, getKioskCategories } from "@/firebase/firestore";
import useTranslate from "@/hooks/useTranslate";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import CategoryList from "@/components/partials/board/CategoryList";
import GallList from "@/components/partials/board/GallList";
import { useRouter, useSearchParams } from "next/navigation";

export default function KioskList() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    getKiosks().then(setItems).catch(console.error);
    getKioskCategories().then(setCategories).catch(console.error);
  }, []);

  useEffect(() => {
    const param = searchParams.get("category");
    if (param) setSelectedCategory(param);
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    const href = `/kiosk?category=${encodeURIComponent(category)}`;
    window.history.pushState({}, '', href);
  };

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "전체") return true;
    return item.category_code === selectedCategory;
  });

  return (
    <>
      <SubVisual
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80"
        titleCode="메뉴kiosk"
        subtextCode="메뉴kiosk"
      />
      <div id="sub_content" className="container">
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />
        <GallList items={filteredItems} linkPrefix="/kiosk" />
      </div>
    </>
  );
}
