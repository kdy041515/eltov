'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "./GallList.module.scss";
import useTranslate from '@/hooks/useTranslate';

export default function GallList({}) {
  const translate = useTranslate();
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  ];
  return (
    <div className={styles.gall_list}>
      <ul>
        {Array.from({ length: 20 }).map((_, idx) => (
          <li key={idx}>
            <Link href="#">
              <div className={styles.thum}>
                <img src={images[idx % images.length]} />
              </div>
              <div className={styles.cnt}>
                <div className={styles.tit}>
                  프로젝트 이름
                </div>
                <div className={styles.desc}>
                  프로젝트 내용 프로젝트 내용 프로젝트 내용 프로젝트 내용 프로젝트 내용 
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
