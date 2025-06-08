import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [emailCopied, setEmailCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('j.vivekvamsi@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'j.vivekvamsi@gmail.com',
      action: copyEmail,
      color: 'text-accent-blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India (Remote Available)',
      color: 'text-accent-purple'
    },
    {
      icon: Phone,
      label: 'Availability',
      value: 'Open for Opportunities',
      color: 'text-accent-green'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-accent-blue' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-accent-purple' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-accent-green' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Let's Build Together</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to create something amazing? Let's discuss your next project and bring innovative ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Get In Touch
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm always excited to work on innovative projects that push the boundaries 
                of technology. Whether you're looking to build a blockchain application, 
                integrate AI features, or create a modern web platform, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className={`p-3 rounded-xl glass-effect ${info.color} group-hover:scale-110 transition-transform`}>
                    <info.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-text-secondary">{info.label}</p>
                    <p className="text-text-primary font-semibold">{info.value}</p>
                  </div>
                  {info.action && (
                    <motion.button
                      onClick={info.action}
                      className="p-2 rounded-lg glass-effect hover:bg-white/10 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {emailCopied ? (
                        <Check size={16} className="text-accent-green" />
                      ) : (
                        <Copy size={16} className="text-text-secondary" />
                      )}
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`p-3 rounded-xl glass-effect text-text-secondary ${social.color} transition-all`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                <span className="text-accent-green font-semibold">Available for Projects</span>
              </div>
              <p className="text-text-secondary text-sm">
                Currently accepting new opportunities for blockchain development, 
                AI integration, and full-stack web applications.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-blue focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-blue focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-blue focus:outline-none transition-colors"
                  placeholder="Project discussion"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-blue focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-blue to-accent-purple px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-text-secondary">
            © 2025 Vivek Jami. Built with React, TypeScript, and Framer Motion.
          </p>
          <p className="text-sm text-text-secondary mt-2">
            Designed and developed with ❤️ for the future of Web3
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;