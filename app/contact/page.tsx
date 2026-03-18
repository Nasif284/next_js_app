import React from 'react';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact | Demo',
};

const Contact = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in-up">
        <Mail className="w-16 h-16 mx-auto text-pink-500 mb-6" />
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Contact Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Feel free to reach out via email!
        </p>
        <button className="w-full mt-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl font-bold shadow-lg transition-all hover:scale-105 active:scale-95">
          Send a Message
        </button>
      </div>
    </div>
  );
};

export default Contact;