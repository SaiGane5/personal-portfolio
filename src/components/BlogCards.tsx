// src/components/BlogCards.tsx
import React from 'react';

const BlogCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card Example */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img
                    src="https://via.placeholder.com/600x400" // Placeholder image URL
                    alt="Blog Thumbnail"
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 hover:text-indigo-600 transition-colors">
                        How to Master React in 30 Days
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        In this blog post, we explore a roadmap to learn React efficiently, from setting up the environment to building complex applications.
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">John Doe</span>
                        <span>Dec 5, 2024</span>
                    </div>
                    <div className="mt-4">
                        <a
                            href="#"
                            className="inline-block text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 transition-colors"
                        >
                            Read More &rarr;
                        </a>
                    </div>
                </div>
            </div>

            {/* Add more blog cards as needed */}
        </div>
    );
};

export default BlogCards;
