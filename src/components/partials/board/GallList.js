"use client";
import Link from "next/link";
import styles from "./GallList.module.scss";
import useTranslate from "@/hooks/useTranslate";
import { useStore } from "../../../store/useStore";

export default function GallList({ items, linkPrefix = "" }) {
  const language = useStore((state) => state.language);
  return (
    <div className={styles.gall_list}>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <Link href={linkPrefix ? `${linkPrefix}/${item.id}` : "#"}>
              <div className={styles.thum}>
                <img src={item.thum_url} />
              </div>
              <div className={styles.cnt}>
                <div className={styles.tit}>
                  {language === "ko"
                    ? item.title_ko
                    : language === "en"
                      ? item.title_en
                      : language === "jp"
                        ? item.title_jp
                        : item.title_cn}
                </div>
                <div className={styles.desc}>
                  {language === "ko"
                    ? item.description_ko
                    : language === "en"
                      ? item.description_en
                      : language === "jp"
                        ? item.description_jp
                        : item.description_cn}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
