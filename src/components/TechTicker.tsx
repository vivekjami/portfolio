import React from 'react';
import { motion } from 'framer-motion';

const TechTicker: React.FC = () => {
  const technologies = [
    'React', 'TypeScript', 'Solidity', 'Rust', 'Python', 'Django', 
    'Node.js', 'PostgreSQL', 'Solana', 'Polkadot', 'AWS', 'Docker',
    'Kubernetes', 'TensorFlow', 'GPT-4', 'Next.js', 'Tailwind CSS'
  ];

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex space-x-8 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <span
            key={index}
            className="text-text-secondary font-mono text-sm px-4 py-2 glass-effect rounded-full"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechTicker;