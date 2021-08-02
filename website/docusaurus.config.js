const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Engenharia Civil',
  tagline: 'conceitos, normas e processos',
  url: 'http://tcarvi.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tcarvi', // Usually your GitHub org/user name.
  projectName: 'tmechanics', // Usually your repo name.
  customFields: {
    mainButtonText: 'Comece a projetar',
    mainButtonUrl: 'docs/concreto-armado/topicos'
  },
  themeConfig: {
    navbar: {
      title: 'Engenharia Civil',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'ros/topicos',
          position: 'left',
          label: 'ROS',
        },
        {
          type: 'doc',
          docId: 'concreto-armado/topicos',
          position: 'left',
          label: 'Concreto Armado',
        },
        {
          type: 'doc',
          docId: 'eletricidade/topicos',
          position: 'left',
          label: 'Eletricidade',
        },
        {
          href: 'https://github.com/tcarvi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `TCARVI: Engenharia Civil. Licensa GNU. ${new Date().getFullYear()}`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
