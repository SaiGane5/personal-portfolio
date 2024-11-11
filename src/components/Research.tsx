import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Award, FileText } from 'lucide-react';

const publications = [
  {
    title: "Context-augmented Retrieval: A Novel Framework for Fast Information Retrieval based Response Generation using Large Language Model",
    journal: "arXiv.org",
    year: 2024,
    link: "https://arxiv.org/pdf/2406.16383"
  },
];

export default function Research() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Research & Publications
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h3 className="flex items-center text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              <BookOpen className="mr-2" /> Research Interests
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Machine Learning in Education</li>
              <li>• Neural Networks</li>
              <li>• Natural Language Processing</li>
              <li>• Information Retrieval</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          <h3 className="flex items-center text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            <FileText className="mr-2" /> Recent Publications
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="border-l-4 border-indigo-500 pl-4"
              >
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {pub.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {pub.journal} • {pub.year}
                </p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline"
                >
                  View Publication →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}