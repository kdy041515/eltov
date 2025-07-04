'use client';
import Link from 'next/link';
import styles from "./CategoryList.module.scss";
import useTranslate from '@/hooks/useTranslate';

export default function CategoryList() {
  const translate = useTranslate();
  return (
    <div className={styles.category_tap}>
      <h3>{translate("분류선택")}</h3>
      <ul>
        {Array.from({ length: 10 }).map((_, idx) => (
          <li key={idx}>
            <Link href="#" className={idx === 0 ? styles.active : undefined}>
              {`category${idx + 1}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
