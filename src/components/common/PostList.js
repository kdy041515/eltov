'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PostList({ endpoint, category, linkBuilder }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!endpoint) return;
    let url = endpoint;
    const isRss = url.includes('feed=rss2');
    if (category && !isRss) url += `&categories=${category}`;

    fetch(url)
      .then((res) => (isRss ? res.text() : res.json()))
      .then((data) => {
        if (isRss) {
          const parser = new DOMParser();
          const xml = parser.parseFromString(data, 'text/xml');
          const items = Array.from(xml.querySelectorAll('item'));
          const filtered = category
            ? items.filter(
                (it) => it.querySelector('category')?.textContent === category
              )
            : items;
          setPosts(
            filtered.map((item) => ({
              id: item.querySelector('guid')?.textContent,
              title: item.querySelector('title')?.textContent || '',
              excerpt: item.querySelector('description')?.textContent || '',
              link: item.querySelector('link')?.textContent || '',
              category: item.querySelector('category')?.textContent || '',
            }))
          );
        } else {
          setPosts(Array.isArray(data) ? data : []);
        }
      })
      .catch((err) => console.error(err));
  }, [endpoint, category]);

  const buildLink = (post) => {
    if (typeof linkBuilder === 'function') return linkBuilder(post);
    if (post.slug) return `/references/${post.slug}`;
    return post.link || '#';
  };

  return (
    <ul>
      {posts.map((post) => {
        const media = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        const title = post.title?.rendered || post.title;
        const excerpt = post.excerpt?.rendered || post.excerpt;
        return (
          <li key={post.id || post.link}>
            <Link href={buildLink(post)}>
              <div className="thum">
                {media && <img src={media} alt={title} />}
              </div>
              <div className="cnt">
                <div className="tit" dangerouslySetInnerHTML={{ __html: title }} />
                {excerpt && (
                  <div className="desc" dangerouslySetInnerHTML={{ __html: excerpt }} />
                )}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
