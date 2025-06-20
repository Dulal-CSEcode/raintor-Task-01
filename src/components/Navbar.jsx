'use client';
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white dark:bg-black shadow">
      <div className="font-bold text-xl">DEVLOP.ME</div>
      <ul className="flex gap-6 items-center">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
        <li><a href="#blog" className="hover:underline">Blog</a></li>
        <li><ThemeToggle /></li>
        <li>
          <a href="#contact" className="border px-4 py-2 rounded hover:bg-black hover:text-white transition">Start Project</a>
        </li>
      </ul>
    </nav>
  );
} 