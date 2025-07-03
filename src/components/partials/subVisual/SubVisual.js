'use client';

import styles from './Subvisual.module.scss';
import useTranslate from '@/hooks/useTranslate';

export default function SubVisual({ image, titleCode, subtextCode }) {
  const translate = useTranslate();
  return (
    <div
      className={styles.sub_page_title}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <h2>{translate(titleCode)}</h2>
      <div className={styles.sub}>{translate(subtextCode)}</div>
    </div>
  );
}
