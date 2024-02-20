// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Raedius Web Console",
  tagline: "Web based IOT device management platform",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://raedius-v2.yosmart.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "YoSmart", // Usually your GitHub org/user name.
  projectName: "Raedius", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      "zh-CN": {
        label: "简体中文",
        htmlLang: "zh-CN",
        path: "zh-CN",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          includeCurrentVersion: true,
          versions: {
            current: {
              label: "Current",
            },
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Raedius",
        logo: {
          alt: "Raedius Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "YoSmart",
            items: [
              {
                label: "Official WebSite",
                href: "http://www.yosmart.com/",
              },
              {
                label: "Shop",
                href: "https://shop.yosmart.com/",
              },
            ],
          },
          {
            title: "Follow US",
            items: [
              {
                label: "Facebook",
                to: "https://www.facebook.com/YoLinkbyYoSmart",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/c/YoLinkbyYoSmart",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} YoSmart, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
