import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          src="src/Profile_Photo.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white dark:border-gray-700 shadow-lg"
        />
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Sai Ganesh I
        </motion.h1>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Mechanical Engineering
          <span className="block">Indian Institute of Technology Madras</span>
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12"
        >
          Passionate about Machine Learning, Natural Language Processing, and their applications in solving real-world problems. 
          Currently researching at the intersection of AI and Education sector.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-gray-400 dark:text-gray-500" size={24} />
        </motion.div>
      </div>
    </motion.section>
  );
}