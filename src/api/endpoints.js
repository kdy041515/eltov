export const API_BASE = 'https://eltov.com/home';

export const endpoints = {
  references: {
    categories: `${API_BASE}/wp-json/wp/v2/categories`,
    posts: `${API_BASE}/wp-json/wp/v2/posts?_embed`,
  },
  portfolio: {
    feed: `${API_BASE}/?post_type=portfolio_page&feed=rss2`,
  },
  kioskHardware: {
    feed: `${API_BASE}/?post_type=kiosk_page&feed=rss2`,
  },
};
