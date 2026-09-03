import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Award } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="image-stack">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students collaborating" className="img-front" />
              <div className="img-bg-shape"></div>
            </div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="experience-badge"
            >
              <span className="years">10+</span>
              <span className="text">Years of<br/>Excellence</span>
            </motion.div>
          </div>

          <div className="about-content">
            <span className="badge badge-purple">About Us</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title text-left"
            >
              Empowering learners <span className="text-gradient">worldwide</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="about-desc"
            >
              Founded in 2024, EduTech was born from a simple belief: quality education should be accessible to everyone, everywhere. We've built a platform that bridges the gap between traditional learning and the dynamic needs of the modern tech industry.
            </motion.p>

            <div className="mission-list">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mission-item"
              >
                <div className="icon-wrapper bg-purple-light">
                  <Globe className="icon-purple" size={24} />
                </div>
                <div>
                  <h4>Global Community</h4>
                  <p>Join learners from over 150 countries sharing knowledge.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mission-item"
              >
                <div className="icon-wrapper bg-red-light">
                  <Heart className="icon-red" size={24} />
                </div>
                <div>
                  <h4>Student First</h4>
                  <p>Every feature we build is designed with your success in mind.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mission-item"
              >
                <div className="icon-wrapper bg-orange-light">
                  <Award className="icon-orange" size={24} />
                </div>
                <div>
                  <h4>Award Winning</h4>
                  <p>Recognized as the top ed-tech platform of the year.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
