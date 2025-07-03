'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const API_BASE = 'https://eltov.com/home/wp-json/wp/v2';

export default function PostList({ category }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let url = `${API_BASE}/posts?_embed`;
    if (category) url += `&categories=${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <ul>
      {posts.map((post) => {
        const media = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        return (
          <li key={post.id}>
            <Link href={`/references/${post.slug}`}>
              <div className="thum">
                {media && <img src={media} alt={post.title.rendered} />}
              </div>
              <div className="cnt">
                <div
                  className="tit"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div
                  className="desc"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
