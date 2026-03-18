import React from 'react';

const Blog = async ({ params }: { params: Promise<{ slug?: string[] }> }) => {
  const { slug } = await params;

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 py-12 text-center animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        Blog Segment Route
      </h1>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-300 mb-4 font-semibold">
          Catch-all Dynamic Route Parameters:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {slug?.length ? (
            slug.map((e, index) => (
              <span key={index} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-bold border border-blue-100 dark:border-blue-800">
                /{e}
              </span>
            ))
          ) : (
            <span className="text-gray-400 italic">No slug segments provided (Root Blog index).</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;