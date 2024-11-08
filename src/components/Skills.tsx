import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Brain, Terminal } from 'lucide-react';

const skills = {
  programming: ['Python', 'C++', 'JavaScript', 'Fish'],
  frameworks: ['TensorFlow', 'PyTorch', 'React', 'Node.js', 'Express'],
  databases: ['MongoDB', 'PostgreSQL'],
  tools: ['Git', 'Docker', 'AWS', 'Linux']
};

const SkillCategory = ({ title, items, icon: Icon, delay }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-3">
          <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill: string) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory
            title="Programming Languages"
            items={skills.programming}
            icon={Code}
            delay={0.2}
          />
          <SkillCategory
            title="Frameworks & Libraries"
            items={skills.frameworks}
            icon={Brain}
            delay={0.4}
          />
          <SkillCategory
            title="Databases"
            items={skills.databases}
            icon={Database}
            delay={0.6}
          />
          <SkillCategory
            title="Tools & Technologies"
            items={skills.tools}
            icon={Terminal}
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
}