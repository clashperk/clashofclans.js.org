// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const package = require('./lib/package.json');

const site = {
  title: 'clashofclans.js',
  url: 'https://clashofclans.js.org',
  description: 'JavaScript library for interacting with the Clash of Clans API'
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: site.title,
  tagline: site.description,
  url: site.url,
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'clashperk',
  projectName: 'clashofclans.js.org',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          sidebarPath: require.resolve('./.sidebar.config.js'),
          editUrl: 'https://github.com/clashperk/clashofclans.js.org/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      })
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // hideableSidebar: false,
      // announcementBar: {
      //   id: 'wip',
      //   content: '',
      //   backgroundColor: '#FAFBFC',
      //   textColor: '#091E42',
      //   isCloseable: true
      // },
      navbar: {
        hideOnScroll: true,
        title: 'clashofclans.js',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation'
          },
          { to: '/guide', label: 'Guide', position: 'left' },
          { to: '/docs/changelog', label: 'Changelog', position: 'left' },
          {
            type: 'dropdown',
            label: `v${package.version}`,
            position: 'right',
            items: [
              {
                label: package.version,
                href: 'https://clashofclans.js.org/docs',
              },
              {
                href: 'https://www.npmjs.com/package/clashofclans.js/v/1.5.5',
                label: '1.5.5',
              }
            ]
          },
          {
            href: 'https://discord.gg/Eaja7gJ',
            label: 'Discord',
            position: 'right'
          },
          {
            href: 'https://github.com/clashperk/clashofclans.js',
            label: 'GitHub',
            position: 'right'
          }
        ],
      },
      algolia: {
        appId: 'BH4D9OD16A',
        indexName: 'clashofclans-js',
        apiKey: 'c6f235189c1d5eba74bce7baecbd719c',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resource',
            items: [
              {
                label: 'NPM',
                href: 'https://www.npmjs.com/package/clashofclans.js',
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community Discord',
                href: 'https://discord.gg/clashapi',
              }
            ]
          },
          {
            title: 'Developer',
            items: [
              {
                label: 'Clash of Clans API',
                href: 'https://developer.clashofclans.com/#/',
              }
            ]
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Supercell Fan Content Policy',
                href: 'https://supercell.com/en/fan-content-policy/'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} clashofclans.js.org. Built with Docusaurus.`,
      },
      prism: {
        defaultLanguage: 'javascript',
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'dark'
      },
      metadata: [
        { name: 'theme-color', content: '#5970C1' },
        { property: 'og:title', content: site.title },
        { property: 'og:description', content: site.description },
        { name: 'google-site-verification', content: '_9bt5DMtLPf2684c1fw3ecwUK4Hvtx1y0JuYTSU3Mak' }
      ],
      docs: {
        sidebar: {
          hideable: false
        }
      }
    }),

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      ({
        id: 'lib',
        readme: 'none',
        tsconfig: './lib/tsconfig.json',
        entryPoints: ['./lib/src/index.ts'],
        excludeExternals: true,
        excludeInternal: true,
        excludePrivate: true,
        excludeProtected: true,
        sort: ['instance-first']
      })
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'guide',
        path: 'guide',
        routeBasePath: 'guide',
        sidebarPath: require.resolve('./.sidebar.guide.js'),
        editUrl: 'https://github.com/clashperk/clashofclans.js.org/edit/master/'
      }),
    ]
  ],
};

module.exports = config;
