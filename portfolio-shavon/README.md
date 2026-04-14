# Client-Winning Portfolio Landing Page

A premium, high-converting landing page for Indian freelance web developers. Built with vanilla JavaScript and Vite for easy deployment on GitHub Pages or Vercel.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
npm run deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

### GitHub Pages
1. Update `vite.config.js` with your repository name:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
});
```
2. Run `npm run build`
3. Upload the `dist` folder to GitHub Pages

## Project Structure

```
portfolio-shavon/
├── index.html          # Entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── public/             # Static assets
└── src/
    ├── main.js         # Entry JavaScript
    ├── LandingPage.js  # Landing page component
    └── index.css       # Global styles
```

## Features

- Premium dark theme design
- Fully responsive layout
- Interactive FAQ accordion
- Smooth scroll navigation
- Mobile-optimized

## Customization

Edit the following files to customize:
- `src/LandingPage.js` - Change content and sections
- `src/index.css` - Modify colors and styles
- `index.html` - Update meta tags and title
