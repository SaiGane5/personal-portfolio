import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "VidyaRANG",
    description: "Applying Retrieval Augmented Generation (RAG) to generate accurate solutions to student problems.",
    tech: ["Python", "LlamaIndex", "OpenAI", "Streamlit"],
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbiUyMHdpdGglMjBBSXxlbnwwfHwwfHx8MA%3D%3D",
    github: "https://github.com/amaze18/Vidya",
    demo: "https://vidyarang.online"
  },
  {
    title: "ISB Chatbot",
    description: "Built a chatbot that serves as AI assistant for the ISB website.",
    tech: ["FastAPI", "React", "OpenAI", "AWS", "LlamaIndex"],
    image: "https://plus.unsplash.com/premium_photo-1726079247110-5e593660c7b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhdGJvdCUyMGZvciUyMGVudGVycHJpc2V8ZW58MHx8MHx8fDA%3D",
    github: "https://github.com/SaiGane5/I-Venture-Chatbot",
    demo: "https://i-venture-chatbot.aigurukul.dev/"
  },
  {
    title: "ToDo App",
    description: "To Do App built with database and authentication",
    tech: ["Node.js", "PostgreSQL", "Express"],
    image: "https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D",
    github: "https://github.com/SaiGane5/IITM_Schedule",
    demo: "https://iitm-schedule.glitch.me/"
  },
  {
    title: "Pomo App",
    description: "Pomo App built with customised sessions and notifications",
    tech: ["Vite", "TailwindCSS", "React"],
    image: "https://media.istockphoto.com/id/1331816543/photo/red-tomato-shaped-kitchen-timer-with-cooking-in-the-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=XQfqd2QqupPrpGpf8lgH3eLoYXJiMCtdDUYdFttPd10=",
    github: "https://github.com/SaiGane5/PomoApp",
    demo: "https://pomoapp4iitm.netlify.app"
  },
  {
    title: "Simon Game",
    description: "Enjoy the game",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "https://plus.unsplash.com/premium_photo-1679430106455-e5ab13a9007b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhbWV8ZW58MHx8MHx8fDA%3D",
    github: "https://github.com/SaiGane5/simon_game",
    demo: "https://saigane5.github.io/simon_game/"
  },
  {
    title: "Fun with music",
    description: "Have fun with music",
    tech: ["DOM", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww",
    github: "https://github.com/SaiGane5/drum_kit",
    demo: "https://saigane5.github.io/drum_kit/"
  },
  {
    title: "Daily Dashboard",
    description: "Get insights of latest news and trends",
    tech: ["Static Pages", "Extenral APIs"],
    image: "https://media.istockphoto.com/id/1477858506/photo/news-online-in-phone-reading-newspaper-from-website-digital-publication-and-magazine-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=rR5OzvohjHUCHubVUOiKcu6wLWT325HrOajBmByLojE=",
    github: "https://github.com/SaiGane5/DailyDashboard",
    demo: "https://daily-dashboard-saig.netlify.app"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}