import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { text } from 'framer-motion/client';

const projects = [
  {
    title: "Real-Time Twitter Sentiment Analysis in R",
    description: "Real-time sentiment analysis tool that tracks and analyzes tweets in real-time to provide insights into public opinion and sentiment on various topics.",
    tech: ["R", "Shiny", "TextBlob", "Twitter API"],
    github: "https://github.com/yassnemo/real-time-sentiment-twitter-analysis",
    image: "https://raw.githubusercontent.com/Arnab-Rajkhowa/Twitter-Sentiment-Analysis/master/tweet-dashboard.PNG"
  },
  {
    title: "Fraud Detection System",
    description: "A fraud detection system to detect fraudulent transactions. It employs data preprocessing, trains a model (e.g., Random Forest), and deploys the system with Flask for real-time predictions.",
    tech: ["Python", "Scikit-learn", "FastAPI", "Redis"],
    github: "https://github.com/yassnemo/fraud-detection-system-",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  },
  {
    title: "Chess Game Analyser",
    description: "A Python-based tool for analyzing chess games from PGN files. Designed to give insights about gameplay, detect patterns, and help improve strategic decisions.",
    tech: ["Python", "BeautifulSoup", "Flask", "SQLite"],
    github: "https://github.com/yassnemo/chess-game-analyser",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Visualizing Energy Consumption Patterns",
    description: "Data visualization tool that analyzes and visualizes energy consumption patterns to help businesses optimize their energy usage and reduce costs.",
    tech: ["Python", "Pandas", "Plotly", "SQLite"],
    github: "https://github.com/yassnemo/visualizing-energy-consumption-patterns",
    image: "https://www.mdpi.com/mti/mti-03-00056/article_deploy/html/images/mti-03-00056-g007a.png"
  }
  ,
  {
    title: "Population Growth Dashboard",
    description: "Interactive dashboard that visualizes population growth trends and forecasts for different regions using historical data and predictive analytics.",
    tech: ["Python", "Dash", "SQLite", "Heroku"],
    github: "https://github.com/yassnemo/population-growth-dashboard",
    image: "https://files.mtstatic.com/site_9264/191386/1?Expires=1743089899&Signature=Ygdm~P0gXUUf~zvwH3FecqC8~hbVb~UKLzoyBsU8PTnCYGpZyhfNXRvPdEtwb1UBBR~Iih~SgRqzoN0eHA3ggiY4vrj-yCA9eA7blp6jEa2Te8Lc2NSmMNXJ9w2vH6NC7zLSOqC88jAL8oMn5OmyOvGSqi3sNEQLF1zbA2mYxx4_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA"
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