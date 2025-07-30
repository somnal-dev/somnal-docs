import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '솜날 Docs',
  tagline: 'Somnal Docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://somnal-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'somnal', // Usually your GitHub org/user name.
  projectName: 'somnal-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@component': path.resolve(__dirname, 'src/component'),
        }
      }
    ],
    [
      'docusaurus-lunr-search',
      {
        indexBaseUrl: true,
        fields: {
          content: { boost: 5 },
        }
      },
    ]
  ],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarCollapsed: false,
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '솜날 Docs',
      logo: {
        alt: '솜날 Docs',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/docs',
          docId: '/',
          label: '문서',
          position: 'left',
        },
        {
          href: 'https://github.com/somnal-dev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '사이트',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/somnal-dev',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()}. Somnal All rights reserved.`,
    },
    prism: {
      theme: prismThemes.palenight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;