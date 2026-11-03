import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: '首页', href: getPermalink('/') },
    { text: '关于我们', href: getPermalink('/about') },
    { text: '技术方向', href: getPermalink('/#explore') },
    { text: '文章与动态', href: getBlogPermalink() },
  ],
  actions: [
    { text: '加入 IO 社', href: getPermalink('/#join'), icon: 'tabler:arrow-up-right', variant: 'primary' as const },
  ],
};

export const footerData = {
  links: [
    {
      title: '认识 IO Club',
      links: [
        { text: '关于我们', href: getPermalink('/about') },
        { text: '技术方向', href: getPermalink('/#explore') },
        { text: '加入 IO 社', href: getPermalink('/#join') },
        { text: '文章与动态', href: getBlogPermalink() },
      ],
    },
    {
      title: '保持连接',
      links: [
        { text: 'GitHub 组织', href: 'https://github.com/io-club' },
        { text: '网站源码', href: 'https://github.com/io-club/io-club.github.io' },
        { text: 'RSS 订阅', href: getAsset('/rss.xml') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'RSS 订阅', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'IO Club GitHub 组织', icon: 'tabler:brand-github', href: 'https://github.com/io-club' },
  ],
  footNote: `© ${new Date().getFullYear()} IO Club · Built with <a class="underline" href="https://astro.build/">Astro</a> & <a class="underline" href="https://github.com/onwidget/astrowind">AstroWind</a>`,
};
