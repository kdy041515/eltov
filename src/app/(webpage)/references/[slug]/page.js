"use client";
import { useEffect, useState } from 'react';
import PostList from "@/components/partials/board/GallList";

export default function ReferenceDetail({ params }) {
  const { slug } = params;

  return (
    <div id="sub_content" className="container">
      
      <div className="title"></div>
      <div className="description"></div>
      <div className="date"></div>
      <div className="images">
        <div className="item"></div>
      </div>
      <div className="videos">
        <div className="item"></div>
      </div>

      <div className="sub_list">
        <PostList/>
      </div>
    </div>
  );
}
