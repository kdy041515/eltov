"use client";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import CategoryList from "@/components/partials/board/CategoryList";
import PostList from "@/components/partials/board/GallList";
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

            <div id="sub_content" className="container">
                <CategoryList/>
                <PostList/>
            </div>
        </>
    );
}
