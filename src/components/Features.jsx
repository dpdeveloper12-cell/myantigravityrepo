import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Users, Award, Zap } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <MonitorPlay size={32} />,
    title: "Interactive Lessons",
    description: "Learn by doing with our interactive coding environments and real-time feedback system."
  },
  {
    icon: <Users size={32} />,
    title: "Expert Community",
    description: "Join thousands of learners and get help from industry experts 24/7."
  },
  {
    icon: <Award size={32} />,
    title: "Verified Certificates",
    description: "Earn industry-recognized certificates upon completion to boost your resume."
  },
  {
    icon: <Zap size={32} />,
    title: "Fast-Track Career",
    description: "Curated paths designed to take you from beginner to job-ready in months."
  }
];

const Features = () => {
  return (
    <section className="features" id="courses">
      <div className="container">
        <div className="features-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Why Choose <span className="text-gradient">EduTech</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            Experience a new way of learning. We provide everything you need to master your craft and achieve your career goals.
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass feature-card"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
