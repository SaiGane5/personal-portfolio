import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experienceData = [
    {
        position: "Data Science",
        company: "Indian School of Business(ISB)",
        year: "May 2024 - July 2024",
        description: "Developed chatbot with Retrieval Augmented Generation(RAG) to assist with questions related to ISB",
    },
];

export default function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    ref={ref}
                    className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                >
                    My Journey
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experienceData.map((experience, index) => (
                        <motion.div
                            key={experience.position}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                {experience.position}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                                {experience.company}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {experience.year}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                {experience.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}