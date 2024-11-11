import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const educationData = [
    {
        degree: "B.Tech in Mechanical Engineering",
        institution: "IIT Madras",
        year: "2022 - Present",
        description: "CGPA: 7.49",
    },
    {
        degree: "Internmediate AP State Board",
        institution: "Tirumala Junior College",
        year: "2020 - 2022",
        description: "JEE Advanced(AIR): 5164, JEE MAINS(AIR): 9812, State Board Percentage: 93.7%",
    },
];

export default function Education() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    ref={ref}
                    className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                >
                    Academic Career
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((education, index) => (
                        <motion.div
                            key={education.degree}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                {education.degree}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                                {education.institution}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {education.year}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                {education.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}