import { notFound } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { Box, ArrowLeft, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
}

const ProductDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    if (id === "5") {
        notFound();
    }
    if (id == "1") {
        throw new Error("Simulated error")
    }

    await new Promise((res) => {
        setTimeout(() => {
            res("done");
        }, 1000);
    });

    return (
        <div className="flex-1 max-w-4xl mx-auto px-4 py-12">
            <Link
                href="/products"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-8 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
            </Link>

            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="h-64 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center relative">
                    <Box className="w-32 h-32 text-white opacity-90 animate-pulse" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-medium text-sm">
                        SSG Generated
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>In Stock - Ready to Ship</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                        Product Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">#{id}</span>
                    </h1>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        This page represents a product detail view generated entirely at build time using Next.js Static Site Generation (SSG).
                        When users visit this page, they are served a cached HTML file for lightning-fast loading speeds, bypassing any server-side delays!
                    </p>

                    <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">$99.00</div>
                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;