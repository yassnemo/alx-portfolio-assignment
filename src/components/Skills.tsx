import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "SQL", "Java", "C", "C++", "JavaScript"]
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      "Pandas",
      "NumPy",
      "SciPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "XGBoost",
      "LightGBM",
    ]
  },
  {
    title: "Data Visualization",
    skills: [
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Tableau",
      "Power BI",
      "Jupyter Notebooks",
    ]
  },
  {
    title: "Big Data & Engineering",
    skills: [
      "Apache Spark",
      "Hadoop",
      "Kafka",
      "Airflow",
      "PySpark",
      "ETL Pipelines",
    ]
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Redis",
      "MySQL",
      "Snowflake",
    ]
  },
  {
    title: "Cloud & Deployment",
    skills: [
      "AWS (S3, EC2, Lambda)",
      "Google Cloud Platform",
      "Microsoft Azure",
      "Docker",
      "Kubernetes",
      "Vercel",
    ],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs"],
  },
  {
    title: "Statistics & Analytics",
    skills: [
      "Statistical Modeling",
      "A/B Testing",
      "Time Series Analysis",
      "Regression Analysis",
      "Hypothesis Testing",
    ],
  },
  {
    title: "Version Control & Tools",
    skills: ["Git", "GitHub", "VS Code", "JIRA", "Conda", "Pip"],
  },
  {
    title: "Other Relevant Skills",
    skills: [
      "Linux",
      "Bash",
      "Excel",
      "Data Wrangling",
      "Feature Engineering",
      "MLOps",
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;