import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Mail, MapPin, Building, Link as LinkIcon } from 'lucide-react';

export const metadata = {
    title: 'User Profile | Dynamic Routing',
};

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: 'no-store' });

    if (!res.ok) {
        notFound();
    }
    const user = await res.json();

    const imageUrl = `https://picsum.photos/seed/${user.username}/400/400`;

    return (
        <div className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden relative">
                <div className="h-48 bg-gradient-to-r from-pink-500 to-orange-400"></div>

                <div className="px-8 pb-8">
                    <div className="relative flex justify-between items-end -mt-20 mb-6">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full scale-110"></div>
                            <Image
                                src={imageUrl}
                                alt={`${user.name}'s profile picture`}
                                width={160}
                                height={160}
                                priority
                                className="relative rounded-full border-4 border-white dark:border-gray-800 shadow-md object-cover w-40 h-40 bg-gray-200"
                            />
                        </div>

                        <div className="absolute top-24 right-0 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-4 py-1 rounded-full text-sm font-semibold border border-pink-200 dark:border-pink-800">
                            Dynamic Route: {id}
                        </div>
                    </div>

                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">{user.name}</h1>
                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">@{user.username}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-2">
                                Contact Info
                            </h3>
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                                <Mail className="w-5 h-5 mr-3 text-pink-500" />
                                <a href={`mailto:${user.email}`} className="hover:text-pink-600 transition-colors">{user.email}</a>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                                <LinkIcon className="w-5 h-5 mr-3 text-pink-500" />
                                <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors">
                                    {user.website}
                                </a>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                                <MapPin className="w-5 h-5 mr-3 text-pink-500" />
                                <span>{user.address.suite}, {user.address.street}, {user.address.city}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-2">
                                Company Details
                            </h3>
                            <div className="flex items-start text-gray-600 dark:text-gray-300">
                                <Building className="w-5 h-5 mr-3 mt-1 text-orange-500 shrink-0" />
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">{user.company.name}</div>
                                    <div className="text-sm mt-1">{user.company.catchPhrase}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;
