"use client";
import { useEffect, useState } from "react";
import { getPortfolios, getPortfolioCategories } from "@/firebase/firestore";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import CategoryList from "@/components/partials/board/CategoryList";
import GallList from "@/components/partials/board/GallList";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Suspense } from "react";

function PortfolioListContent() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const router = useRouter();

  useEffect(() => {
    getPortfolios()
      .then((data) => {
        setItems(data);
      })
      .catch(console.error);

    getPortfolioCategories()
      .then((data) => {
        setCategories(data);
        const params = new URLSearchParams(window.location.search);
        const param = params.get("category");
        setSelectedCategory(param || "전체");
      })
      .catch(console.error);
  }, []);

  const handleCategoryChange = (category) => {
    const href = `/portfolio?category=${encodeURIComponent(category)}`;
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
        image="/assets/images/subvisual/subvisual_portfolio.jpg"
        titleCode="포트폴리오타이틀"
        subtextCode="포트폴리오서브타이틀"
      />
      <div id="sub_content" className="container">
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />

        <div className="list_btns">
          <div className="right">
            <Link href="/portfolio/regist" className="btn">게시글 등록</Link>
          </div>
        </div>
        <GallList items={filteredItems} linkPrefix="/portfolio" />
      </div>
    </>
  );
}

export default function PortfolioList() {
  return (
    <Suspense fallback={null}>
      <PortfolioListContent />
    </Suspense>
  );
}
