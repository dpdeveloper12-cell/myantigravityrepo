import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Video, Users, Target, Shield } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Code size={28} />,
    title: "Coding Bootcamps",
    desc: "Intensive 12-week programs to transform you into a full-stack developer.",
    color: "#ff7d3a"
  },
  {
    icon: <Video size={28} />,
    title: "Live Masterclasses",
    desc: "Weekly live sessions with industry experts from top tech companies.",
    color: "#3b82f6"
  },
  {
    icon: <Users size={28} />,
    title: "1-on-1 Mentorship",
    desc: "Personalized guidance to help you navigate your career path.",
    color: "#10b981"
  },
  {
    icon: <BookOpen size={28} />,
    title: "Vast Library",
    desc: "Access over 10,000+ interactive lessons and coding exercises.",
    color: "#8b5cf6"
  },
  {
    icon: <Target size={28} />,
    title: "Career Placement",
    desc: "We help you land your dream job with interview prep and resume reviews.",
    color: "#f43f5e"
  },
  {
    icon: <Shield size={28} />,
    title: "Verified Credentials",
    desc: "Earn blockchain-verified certificates to prove your skills to employers.",
    color: "#eab308"
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <span className="badge">Our Services</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Everything you need to <span className="text-gradient">succeed</span>
          </motion.h2>
          <p className="section-subtitle">
            We provide a comprehensive ecosystem of tools, resources, and support to accelerate your learning journey.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card"
            >
              <div className="service-icon" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
