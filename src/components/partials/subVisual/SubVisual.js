'use client';

import styles from "./Subvisual.module.scss";

export default function SubVisual() {
    return (
        <div className={style.sub_page_title}
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
            }}
        >
            <h2>포트폴리오</h2>
            <div className={style.sub}></div>
        </div>
    );
}


