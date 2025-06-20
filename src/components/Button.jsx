'use client';

export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 rounded border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
      {...props}
    >
      {children}
    </button>
  );
} 