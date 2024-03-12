Relix UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Why use Relix UI?

Based on the Tailwind CSS utility classes, Relix UI's prebuilt components and UI elements help you quickly design and customize responsive mobile-first websites with the components a website needs, including buttons, dropdowns, navigation bars, modals, and more.

## What's in the box?

Components are grouped by visual usability criteria (components, navigation, forms, etc.) and styled directly on top of Tailwind CSS, making them easy to extend and customize. This is a lifesaver for developers looking to create a unique and eye-catching design system without the hassle of creating each component by hand.

## Getting Started

### Quick Setup

This guide will help you get started with Relix UI, including how to run, customize, update, and integrate your project!

First, you need to make sure that you have a working <a href="https://tailwindcss.com/">Tailwind CSS</a> project installed and that you also have <a href="https://nodejs.org/en/">Node</a> and <a href="https://www.npmjs.com/">NPM</a> installed on your machine.

### Require via NPM

1. Install <code>relix</code> via npm

<pre><code>npm i tw-relix</code></pre>

2. Include Relix UI as a plugin in the <code>tailwind.config.js</code> file

<pre><code>module.exports = {
  content: [
    'node_modules/tw-relix/dist/*.js'
  ],
  plugins: [
    require('tw-relix/plugin')
  ],
}</code></pre>

3. Include the JavaScript ```<script>``` that powers the interactive elements near the end of your ```<body>``` tag:

```html
<script src="./node_modules/tw-relix/dist/relix.js"></script>
<!-- or  -->
<script type="module">
  import 'tw-relix'
</script>
```