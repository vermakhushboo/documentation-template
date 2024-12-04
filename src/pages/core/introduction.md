---
title: Introduction
description: Docs intro
layout: ../../layouts/MainLayout.astro
setup: |
  import MainButton from '../../components/MainButton.vue'
  import { Github } from 'lucide-vue-next'
  import { Link } from 'lucide-vue-next'
---

# Documentation

This is Acme Inc’s open-source design system for building consistent and reusable user interfaces. It is designed to prioritize collaboration, dev experience, and accessibility.
<div style="margin-top: 20px; display: flex; gap: 10px;">
    <MainButton primary>Get started</MainButton>
    <MainButton secondary>
         <Github color="#56565C" size={15} /> GitHub
    </MainButton>
</div>

<div class="flex items-center flex-row" style="gap: 10px;">
  <h1 class="mr-2">Getting Started</h1>
  <Link color="#56565C" size={15}/>
</div>

<div class="flex items-center" style="gap: 10px;">
  <h3 class="mr-2">CDN</h1>
  <Link color="#56565C" size={15}/>
</div>

Include the CSS library in your project.
Copy the following code into the `<head>` section of your HTML file.

```js
export const SIDEBAR = [
    { text: "Core", header: true },
    { text: "Introduction", link: "/core/introduction" },
    ...,
    { text: "Components", header: true },
    { text: "Buttons", link: "/components/buttons" },
    ...,
    { text: "New section", header: true },
    { text: "New component", link: "/new-section/new-component.md" },
];
```

<div class="flex items-center" style="gap: 10px;">
  <h3 class="mr-2">NPM</h1>
  <Link color="#56565C" size={15}/>
</div>

To add new pages just create an .astro or markdown file in `src/pages/[section]/my-page.md`. Remember to add it to the navigation config in `src/config.ts` so it shows up in the left side navigation.

You're free to organize the pages however you want.

### Customizing Core section (colors, typography, shadows...)

If you want to customize the default colors, typography or shadows you can find the configuration file at `src/config/design.config.ts`.

Feel free to add new pages to the Core section

### Customizing the page layout

You can find the css for the pages in `src/styles/content.scss`.

### Adding your components

Astro is great for design systems because it allows you to import components from different frameworks like react, vue or svelte.

To get started check how the `MainButton` component is used in the `src/pages/en/buttons.md` file.

You can import your component library or create your own and document it easily.

### `.component-preview` utility

There's a class called `.component-preview` that you can use to wrap your component in a grid, and it will look like this:

<div class="component-preview">
    <button class="text-white bg-blue-500 px-4 py-2 rounded-md">Your component</button>
</div>

### Have fun!
