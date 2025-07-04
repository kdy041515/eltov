"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getKiosk } from "@/firebase/firestore";
import { useStore } from "@/store/useStore";

export default function KioskDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const language = useStore((state) => state.language);
  useEffect(() => {
    if (!id) return;
    getKiosk(id).then(setItem).catch(console.error);
  }, [id]);
  if (!item) return null;
  const title =
    language === "ko"
      ? item.title_ko
      : language === "en"
        ? item.title_en
        : language === "jp"
          ? item.title_jp
          : item.title_cn;
  const desc =
    language === "ko"
      ? item.description_ko
      : language === "en"
        ? item.description_en
        : language === "jp"
          ? item.description_jp
          : item.description_cn;
  return (
    <div id="sub_content" className="container">
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="images">
        {item.image_urls?.map((src, idx) => (
          <img key={idx} src={src} alt="" />
        ))}
      </div>
    </div>
  );
}
