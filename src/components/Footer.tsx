import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400">
      <p>© {new Date().getFullYear()} Миний Портфолио. Бүх эрх хуулиар хамгаалагдсан.</p>
    </footer>
  );
}
