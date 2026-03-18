import React from 'react';
import { Info } from 'lucide-react';

export const metadata = {
  title: 'About | Demo',
};

const About = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-6 bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in-up">
        <Info className="w-16 h-16 mx-auto text-blue-500 mb-6" />
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm a developer learning Advanced Next.js features such as SSG, SSR, dynamic routing, and Image optimization.
          This project demonstrates the powerful data fetching patterns available in Next.js 15.
        </p>
      </div>
    </div>
  );
};

export default About;