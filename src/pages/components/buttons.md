---
title: "Buttons"
layout: "../../layouts/MainLayout.astro"
setup: |
  import MainButton from '../../components/MainButton.vue'
---

## Button

The Button component is a versatile UI element used for initiating actions or submitting data in your application. It is one of the most common interactive elements and is designed to be highly customizable to meet different use cases.

<div class="component-preview">
    <MainButton primary>Button</MainButton>
</div>

## Overview

A button typically triggers an event when clicked, such as form submissions, navigation, or interactions with other elements in the interface. Our Button component follows the principles of clarity, accessibility, and consistency.

## Usage

<div class="component-preview">
    <MainButton primary>Button</MainButton>
    <MainButton secondary>Button</MainButton>
    <MainButton text>Button</MainButton>
</div>

The Button component should be used to perform primary or secondary actions within your UI. It is important to choose the correct button style depending on the importance of the action.

```js
<MainButton primary>Button</MainButton>
<MainButton secondary>Button</MainButton>
<MainButton text>Button</MainButton>
```

