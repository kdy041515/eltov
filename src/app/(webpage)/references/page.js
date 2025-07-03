'use client';

import SubVisual from '@/components/partials/subVisual/SubVisual';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./page.module.scss";

export default function References() {
    const image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
    const title = { "ko": "포트폴리오", "en": "REFERENCS" };
    const subtext = { "ko": "포트폴리오11111", "en": "REFERENCS111111" };

    return (
        <>
            <SubVisual image={image} title={title} subtext={subtext} />
        </>
    );
}
