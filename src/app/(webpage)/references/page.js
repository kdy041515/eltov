"use client";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import Link from 'next/link';
import styles from "./page.module.scss";
import useTranslate from '@/hooks/useTranslate';

export default function References() {
    const translate = useTranslate();
    return (
        <>
        <SubVisual
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            titleCode="포트폴리오타이틀"
            subtextCode="포트폴리오서브타이틀"
        />

        <div className="container">
            <div className="category_tap">
                <h3>{translate("카테고리타이틀")}</h3>
                <ul>
                    <li><Link href="#">카테고리명</Link></li>
                </ul>
            </div>

            <div className="gall_list">
                <ul>
                    <li>
                        <Link href="#">
                            <div className="thum">
                                <img src="" alt="" />
                            </div>
                            <div className="cnt">
                                <div className="tit"></div>
                                <div className="desc"></div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}
