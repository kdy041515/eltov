"use client";
import SubVisual from "@/components/partials/subVisual/SubVisual";
import CategoryList from "@/components/common/CategoryList";
import PostList from "@/components/common/PostList";
import { endpoints } from '@/api/endpoints';
import { useSearchParams } from 'next/navigation';
import useTranslate from '@/hooks/useTranslate';

export default function References() {
    const translate = useTranslate();
    const searchParams = useSearchParams();
    const category = searchParams.get('cat');
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
                <CategoryList
                    endpoint={endpoints.references.categories}
                    current={category}
                    linkBuilder={(cat) => `/references?cat=${cat.id}`}
                />
            </div>

            <div className="gall_list">
                <PostList
                    endpoint={endpoints.references.posts}
                    category={category}
                    linkBuilder={(post) => `/references/${post.slug}`}
                />
            </div>
        </div>
        </>
    );
}
