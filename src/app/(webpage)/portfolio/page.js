"use client";
import { useEffect, useState } from "react";
import { getPortfolios, getPortfolioCategories } from "@/firebase/firestore";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import CategoryList from "@/components/partials/board/CategoryList";
import GallList from "@/components/partials/board/GallList";
import { useRouter, useSearchParams } from "next/navigation";

export default function PortfolioList() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    getPortfolios()
      .then((data) => {
        setItems(data);
      })
      .catch(console.error);

    getPortfolioCategories()
      .then((data) => {
        setCategories(data);
        const param = searchParams.get("category");
        setSelectedCategory(param || "전체");
      })
      .catch(console.error);
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    const href = `/portfolio?category=${encodeURIComponent(category)}`;
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
        titleCode="포트폴리오타이틀"
        subtextCode="포트폴리오서브타이틀"
      />
      <div id="sub_content" className="container">
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />
        <GallList items={filteredItems} linkPrefix="/portfolio" />
      </div>
    </>
  );
}
