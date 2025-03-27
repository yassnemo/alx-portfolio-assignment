import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300">
              As a Data Science & Machine Learning student, I combine technical expertise 
              with a deep fascination for human behavior, psychology, and history. This 
              unique perspective allows me to approach problems holistically, considering 
              both the technical and human aspects of solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My academic journey is driven by a genuine curiosity about how people think 
              and make decisions, which I believe is crucial for developing AI systems 
              that truly serve human needs. I'm particularly interested in the intersection 
              of machine learning and behavioral psychology.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300">
              Beyond the world of data and algorithms, I'm deeply passionate about 
              understanding different cultures, religions, and historical patterns. This 
              broader perspective enriches my approach to problem-solving and helps me 
              create more inclusive and effective solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I believe that the future of technology lies in its ability to understand 
              and adapt to human behavior, and I'm excited to be part of this evolution 
              through my work in data science and machine learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;