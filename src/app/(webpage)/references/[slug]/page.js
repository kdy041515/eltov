"use client";
import { useEffect, useState } from 'react';

const API_BASE = 'https://eltov.com/home/wp-json/wp/v2';

export default function ReferenceDetail({ params }) {
  const { slug } = params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/posts?slug=${slug}&_embed`)
      .then((res) => res.json())
      .then((data) => setPost(data && data.length ? data[0] : null))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!post) {
    return <div className="container">Loading...</div>;
  }

  const media = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <div className="container">
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      {media && <img src={media} alt={post.title.rendered} />}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}
