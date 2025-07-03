export const API_BASE = 'http://eltov.com/home';

export const endpoints = {
  // RSS feed of all portfolio posts used for the references page
  references: {
    feed: `${API_BASE}/?post_type=portfolio_page&feed=rss2`,
  },

  // RSS feed filtered to the interactive-contents category
  portfolio: {
    feed: `${API_BASE}/?post_type=portfolio_page&feed=rss2&portfolio_category=interactive-contents`,
  },

  // RSS feed for kiosk hardware posts
  kioskHardware: {
    feed: `${API_BASE}/?post_type=kiosk_page&feed=rss2`,
  },
};
