import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "ecosystems",
  tagline: "Tools and datasets to support, sustain, and secure critical digital infrastructure.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.ecosyste.ms",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "ecosyste-ms", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Internationalization config
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  // Enable Mermaid diagrams
  markdown: {
    mermaid: true
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ecosyste-ms/docs/tree/main"
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/ecosystems-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "ecosystems Logo",
        src: "img/ecosystems-logo.svg",
        width: "150px",
        height: "30.5px"
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation"
        },
        {
          href: "https://github.com/ecosyste-ms/",
          label: "GitHub",
          position: "right"
        },
        {
          href: "https://mastodon.social/@ecosystems",
          label: "Mastodon",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/intro"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ecosyste-ms/"
            },
            {
              label: "Mastodon",
              href: "https://mastodon.social/@ecosystems"
            },
            {
              label: "OpenCollective",
              href: "https://opencollective.com/ecosystems"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Main Website",
              href: "https://ecosyste.ms/"
            },
            {
              label: "Contact",
              href: "mailto:hello@ecosyste.ms"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ecosyste.ms.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["ruby"]
    }
  } satisfies Preset.ThemeConfig
};

export default config;
