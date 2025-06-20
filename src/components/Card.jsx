'use client';

export default function Card({ title, icon, children }) {
  return (
    <div className="bg-black/80 dark:bg-white/10 text-white dark:text-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:-rotate-2 hover:scale-105 focus-within:scale-105 focus-within:-rotate-2" tabIndex={0} aria-label={title}>
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-center">{children}</p>
    </div>
  );
} 