import Link from "next/link";
import { ArrowRight, Box, FileText, UserCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Next.js 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <FeatureCard
            href="/products"
            title="SSG Products"
            icon={<Box className="w-8 h-8 text-blue-500" />}
          />
          <FeatureCard
            href="/posts"
            title="SSR Posts"
            icon={<FileText className="w-8 h-8 text-purple-500" />}
          />
          <FeatureCard
            href="/profile/1"
            title="Dynamic Profiles"
            icon={<UserCircle className="w-8 h-8 text-pink-500" />}
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="group flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1">
      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all">
        Explore <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}
