"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPortfolio } from "@/firebase/firestore";
import { useStore } from "@/store/useStore";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import GallDetail from "@/components/partials/board/GallDetail";

export default function PortfolioDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const language = useStore((state) => state.language);
  useEffect(() => {
    if (!id) return;
    getPortfolio(id).then(setItem).catch(console.error);
  }, [id]);
  if (!item) return null;
  return (
    <>
      <SubVisual
        image="/assets/images/subvisual/subvisual_portfolio.jpg"
        titleCode="포트폴리오타이틀"
        subtextCode="포트폴리오서브타이틀"
      />
      <div id="sub_content" className="container">
        <GallDetail item={item} />
      </div>
    </>
  );
}
