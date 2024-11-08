import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Research from './components/Research';
import Contact from './components/Contact';
import BlogCards from './components/BlogCards'; // Import the BlogCards component
import { Moon, Sun, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header Component */}
      <Header
        isDark={darkMode}
        toggleTheme={() => setDarkMode(!darkMode)}
      />

      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Projects</h2>
            <Projects />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills</h2>
            <Skills />
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Research</h2>
            <Research />
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Blog</h2>
            <BlogCards />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Contact</h2>
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © 2024 Ganesh Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;