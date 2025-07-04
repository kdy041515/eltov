"use client";
import styles from "./CategoryList.module.scss";
import { useStore } from "../../../store/useStore";
import useTranslate from "@/hooks/useTranslate";

export default function CategoryList({
  categories,
  selectedCategory,
  handleCategoryChange,
}) {
  const language = useStore((state) => state.language);
  const translate = useTranslate();
  return (
    <div className={styles.category_tap}>
      <h3>{translate("분류선택")}</h3>
      <ul>
        <li>
          <button type="button"
            className={selectedCategory === "전체" ? "active" : ""}
            onClick={() => handleCategoryChange("전체")}
          >
            {translate("전체")}
          </button>
        </li>
        {categories.map((category, index) => (
          <li key={index}>
            <button
              className={category.code === selectedCategory ? "active" : ""}
              onClick={() => handleCategoryChange(category.code)}
            >
              {language === "ko"
                ? category.ko
                : language === "en"
                  ? category.en
                  : language === "jp"
                    ? category.jp
                    : category.ch}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
