# Alex Chen Portfolio 🚀

A fully modern, futuristic personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Three.js.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-purple)](https://framer.com/motion)

## ✨ Features

- 🎨 **Futuristic dark design** with glassmorphism, neon glows, and gradient text
- 🌐 **Interactive 3D background** — particle field + floating wireframe geometry (Three.js)
- 🖱️ **Custom animated cursor** with spring-physics following and hover effects
- ⌨️ **Command palette** (⌘K / Ctrl+K) for quick navigation
- 🎬 **Smooth scroll** powered by Lenis + GSAP
- 📜 **Scroll progress bar** with spring animation
- 🌙 **Dark/light theme toggle** with localStorage persistence
- ✨ **Cinematic loading screen** with letter-by-letter stagger animation
- 📱 **Fully responsive** — mobile-first design
- 🔍 **SEO optimized** with full OpenGraph and Twitter Card metadata

## 📂 Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen intro with 3D background, typewriter roles, CTA buttons |
| **Stats** | Animated count-up statistics |
| **About** | Bio, skills overview, profile card with tilt effect |
| **Projects** | Filterable project grid with modal details |
| **Skills** | Categorized tech stack cards |
| **Experience** | Animated vertical timeline |
| **Contact** | Contact form with validation + social links |
| **Blog** | Blog post grid with search and category filter |

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP + ScrollTrigger
- **3D**: React Three Fiber + Three.js + @react-three/drei
- **Smooth Scroll**: @studio-freight/lenis
- **Icons**: Lucide React
- **Toasts**: react-hot-toast

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build

```bash
npm run build
npm start
```

## 🎨 Customization

Edit `lib/data.ts` to update your personal information, projects, skills, and experience:

```ts
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  location: "Your City",
  // ...
}
```

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main page assembling all sections
│   └── blog/page.tsx      # Blog listing page
├── components/
│   ├── ui/                # UI components (Navbar, Cursor, etc.)
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── three/             # Three.js 3D components
│   └── layout/            # Layout components (SmoothScroll)
├── hooks/                 # Custom React hooks
├── lib/
│   ├── data.ts            # All portfolio data
│   └── animations.ts      # Framer Motion variants
└── public/               # Static assets
```

## ⚡ Performance Notes

- Three.js components are dynamically imported with `ssr: false` to avoid hydration errors
- Mouse position updates use `requestAnimationFrame` for smooth performance
- Particle field uses `BufferGeometry` for optimized rendering
- Scroll animations trigger only once via Intersection Observer

## 📄 License

MIT License — feel free to use this as a template for your own portfolio.
