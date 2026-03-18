import Link from 'next/link';
import React from 'react';
import { Package } from 'lucide-react';

export const metadata = {
  title: 'Products | SSG Demo',
};

const Products = () => {
  const products = [1, 2, 3, 4, 5];

  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Static Site Generation <span className="text-blue-500">(SSG)</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          These products are generated at build time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((id) => (
          <Link
            key={id}
            href={`/products/${id}`}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-blue-50 dark:bg-gray-700 rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
              <Package size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Product Premium #{id}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              High quality, statically generated product detail view.
            </p>
            <div className="text-blue-600 dark:text-blue-400 font-semibold flex items-center">
              View details &rarr;
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;