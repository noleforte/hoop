# HOOP Website

A fully responsive website for HOOP - an experimental visual experience built around community, creativity, and connection.

## Features

- **Banner Section**: Fullscreen background with animated text and parallax effects
- **About Section**: Elegant description with animated icons
- **Swap & Socials**: Split layout with swap placeholder and social media links
- **Gallery**: Responsive image grid with hover animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Modern Animations**: Smooth entrance animations using Framer Motion
- **Clean Design**: Minimalist icons and modern typography

## Tech Stack

- React 18
- TailwindCSS 3
- Framer Motion
- Space Grotesk font family

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Design Specifications

- **Background Color**: #fee7bf
- **Typography**: Space Grotesk (Google Fonts)
- **Animations**: Fade-in, slide-up, and hover effects
- **Layout**: Fully responsive with mobile-first approach

## Project Structure

```
src/
├── components/
│   ├── Banner.js          # Fullscreen banner with animations
│   ├── About.js           # About section with description
│   ├── SwapAndSocials.js  # Swap placeholder and social links
│   └── Gallery.js         # Responsive image gallery
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## Customization

- Update social media links in `SwapAndSocials.js`
- Replace gallery images in `Gallery.js`
- Modify colors in `tailwind.config.js`
- Adjust animations in component files

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder. 