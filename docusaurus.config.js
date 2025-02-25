// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vewrite Documentation',
  tagline: 'Unleash the full power of your writing team.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.vewrite.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vewrite', // Usually your GitHub org/user name.
  projectName: 'vewrite-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vewrite/vewrite-docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/vewrite-social-card.jpg',
      navbar: {
        title: 'Vewrite Documentation',
        logo: {
          alt: 'Vewrite',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'getstartedSidebar',
            position: 'left',
            label: 'Get Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'coreconceptsSidebar',
            position: 'left',
            label: 'Core Concepts',
          },
          {
            type: 'docSidebar',
            sidebarId: 'workflowsSidebar',
            position: 'left',
            label: 'Workflows',
          },
          {
            type: 'docSidebar',
            sidebarId: 'walkthroughsSidebar',
            position: 'left',
            label: 'Walkthroughs',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Get Started',
                to: '/docs/get-started/introduction',
              },
              {
                label: 'Core Concepts',
                to: '/docs/core-concepts/introduction',
              },
              {
                label: 'Workflows',
                to: '/docs/workflows/introduction',
              },
              {
                label: 'Walkthroughs',
                to: '/docs/walkthroughs/introduction',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Homepage',
                href: 'https://vewrite.com/',
              },
              {
                label: 'News',
                href: 'https://vewrite.com/articles',
              },
              {
                label: 'Mission',
                href: 'https://vewrite.com/company/mission',
              },
              {
                label: 'Support',
                href: 'https://vewrite.com/support',
              },
            ],
          },
          {
            title: 'Social Links',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/vewrite',
              },
              {
                label: 'X',
                href: 'https://x.com/GetVewrite',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vewrite`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
