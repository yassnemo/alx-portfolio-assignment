import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-8"
        >
          <a 
            href="https://github.com/yassnemo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
              <Github size={24} />
            </div>
            <span>GitHub</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/yassine-erradouani" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
              <Linkedin size={24} />
            </div>
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="mailto:yassine.erradouani@protonmail.com"
            className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
              <Mail size={24} />
            </div>
            <span>Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;