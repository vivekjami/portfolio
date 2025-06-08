import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Rompit Technologies',
      location: 'Remote, India',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Leading full-stack development of scalable web applications with focus on blockchain integration and AI-powered features.',
      achievements: [
        'Architected and developed 5+ production applications using React, TypeScript, and Python',
        'Implemented blockchain payment systems reducing transaction costs by 40%',
        'Led AI integration projects improving user engagement by 60%',
        'Mentored junior developers and established coding standards'
      ],
      technologies: ['React', 'TypeScript', 'Python', 'Django', 'PostgreSQL', 'AWS'],
      current: true
    },
    {
      title: 'Blockchain Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2022 - 2023',
      type: 'Contract',
      description: 'Specialized in building decentralized applications and smart contracts for various clients in the Web3 space.',
      achievements: [
        'Developed 10+ smart contracts on Solana and Ethereum',
        'Built DeFi protocols handling $500K+ in total value locked',
        'Created NFT marketplaces with advanced trading features',
        'Conducted security audits and optimized gas efficiency'
      ],
      technologies: ['Solidity', 'Rust', 'Solana', 'Web3.js', 'React', 'Node.js'],
      current: false
    },
    {
      title: 'Full-Stack Developer intern ',
      company: 'Tech Startup',
      location: 'Hyderabad, India',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained web applications for a growing fintech startup, focusing on user experience and scalability.',
      achievements: [
        'Built responsive web applications serving 10K+ users',
        'Implemented real-time features using WebSocket technology',
        'Optimized application performance improving load times by 50%',
        'Collaborated with design team to implement pixel-perfect UIs'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io'],
      current: false
    }
  ];

  const programs = [
    {
      title: 'Solana Builders Program',
      organization: 'Solana Foundation',
      period: '2024',
      description: 'Advanced blockchain development program focusing on Solana ecosystem',
      badge: 'Graduate'
    },
    {
      title: 'Advanced SVM Program',
      organization: 'Solana',
      period: '2025',
      description: 'Specialized training in Solana Virtual Machine development',
      badge: 'Certified'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Professional Journey</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Building innovative solutions across startups and enterprises, with a focus on blockchain and AI technologies
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-blue to-accent-purple" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-blue rounded-full border-4 border-primary z-10" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <motion.div
                  className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-accent-blue font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="bg-accent-green text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-text-secondary">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                    <span className="bg-secondary px-2 py-1 rounded">
                      {exp.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start">
                          <span className="text-accent-blue mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent-blue/20 text-accent-blue px-2 py-1 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blockchain Programs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Blockchain Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-text-primary mb-2">
                      {program.title}
                    </h4>
                    <p className="text-accent-purple font-semibold">
                      {program.organization}
                    </p>
                  </div>
                  <span className="bg-gradient-to-r from-accent-blue to-accent-purple text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {program.badge}
                  </span>
                </div>
                
                <p className="text-text-secondary mb-4">
                  {program.description}
                </p>
                
                <div className="flex items-center text-sm text-text-secondary">
                  <Calendar size={16} className="mr-2" />
                  {program.period}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;