'use client'

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'AI' | 'Full Stack' | 'UX/UI';
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Image Recognition',
    description: 'A deep learning model for real-time object detection in images and video streams.',
    category: 'AI',
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    githubUrl: 'https://github.com/username/ai-image-recognition',
    demoUrl: 'https://ai-image-recognition-demo.com'
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/username/ecommerce-platform',
    demoUrl: 'https://ecommerce-platform-demo.com'
  },
  {
    id: '3',
    title: 'Responsive Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills.',
    category: 'UX/UI',
    technologies: ['React', 'Tailwind CSS', 'NextJS', 'Figma'],
    githubUrl: 'https://github.com/starhax4/hamza-islam',
    demoUrl: 'https://portfolio-website-demo.com'
  },
  {
    id: '4',
    title: 'Natural Language Processing Chatbot',
    description: 'An AI-powered chatbot capable of understanding and responding to natural language queries.',
    category: 'AI',
    technologies: ['Python', 'NLTK', 'TensorFlow', 'Flask'],
    githubUrl: 'https://github.com/username/nlp-chatbot',
    demoUrl: 'https://nlp-chatbot-demo.com'
  },
  {
    id: '5',
    title: 'Task Management App',
    description: 'A full-stack task management application with real-time updates and team collaboration features.',
    category: 'Full Stack',
    technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com/username/task-management-app',
    demoUrl: 'https://task-management-app-demo.com'
  }
];

const categories = ['All', 'AI', 'Full Stack', 'UX/UI'];

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setFilteredProjects(
      selectedCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Projects</h2>
        
        {/* Category filters */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="card cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Project card content */}
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}