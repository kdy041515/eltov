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
          <a
            href="javacript:;"
            className={selectedCategory === "전체" ? styles.active : ""}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryChange("전체");
            }}
          >
            {translate("전체")}
          </a>
        </li>
        {categories.map((category, index) => (
          <li key={index}>
            <a 
              href="javacript:;"
              className={category.code === selectedCategory ? styles.active : ""}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryChange(category.code);
              }}
            >
              {language === "ko"
                ? category.ko
                : language === "en"
                  ? category.en
                  : language === "jp"
                    ? category.jp
                    : category.ch}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
