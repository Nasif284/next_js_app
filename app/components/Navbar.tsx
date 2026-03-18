import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/50 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-80 transition-opacity">
                            NextApp
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="/products" label="Products (SSG)" />
                        <NavLink href="/posts" label="Posts (SSR)" />
                        <NavLink href="/profile/1" label="Profile" />
                        <NavLink href="/about" label="About" />
                    </div>
                    <div className="flex md:hidden">
                        <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
        href={href}
        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group"
    >
        {label}
        <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
);

export default Navbar;
