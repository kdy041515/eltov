"use client";
import Link from "next/link";
import styles from "./CategoryList.module.scss";
import { useStore } from "../../../store/useStore";

export default function CategoryList({ categories, selectedCategory, handleCategoryChange }) {
  const language = useStore((state) => state.language);
  return (
    <div className={styles.category_tap}>
      <h3>분류선택</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              href="#"
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleCategoryChange(category)}
            >
                {language}
              {language === "ko"
                ? category.ko
                : language === "en"
                ? category.en
                : language === "jp"
                ? category.jp
                : category.cn
                }
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
