# Frontend Mentor - Crowdfunding Product Page Solution

[Español](./README.es.md)

This is my solution to the [Crowdfunding Product Page challenge](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR) on Frontend Mentor. I built a responsive product page with React, Tailwind CSS, and Motion. Visitors can choose a reward, enter a pledge, and see the campaign totals and remaining stock update.

The pledges are a frontend simulation: all changes are held in React state and reset when the page reloads.

---

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Design](#design)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)

---

## Overview

This page presents the Mastercraft Bamboo Monitor Riser crowdfunding campaign. It includes a responsive header, a bookmark control, campaign statistics, a progress bar, reward cards, a pledge modal, and a confirmation modal.

Visitors can open the pledge modal from the main button or directly from a reward card. Selecting a reward reveals its pledge form, and the modal scrolls to that option. Unavailable rewards cannot be selected.

---

## The challenge

Users should be able to:

- View a layout adapted to mobile and desktop screens.
- Open and close the mobile navigation menu.
- Toggle the bookmark state.
- Choose a pledge with or without a reward.
- Enter an amount that meets the selected option's minimum pledge.
- See the total raised, number of backers, and progress bar update after a pledge.
- See the selected reward's remaining stock decrease by one.
- See unavailable rewards disabled.
- See a confirmation modal after completing a pledge.

---

## Design

- Desktop design

<img src="./design/desktop-design.jpg" alt="Desktop design preview" width="600">

- Active states

<img src="./design/active-states-default.jpg" alt="Interactive states preview" width="400">

- Mobile design

<img src="./design/mobile-design.jpg" alt="Mobile design preview" width="200">

- Mobile menu

<img src="./design/mobile-menu.jpg" alt="Mobile menu preview" width="200">

- Selected pledge modal

<img src="./design/desktop-design-modal-selected.jpg" alt="Selected pledge modal preview" width="400">

---

## Links

- Solution URL: [GitHub repository](https://github.com/mlopezl/crowdfunding-product-page)
- Live Site URL: [GitHub Pages demo](https://mlopezl.github.io/crowdfunding-product-page/)

---

## My process

- Split the page into reusable React components for the header, statistics, reward cards, pledge form, and modals.
- Built the responsive layout with Tailwind CSS utilities.
- Kept campaign totals, backer count, stock, and the selected reward in React state.
- Validated whole-number pledges against each option's minimum before updating the campaign.
- Connected reward buttons to the pledge modal and scrolled the chosen option into view.
- Added a short fade-in animation to the modals with Motion.
- Configured Vite to generate the GitHub Pages build in `docs/` with relative asset paths.

---

## Built with

- Semantic HTML5
- React and React Hooks
- Tailwind CSS
- JavaScript (ES6+)
- Motion for React
- Vite
- pnpm
- Responsive design

---

## What I learned

- How to coordinate related state across multiple React components.
- How to validate a pledge before changing totals and inventory.
- How to keep reward cards and modal options synchronized with the same stock data.
- How to scroll a selected option into view inside a modal.
- How to prepare a Vite build for a GitHub Pages project site.