import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Globe, Award } from 'lucide-react';
import { downloadResume } from '../utils/downloadResume';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, label: 'Years Experience', value: '5+', color: 'text-accent-blue' },
    { icon: Globe, label: 'Projects Completed', value: '50+', color: 'text-accent-purple' },
    { icon: Zap, label: 'Hackathons Won', value: '3', color: 'text-accent-green' },
    { icon: Award, label: 'Workshops Led', value: '6+', color: 'text-accent-blue' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">The Engineer</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Passionate about building innovative solutions at the intersection of blockchain technology and artificial intelligence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center glass-effect">
                <div className="w-72 h-72 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gradient">VJ</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-text-primary mb-6">
              Senior Full-Stack Engineer
            </h3>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in building 
              scalable blockchain applications and integrating cutting-edge AI technologies. 
              Currently working as a Software Engineer at Rompit Technologies, I'm passionate 
              about creating innovative solutions that push the boundaries of what's possible.
            </p>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              As a graduate of the Solana Builders Program and Advanced SVM, I bring deep 
              expertise in blockchain development, having won multiple hackathons and led 
              workshops that have reached over 25 participants in the Web3 community.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-effect p-6 rounded-lg text-center hover:bg-white/10 transition-all"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-r from-accent-blue to-accent-purple px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all mt-8"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
            >
              Download Full Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;