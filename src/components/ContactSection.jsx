'use client';

import Button from "./Button";

const icons = {
  twitter: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03a12.72 12.72 0 0 1-9.23-4.68 4.48 4.48 0 0 0 1.39 5.98A4.44 4.44 0 0 1 2 9.097v.057a4.48 4.48 0 0 0 3.59 4.39c-.4.11-.82.17-1.25.17-.31 0-.6-.03-.89-.08a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.01-.58a9.22 9.22 0 0 0 2.27-2.34z"/></svg>
  ),
  instagram: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.974.974 1.252 2.242 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.974.974-2.242 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.974-.974-1.252-2.242-1.314-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608C4.521 2.573 5.789 2.295 7.155 2.233 8.421 2.175 8.801 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395 2.697 2.376 2.414 3.488 2.355 4.769.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
  ),
  facebook: (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
  ),
};

export default function ContactSection() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-lime-100 to-white dark:from-lime-900 dark:to-black overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute -top-24 left-0 w-full h-[300px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-lime-200 via-lime-100 to-transparent opacity-80 pointer-events-none z-0" />
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Interested in <span className="bg-black text-white px-2 rounded">work</span> together?
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-base md:text-lg">We start every new client interaction with an in-depth discovery call where we get to know each other</p>
          <Button className="border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition font-semibold px-8 py-3 rounded-full mb-6">
            Schedule a Call
          </Button>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-black dark:text-white hover:text-lime-500" aria-label="Twitter">{icons.twitter}</a>
            <a href="#" className="text-black dark:text-white hover:text-lime-500" aria-label="Instagram">{icons.instagram}</a>
            <a href="#" className="text-black dark:text-white hover:text-lime-500" aria-label="Facebook">{icons.facebook}</a>
          </div>
        </div>
        <form className="flex-1 max-w-md flex flex-col gap-4 bg-white/80 dark:bg-black/40 p-6 rounded-xl shadow" aria-label="Contact form">
          <input className="p-2 rounded border" type="text" placeholder="Your Name" required />
          <input className="p-2 rounded border" type="email" placeholder="Your Email" required />
          <textarea className="p-2 rounded border" placeholder="Describe your project" required />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </section>
  );
} 