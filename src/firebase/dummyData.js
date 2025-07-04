export const portfolioData = Array.from({ length: 20 }).map((_, i) => ({
  title: {
    en: `Portfolio ${i + 1}`,
    ko: `포트폴리오 ${i + 1}`,
    jp: `ポートフォリオ ${i + 1}`,
    cn: `作品集 ${i + 1}`,
  },
  description: {
    en: `Portfolio description ${i + 1}`,
    ko: `포트폴리오 설명 ${i + 1}`,
    jp: `ポートフォリオ説明 ${i + 1}`,
    cn: `作品集説明 ${i + 1}`,
  },
  createdAt: new Date().toISOString(),
  thum_url: `https://picsum.photos/seed/portfolio${i}/300/200`,
  image_urls: [`https://picsum.photos/seed/portfolio${i}a/600/400`],
  video_urls: [],
  category: 'default',
}));

export const kioskData = Array.from({ length: 20 }).map((_, i) => ({
  title: {
    en: `Kiosk ${i + 1}`,
    ko: `키오스크 ${i + 1}`,
    jp: `キオスク ${i + 1}`,
    cn: `亭 ${i + 1}`,
  },
  description: {
    en: `Kiosk description ${i + 1}`,
    ko: `키오스크 설명 ${i + 1}`,
    jp: `キオスク説明 ${i + 1}`,
    cn: `亭説明 ${i + 1}`,
  },
  createdAt: new Date().toISOString(),
  thum_url: `https://picsum.photos/seed/kiosk${i}/300/200`,
  image_urls: [`https://picsum.photos/seed/kiosk${i}a/600/400`],
  video_urls: [],
  category: 'default',
}));
