"use client";
import Link from "next/link";
import styles from "./GallDetail.module.scss";
import useTranslate from "@/hooks/useTranslate";
import { useStore } from "../../../store/useStore";

export default function GallDetail({ item }) {
  const language = useStore((state) => state.language);
  return (
    <div className={styles.detail_wrap}>
        <div className={styles.detail_files}>
            {item.image_urls && 
                <div className={styles.images}>
                {item.image_urls?.map((src, idx) => (
                    <div className={styles.item}>
                        <img key={idx} src={src} alt="" />
                    </div>
                ))}
                </div>
            }
            {item.video_urls && 
                <div className={styles.videos}>
                {item.image_urls?.map((src, idx) => (
                    <div className={styles.item}>
                        <video key={idx} src={src}></video>
                    </div>
                ))}
                </div>
            }
        </div>
        <div className={styles.detail_content}>
            <h2>
                {language === "ko"
                    ? item.title_ko
                    : language === "en"
                      ? item.title_en
                      : language === "jp"
                        ? item.title_jp
                        : item.title_cn}
            </h2>
            <p>
                {language === "ko"
                    ? item.description_ko
                    : language === "en"
                      ? item.description_en
                      : language === "jp"
                        ? item.description_jp
                        : item.description_cn}
            </p>
        </div>
    </div>
  );
}
