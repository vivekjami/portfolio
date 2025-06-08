import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Users, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Trophy,
      title: '2nd Prize - Encode Global Hackathon',
      description: 'Won second place in a global blockchain hackathon with RollRush gaming platform',
      date: '2023',
      category: 'Hackathon',
      color: 'from-yellow-400 to-orange-500',
      prize: '$9,000'
    },
    {
      icon: Award,
      title: '3rd Prize - Solana Hackathon',
      description: 'Secured third position in Solana ecosystem hackathon with innovative DeFi solution',
      date: '2023',
      category: 'Hackathon',
      color: 'from-orange-400 to-red-500',
      prize: '$250'
    },
    {
      icon: Users,
      title: 'Web3 Workshop Leader',
      description: 'Conducted 6+ educational workshops on blockchain development and Web3 technologies',
      date: '2022-2023',
      category: 'Education',
      color: 'from-accent-blue to-cyan-400',
      impact: '25+ Participants'
    },
    {
      icon: Target,
      title: 'Solana Builders Graduate',
      description: 'Successfully completed the prestigious Solana Builders Program with distinction',
      date: '2023',
      category: 'Certification',
      color: 'from-accent-purple to-violet-500',
      credential: 'Verified'
    }
  ];

  const stats = [
    { label: 'Hackathons Won', value: '3', icon: Trophy },
    { label: 'Workshops Conducted', value: '6+', icon: Users },
    { label: 'Participants Reached', value: '25+', icon: Target },
    { label: 'Prize Money', value: '$8K+', icon: Award },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Celebrating milestones in blockchain innovation, community building, and technical excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass-effect p-6 rounded-2xl text-center hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className="w-8 h-8 text-accent-blue mx-auto mb-3" />
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} flex-shrink-0`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-accent-blue transition-colors">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-sm">
                        <span className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent font-semibold`}>
                          {achievement.category}
                        </span>
                        <span className="text-text-secondary">
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                    
                    {/* Badge */}
                    {achievement.prize && (
                      <span className="bg-accent-green text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {achievement.prize}
                      </span>
                    )}
                    {achievement.impact && (
                      <span className="bg-accent-blue text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {achievement.impact}
                      </span>
                    )}
                    {achievement.credential && (
                      <span className="bg-accent-purple text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {achievement.credential}
                      </span>
                    )}
                  </div>

                  <p className="text-text-secondary leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Community Impact
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
              Passionate about sharing knowledge and building the Web3 community through education and mentorship
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-accent-blue/20 text-accent-blue px-4 py-2 rounded-full text-sm font-semibold">
                🎓 Blockchain Education
              </span>
              <span className="bg-accent-purple/20 text-accent-purple px-4 py-2 rounded-full text-sm font-semibold">
                👥 Developer Mentorship
              </span>
              <span className="bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-semibold">
                🌍 Global Community
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;