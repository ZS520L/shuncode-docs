// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ShunCode',
  tagline: '把编辑器变成可远程接管的 Agent 工作台',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
    faster: false,
  },

  url: 'https://docs.shuncode.top',
  baseUrl: '/',

  organizationName: 'ZS520L',
  projectName: 'shuncode-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/shuncode.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        hideOnScroll: false,
        logo: {
          alt: 'ShunCode',
          src: 'img/shuncode.png',
          srcDark: 'img/shuncode.png',
          href: '/docs/intro',
        },
        items: [
          {type: 'doc', docId: 'intro', position: 'left', label: '产品简介'},
          {type: 'doc', docId: 'chat/overview', position: 'left', label: 'Chat 模式'},
          {type: 'doc', docId: 'bridge/overview', position: 'left', label: 'Bridge 模式'},
          {type: 'doc', docId: 'advanced/overview', position: 'left', label: '高级玩法'},
          {type: 'doc', docId: 'faq', position: 'left', label: '常见问答'},
          {
            href: 'https://github.com/ZS520L/shuncode',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

