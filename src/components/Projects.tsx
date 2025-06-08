import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Award, Trophy } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'RollRush',
      subtitle: 'Decentralized Gaming Platform',
      description: 'A revolutionary blockchain-based gaming platform featuring 3D dice games with provably fair mechanics and real-time multiplayer functionality.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'React', 'Babylon.js', 'Web3.js', 'Node.js'],
      category: 'blockchain',
      achievements: ['🏆 Hackathon Winner', '🎮 3D Gaming'],
      links: {
        github: '#',
        live: '#'
      },
      featured: true
    },
    {
      id: 2,
      title: 'LunaCred',
      subtitle: 'Credibility Staking Protocol',
      description: 'An innovative DeFi protocol for staking credibility tokens with advanced reputation mechanisms and governance features.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'Rust', 'Polkadot', 'React', 'TypeScript'],
      category: 'blockchain',
      achievements: ['🥈 Polkadot Finalist', '🔒 DeFi Protocol'],
      links: {
        github: '#',
        live: '#'
      },
      featured: true
    },
    {
      id: 3,
      title: 'VerifEd',
      subtitle: 'AI-Powered Educational Platform',
      description: 'An intelligent learning platform that uses AI to personalize education experiences and verify academic credentials.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'Django', 'TensorFlow', 'PostgreSQL'],
      category: 'ai',
      achievements: ['🤖 AI Integration', '📚 EdTech'],
      links: {
        github: '#',
        live: '#'
      },
      featured: false
    },
    {
      id: 4,
      title: 'SolStripe',
      subtitle: 'Solana Onramping Platform',
      description: 'A seamless fiat-to-crypto onramping solution built on Solana with Stripe integration for instant transactions.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solana', 'Rust', 'React', 'Stripe API', 'TypeScript'],
      category: 'blockchain',
      achievements: ['💳 Payment Integration', '⚡ Fast Transactions'],
      links: {
        github: '#',
        live: '#'
      },
      featured: false
    },
    {
      id: 5,
      title: 'DeFi Analytics Dashboard',
      subtitle: 'Real-time DeFi Data Visualization',
      description: 'A comprehensive analytics platform providing real-time insights into DeFi protocols, yield farming, and market trends.',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Node.js', 'GraphQL', 'MongoDB'],
      category: 'web',
      achievements: ['📊 Data Visualization', '📈 Real-time Analytics'],
      links: {
        github: '#',
        live: '#'
      },
      featured: false
    },
    {
      id: 6,
      title: 'AI Code Assistant',
      subtitle: 'Intelligent Development Tool',
      description: 'An AI-powered code assistant that helps developers write better code with intelligent suggestions and automated refactoring.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'GPT-4', 'React', 'TypeScript', 'Docker'],
      category: 'ai',
      achievements: ['🤖 GPT-4 Integration', '⚡ Developer Tools'],
      links: {
        github: '#',
        live: '#'
      },
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'blockchain', label: 'Blockchain', count: projects.filter(p => p.category === 'blockchain').length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Innovation Showcase</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A collection of cutting-edge projects spanning blockchain, AI, and modern web development
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg'
                  : 'glass-effect text-text-secondary hover:text-text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all group ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  
                  {/* Achievement Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={project.links.github}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-accent-blue/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} />
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-accent-purple/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {project.title}
                      </h3>
                      <p className="text-accent-blue font-semibold text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                    {project.featured && (
                      <Trophy className="text-accent-green" size={20} />
                    )}
                  </div>

                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent-blue/20 text-accent-blue px-2 py-1 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            className="bg-gradient-to-r from-accent-blue to-accent-purple px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;