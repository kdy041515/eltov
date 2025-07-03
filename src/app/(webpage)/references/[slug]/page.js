"use client";
import { useEffect, useState } from 'react';

import { endpoints } from '@/api/endpoints';

export default function ReferenceDetail({ params }) {
  const { slug } = params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(endpoints.references.feed)
      .then((res) => res.text())
      .then((xmlStr) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlStr, 'text/xml');
        const items = Array.from(xml.querySelectorAll('item'));
        const item = items.find((it) => {
          const link = it.querySelector('link')?.textContent || '';
          return link.includes(slug);
        });
        if (!item) return;
        setPost({
          title: item.querySelector('title')?.textContent || '',
          content:
            item.querySelector('content\\:encoded')?.textContent ||
            item.querySelector('description')?.textContent || '',
          media: item.querySelector('enclosure')?.getAttribute('url') || '',
        });
      })
      .catch((err) => console.error(err));
  }, [slug]);

  if (!post) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      {post.media && <img src={post.media} alt={post.title} />}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
