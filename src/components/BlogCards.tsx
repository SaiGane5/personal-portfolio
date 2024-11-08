// src/components/BlogCards.tsx
import React from 'react';

const BlogCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card Example */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" // Placeholder image URL
                    alt="Blog Thumbnail"
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 hover:text-indigo-600 transition-colors">
                        Tech Resources
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        In this blog post, we explore a roadmap to learn tech stuff related to AI/ML, MERN, DSA, and more.
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Sai Ganesh</span>
                        <span>Nov 9, 2024</span>
                    </div>
                    <div className="mt-4">
                        <a
                            href="https://tech-with-saig.notion.site/Technology-8617fddaff5e45f088edb3a029a75d10"
                            className="inline-block text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 transition-colors"
                        >
                            Read More &rarr;
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img
                    src="https://plus.unsplash.com/premium_photo-1678824564407-c4d3b55935e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYWwlMjBmaW5hbmNlfGVufDB8fDB8fHww"
                    alt="Blog Thumbnail"
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 hover:text-indigo-600 transition-colors">
                        Personal Finance Blog
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        In this blog post, we explore a roadmap to personal financing for a typical B.Tech Student.
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Sai Ganesh</span>
                        <span>Nov 9, 2024</span>
                    </div>
                    <div className="mt-4">
                        <a
                            href="https://tech-with-saig.notion.site/Personal-Finance-12cc5223a971801b9dcff58aaf856758"
                            className="inline-block text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 transition-colors"
                        >
                            Read More &rarr;
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img
                    src="https://tech-with-saig.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F071081ce-43de-4fe1-aa78-0dfbfcabba67%2Ff50b2c96-e0f5-4647-b4ff-f827a8efc9d6%2FAvg_Life_At_IITM.png?table=block&id=138c5223-a971-8010-a3cb-f7eb32e03f6a&spaceId=071081ce-43de-4fe1-aa78-0dfbfcabba67&width=2000&userId=&cache=v2"
                    alt="Blog Thumbnail"
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 hover:text-indigo-600 transition-colors">
                        IITM Blog
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                       In this post, we delve into the experience of life at IIT Madras from the perspective of a typical B.Tech student.
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Sai Ganesh</span>
                        <span>Nov 9, 2024</span>
                    </div>
                    <div className="mt-4">
                        <a
                            href="https://tech-with-saig.notion.site/A-Day-in-the-Life-of-an-IIT-Madras-Student-The-Chaos-The-Hustle-and-All-the-Unnecessary-Romance-138c5223a9718010a3cbf7eb32e03f6a"
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
