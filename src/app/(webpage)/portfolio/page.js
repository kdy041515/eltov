"use client";
import { useEffect, useState } from "react";
import { getPortfolios, getPortfolioCategories } from "@/firebase/firestore";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import CategoryList from "@/components/partials/board/CategoryList";
import GallList from "@/components/partials/board/GallList";
import { useRouter } from "next/navigation";

export default function PortfolioList() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const router = useRouter();

  useEffect(() => {
    getPortfolios()
      .then((data) => {
        setItems(data);
        {
          console.log(data);
        }
        //         [
        //     {
        //         "id": "7cTSWr4C7CsGOHudsML4",
        //         "image_urls": [
        //             "https://example.com/img2.jpg",
        //             "https://example.com/img3.jpg"
        //         ],
        //         "thum_url": "https://example.com/thumb1.jpg",
        //         "title_jp": "サンプルポートフォリオ jp123",
        //         "category_code": "터치디스플레이세로형",
        //         "video_urls": [
        //             "https://example.com/video1.mp4"
        //         ],
        //         "title_cn": "示例作品集 123CN",
        //         "description_ko": "이것은 한국어 샘플 설명입니다.123",
        //         "createdAt": {
        //             "type": "firestore/timestamp/1.0",
        //             "seconds": 1751611842,
        //             "nanoseconds": 244000000
        //         },
        //         "description_en": "This is a sample 123portfolio description in English.",
        //         "title_ko": "샘플 포트폴리오 KO123",
        //         "description_cn": "这是中文示例说明。123",
        //         "title_en": "Sample Portfolio en123",
        //         "description_jp": "これは日本語のサンプル説明です。123"
        //     },
        //     {
        //         "id": "CVwQqhe5Ewmpur0BlPSo",
        //         "title_en": "Sample Portfolio en123",
        //         "description_jp": "これは日本語のサンプル説明です。123",
        //         "category_code": "터치디스플레이가로형",
        //         "title_jp": "サンプルポートフォリオ jp123",
        //         "thum_url": "https://example.com/thumb1.jpg",
        //         "image_urls": [
        //             "https://example.com/img2.jpg",
        //             "https://example.com/img3.jpg"
        //         ],
        //         "title_cn": "示例作品集 123CN",
        //         "description_ko": "이것은 한국어 샘플 설명입니다.123",
        //         "description_cn": "这是中文示例说明。123",
        //         "video_urls": [
        //             "https://example.com/video1.mp4"
        //         ],
        //         "description_en": "This is a sample 123portfolio description in English.",
        //         "title_ko": "샘플 포트폴리오 KO123",
        //         "createdAt": {
        //             "type": "firestore/timestamp/1.0",
        //             "seconds": 1751611842,
        //             "nanoseconds": 195000000
        //         }
        //     }
        // ]
      })
      .catch(console.error);

    getPortfolioCategories()
      .then((data) => {
        setCategories(data);
        setSelectedCategory("전체");

        {
          console.log(data);
        }

        //         [
        //     {
        //         "id": "7OFylCGYDAcBthPOIkPV",
        //         "ch": "购物中心",
        //         "index": 7,
        //         "en": "Shopping Mall",
        //         "ko": "쇼핑몰",
        //         "code": "쇼핑몰",
        //         "jp": "ショッピングモール"
        //     },
        //     {
        //         "id": "7gxSAqGrjSd9laHUR3NY",
        //         "en": "Education",
        //         "index": 1,
        //         "code": "교육",
        //         "ko": "교육",
        //         "jp": "教育",
        //         "ch": "教育"
        //     },
        //     {
        //         "id": "8kSkQAtMMvH0EyUO1qSb",
        //         "en": "Showcase",
        //         "ko": "쇼케이스",
        //         "ch": "展示",
        //         "index": 8,
        //         "jp": "ショーケース",
        //         "code": "쇼케이스"
        //     },
        // ]
      })
      .catch(console.error);
  }, []);

  const handleCategoryChange = (code) => {
    setSelectedCategory(code);
    router.push({
      pathname: "/portfolio",
      query: { category: code },
    });
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
