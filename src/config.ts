export const SITE = {
  title: "Acme Inc. Documentation",
  description: "Astro theme to build your design system fast.",
  defaultLanguage: "en_US",
  twitter: "@jordienr",
  github: "jordienr",
  linkedin: "linkedinUsername",
};

export const OPEN_GRAPH = {
  image: {
    src: "",
    alt: "",
  },
  twitter: "",
};

export const SIDEBAR = [
  { text: "Getting Started", link: "/core/introduction" },
  { text: "Design Tokens", link: "/core/design-tokens" },
  
  { text: "Foundations", header: true },
  { text: "Colors", link: "/core/colors" },
  { text: "Typography", link: "/core/typography" },
  { text: "Shadows", link: "/core/shadows" },
  { text: "Border Radius", link: "/core/typography" },
  { text: "Elevation", link: "/core/typography" },
  { text: "Spacing", link: "/core/typography" },

  { text: "Components", header: true },
  { text: "Buttons", link: "/components/buttons" },
  { text: "Input", link: "/components/input" },
  { text: "Status pills", link: "/components/status-pill" },
  { text: "Table", link: "/components/table" },
  { text: "Accordion", link: "/components/table" },
  { text: "Avatars", link: "/components/table" },
  { text: "Breadcrumbs", link: "/components/table" },

  { text: "Patterns", header: true },
  { text: "Introduction", link: "/patterns/introduction" },
];
