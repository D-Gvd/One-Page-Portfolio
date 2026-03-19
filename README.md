# Modern Portfolio

A modern, interactive single-page portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern design with gradient backgrounds and glassmorphism effects
- ⚡ Smooth animations and interactions with Framer Motion
- 📱 Fully responsive design
- 🎯 Single-page application with smooth scrolling navigation
- 🚀 Optimized for performance with Vite
- 🎭 Beautiful UI components with Tailwind CSS

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Deployment to GitHub Pages

### Step 1: Update Vite Configuration

In `vite.config.js`, update the `base` path to match your repository name:

```javascript
base: '/your-repo-name/',
```

If deploying to `username.github.io` (root domain), set `base: '/'` or remove the base property entirely.

### Step 2: Build and Deploy

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` folder.

3. Commit and push your changes to GitHub.

4. Go to your repository settings on GitHub.

5. Scroll down to "Pages" section.

6. Under "Source", select "Deploy from a branch".

7. Select "gh-pages" branch (you may need to create it) or use GitHub Actions.

### Alternative: Using GitHub Actions

Create a new file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Customization

### Personal Information

Update the following sections in `src/App.jsx`:

- **Hero Section:** Change the name, title, and description
- **About Section:** Update the personal description and qualities
- **Skills Section:** Modify the skills array with your technologies
- **Projects Section:** Update project information and links
- **Contact Section:** Add your actual contact information

### Styling

The design uses Tailwind CSS classes. You can customize colors, spacing, and animations by modifying the class names in the components.

### Animations

Animations are handled by Framer Motion. You can adjust timing, easing, and effects in the `motion` components throughout the app.

## Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Custom styles and Tailwind imports
├── index.css        # Global styles
├── main.jsx         # Application entry point
└── assets/          # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

Feel free to fork this repository and customize it for your own portfolio!

## License

This project is open source and available under the [MIT License](LICENSE).
