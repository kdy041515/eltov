"use client";
import { useEffect, useState } from "react";
import { getPortfolios, getPortfolioCategories } from "@/firebase/firestore";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import GallRegist from "@/components/partials/board/GallRegist";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PortfolioRegist() {
  return (
    <>
      <SubVisual
        image="/assets/images/subvisual/subvisual_portfolio.jpg"
        titleCode="포트폴리오타이틀"
        subtextCode="포트폴리오서브타이틀"
      />
      <div id="sub_content" className="container">
        <GallRegist linkPrefix="/portfolio" />
      </div>
    </>
  );
}
