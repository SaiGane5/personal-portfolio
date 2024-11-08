import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Sai Ganesh I
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Research', 'Contact'].map((item) => (
              <motion.a
                key={item}
                whileHover={{ y: -2 }}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <div className="flex space-x-3">
              {[
                { Icon: Github, href: 'https://github.com/SaiGane5' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/sai-ganesh-91505a261/' },
                { Icon: Twitter, href: 'https://x.com/ImandiSaig28413' }
              ].map(({ Icon, href }) => (
                <motion.a
                  key={href}
                  whileHover={{ scale: 1.1 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}