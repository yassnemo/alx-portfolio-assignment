import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Chess Game Analyzer & Insights",
    description: "AI-powered chess game analysis platform that provides deep insights into player strategies, move accuracy, and improvement suggestions using advanced machine learning algorithms.",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
    github: "https://github.com/yourusername/chess-analyzer",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80"
  },
  {
    title: "Fraud Detection System",
    description: "Machine learning-based fraud detection system that uses anomaly detection and pattern recognition to identify suspicious transactions in real-time.",
    tech: ["Python", "Scikit-learn", "FastAPI", "Redis"],
    github: "https://github.com/yourusername/fraud-detection",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  },
  {
    title: "Personalized News Aggregator",
    description: "AI-driven news aggregation platform that learns user preferences and delivers personalized content recommendations using natural language processing.",
    tech: ["Python", "PyTorch", "Next.js", "MongoDB"],
    github: "https://github.com/yourusername/news-aggregator",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;