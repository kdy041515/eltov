'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const API_BASE = 'http://eltov.com/home/wp-json/wp/v2';

export default function CategoryList({ current }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/categories`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => setCategories(Array.isArray(data) ? data : []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {categories.map((cat) => (
        <li key={cat.id}>
          <Link
            href={`/references?cat=${cat.id}`}
            className={current == cat.id ? 'on' : ''}
          >
            {cat.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
