import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      color: 'from-accent-blue to-cyan-400',
      skills: [
        { name: 'React', level: 95, years: '3+' },
        { name: 'TypeScript', level: 90, years: '3+' },
        { name: 'Next.js', level: 88, years: '2+' },
        { name: 'Tailwind CSS', level: 92, years: '2+' },
        { name: 'Framer Motion', level: 85, years: '1+' },
      ]
    },
    backend: {
      title: 'Backend Development',
      color: 'from-accent-purple to-violet-400',
      skills: [
        { name: 'Python', level: 93, years: '3+' },
        { name: 'Django', level: 90, years: '3+' },
        { name: 'Node.js', level: 87, years: '3+' },
        { name: 'PostgreSQL', level: 85, years: '4+' },
        { name: 'REST APIs', level: 92, years: '2+' },
      ]
    },
    blockchain: {
      title: 'Blockchain Development',
      color: 'from-accent-green to-emerald-400',
      skills: [
        { name: 'Solidity', level: 88, years: '1+' },
        { name: 'Rust', level: 82, years: '2+' },
        { name: 'Solana', level: 90, years: '2+' },
        { name: 'Polkadot', level: 78, years: '1+' },
        { name: 'Web3.js', level: 85, years: '2+' },
      ]
    },
    devops: {
      title: 'DevOps & Cloud',
      color: 'from-orange-400 to-red-400',
      skills: [
        { name: 'AWS', level: 83, years: '2+' },
        { name: 'GCP', level: 80, years: '2+' },
        { name: 'Docker', level: 87, years: '2+' },
        { name: 'Kubernetes', level: 75, years: '2+' },
        { name: 'CI/CD', level: 85, years: '2+' },
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      color: 'from-pink-400 to-rose-400',
      skills: [
        { name: 'GPT-4 Integration', level: 90, years: '2+' },
        { name: 'Claude API', level: 85, years: '1+' },
        { name: 'TensorFlow', level: 78, years: '2+' },
        { name: 'LangChain', level: 82, years: '1+' },
        { name: 'Vector DBs', level: 80, years: '1+' },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A comprehensive toolkit spanning modern web development, blockchain technology, and AI integration
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'glass-effect text-text-secondary hover:text-text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color} bg-clip-text text-transparent`}>
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h3>
          
          <div className="grid gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                    {skill.name}
                  </span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-text-secondary">
                      {skill.years} years
                    </span>
                    <span className="text-sm font-mono text-accent-blue">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;