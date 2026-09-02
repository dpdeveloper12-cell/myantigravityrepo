import React from 'react';
import { BookOpen } from 'lucide-react';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <BookOpen className="logo-icon" />
              <span className="logo-text">Edu<span className="text-gradient">Tech</span></span>
            </div>
            <p className="footer-desc">
              Empowering the next generation of builders, creators, and leaders through accessible and interactive education.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><FaTwitter size={20} /></a>
              <a href="#" className="social-link"><FaGithub size={20} /></a>
              <a href="#" className="social-link"><FaLinkedin size={20} /></a>
              <a href="#" className="social-link"><FaInstagram size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Platform</h4>
            <a href="#">Browse Courses</a>
            <a href="#">Career Paths</a>
            <a href="#">Mentorship</a>
            <a href="#">Pricing</a>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Community</a>
            <a href="#">Events</a>
            <a href="#">Help Center</a>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EduTech Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
