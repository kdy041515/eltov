'use client';

import SubVisual from '../components/partials/subVisual/SubVisual';
import styles from './page.module.scss';

export default function References() {
  const image = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';
  return (
    <>
      <SubVisual
        image={image}
        titleCode="포트폴리오타이틀"
        subtextCode="포트폴리오서브타이틀"
      />
      {/* page content here */}
    </>
  );
}
