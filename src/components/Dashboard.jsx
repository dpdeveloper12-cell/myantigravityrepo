import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, TrendingUp, BookOpen, Clock } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <section className="dashboard-section" id="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <span className="badge badge-blue">Student Dashboard</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Track your <span className="text-gradient">progress</span> effortlessly
          </motion.h2>
          <p className="section-subtitle">
            Get a birds-eye view of your learning journey with our intuitive, data-rich student dashboard.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dashboard-preview"
        >
          <div className="dashboard-sidebar">
            <div className="sidebar-logo">EduTech<span>.</span></div>
            <nav className="sidebar-nav">
              <a href="#" className="active"><LayoutDashboard size={18} /> Overview</a>
              <a href="#"><BookOpen size={18} /> My Courses</a>
              <a href="#"><TrendingUp size={18} /> Statistics</a>
              <a href="#"><Clock size={18} /> Schedule</a>
            </nav>
          </div>
          
          <div className="dashboard-main">
            <div className="dashboard-topbar">
              <div className="search-bar">Search courses...</div>
              <div className="user-profile">
                <div className="avatar">JD</div>
              </div>
            </div>
            
            <div className="dashboard-stats">
              <div className="stat-box">
                <span className="stat-title">Courses Completed</span>
                <div className="stat-value">12</div>
                <div className="progress-bar"><div className="progress" style={{width: '75%'}}></div></div>
              </div>
              <div className="stat-box">
                <span className="stat-title">Hours Learned</span>
                <div className="stat-value">124</div>
                <div className="progress-bar"><div className="progress" style={{width: '60%', background: '#3b82f6'}}></div></div>
              </div>
              <div className="stat-box">
                <span className="stat-title">Certificates</span>
                <div className="stat-value">5</div>
                <div className="progress-bar"><div className="progress" style={{width: '40%', background: '#10b981'}}></div></div>
              </div>
            </div>
            
            <div className="dashboard-content">
              <div className="continue-learning">
                <h4>Continue Learning</h4>
                <div className="course-card-mini">
                  <div className="course-icon">⚛️</div>
                  <div className="course-info">
                    <h5>Advanced React Patterns</h5>
                    <span>Module 4: Custom Hooks</span>
                  </div>
                  <button className="btn-resume">Resume</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
