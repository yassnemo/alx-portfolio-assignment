import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import ShapeDivider from './ShapeDivider';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Yassine Erradouani
          </h1>
        </motion.div>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Data Science & Machine Learning Student
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          I find data to be an intersting intersection between technology and the us as humans. And with the skills I have acquired, I am able to play with the data to extract insights and make informed decisions for both businesses and individuals.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: "https://github.com/yassnemo", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/yassine-erradouani", label: "LinkedIn" },
            { icon: Mail, href: "mailto:yassine.erradouani@protonmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>
      <ShapeDivider position="bottom" />
    </motion.section>
  );
};

export default Hero;