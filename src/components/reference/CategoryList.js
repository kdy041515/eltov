'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CategoryList.module.scss';
import useTranslate from '@/hooks/useTranslate';
// const API_BASE = 'http://eltov.com/home/wp-json/wp/v2';

export default function CategoryList({ current }) {
  const translate = useTranslate();
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     fetch(`${API_BASE}/categories`)
//       .then((res) => res.json())
//       .then((data) => setCategories(Array.isArray(data) ? data : []))
//       .catch((err) => console.error(err));
//   }, []);

  return (
    <div className={styles.cates_tap}>
        <h3>{translate("카테고리타이틀")}</h3>
        <ul>
            {Array.from({ length: 15 }).map((_, i) => (
            <li key={`category-${i}`}>
                <a href="#">category{i}</a>
            </li>
            ))}

            {/* {categories.map((cat) => (
            <li key={cat.id}>
                <Link
                href={`/references?cat=${cat.id}`}
                className={current == cat.id ? 'on' : ''}
                >
                {cat.name}
                </Link>
            </li>
            ))} */}
        </ul>
    </div>
  );
}
