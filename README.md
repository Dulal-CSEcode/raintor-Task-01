# � Developer Portfolio – Home Page

A pixel-perfect, fully responsive portfolio homepage built with Next.js and Tailwind CSS, featuring modern UI components, theme switching, and smooth animations.

[![Live Demo](https://img.shields.io/badge/-Live%20Demo-blue?style=for-the-badge)](https://raintor-task-01-ntll.vercel.app/)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

![Portfolio Screenshot](/public/assets/screenshot.png)

## ✨ Features

- ⚡ Next.js 14 for optimized performance
- 🎨 Tailwind CSS with custom theme configuration
- 🌙 Dark/light mode toggle with localStorage persistence
- 📱 Fully responsive mobile-first design
- � Reusable component-based architecture
- ✨ Framer Motion animations and hover effects
- ♿ Accessible UI with proper ARIA labels
- 🏗️ Atomic design pattern implementation

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev)
- **Deployment**: [Vercel](https://vercel.com)

## 🏗️ Project Structure

```bash
.
├── components/
│   ├── Button.tsx        # Reusable animated button
│   ├── Card.tsx          # Project/Skill card component
│   ├── Navbar.tsx        # Responsive navigation bar
│   ├── SkillsSection.tsx # Interactive skills display
│   └── ThemeToggle.tsx   # Dark/light mode switcher
├── pages/
│   └── index.tsx         # Home page
├── public/
│   └── assets/           # Images, icons, etc.
├── styles/
│   └── globals.css       # Global styles
├── utils/
│   └── theme.ts          # Theme management
├── tailwind.config.js    # Tailwind configuration
└── README.md
```

## 🚀 Getting Started

## Installation

```bash
git clone https://github.com/your-username/portfolio-home.git
cd portfolio-home
```

## 🚀 Getting Started
# Prerequisites
Node.js v18+
npm or yarn


# Installation
1. Clone the repository

```bash
git clone https://github.com/your-username/portfolio-home.git
cd portfolio-home
```
2. Install dependencies

```bash
npm install
# or
yarn install
```
3. Run the development server

```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 in your browser.

## 🎨 Theme Configuration
The theme toggle persists between sessions using localStorage. Edit the color scheme in:

tailwind.config.js - Theme colors

utils/theme.ts - Theme logic

styles/globals.css - Base styles

## 🚀 Deployment
Deploy to Vercel with one click:

https://vercel.com/button

Or manually deploy to:

Netlify

GitHub Pages

Render

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙌 Credits
Design inspired by Figma Community

Developed by MD Dulal Hossain
