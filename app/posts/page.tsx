import React from "react";
import { Server, Calendar } from "lucide-react";

export const metadata = {
  title: 'Posts | SSR Demo',
};

const Posts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9", { cache: "no-store" });
  const posts = await res.json();

  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Server-Side Rendering <span className="text-purple-500">(SSR)</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          These posts are fetched dynamically on <strong>every request</strong>.
        </p>
        <div className="mt-4 inline-flex items-center px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">
          <Server className="w-4 h-4 mr-2" />
          Always up-to-date data
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p: any) => (
          <div
            className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:-translate-y-2"
            key={p.id}
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4 whitespace-nowrap">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {p.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-6 flex-1">
                {p.body}
              </p>
              <div className="flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400">
                Read article &rarr;
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
