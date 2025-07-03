'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CategoryList({ endpoint, current, linkBuilder }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!endpoint) return;
    const isRss = endpoint.includes('feed=rss2');
    if (isRss) {
      fetch(endpoint)
        .then((res) => res.text())
        .then((xmlStr) => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(xmlStr, 'text/xml');
          const items = Array.from(xml.querySelectorAll('item'));
          const names = Array.from(
            new Set(
              items
                .map((it) => it.querySelector('category')?.textContent)
                .filter(Boolean)
            )
          );
          setCategories(names.map((n) => ({ id: n, name: n })));
        })
        .catch((err) => console.error(err));
    } else {
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => setCategories(Array.isArray(data) ? data : []))
        .catch((err) => console.error(err));
    }
  }, [endpoint]);

  const buildLink = (cat) => {
    if (typeof linkBuilder === 'function') return linkBuilder(cat);
    const id = cat.id || cat.name;
    return `?cat=${id}`;
  };

  return (
    <ul>
      {categories.map((cat) => {
        const id = cat.id || cat.name;
        return (
          <li key={id}>
            <Link href={buildLink(cat)} className={current == id ? 'on' : ''}>
              {cat.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
