import React from 'react';
import { Play, PlayCircle, Edit3, User, ArrowRight } from 'lucide-react';
import { FaGoogle, FaYoutube, FaGoogleDrive } from 'react-icons/fa';
import { SiGoogle, SiYoutube, SiGoogledrive } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Explore all courses in one place.
          </h1>
          
          <p className="hero-subtitle">
            Learn new skills from the comfort of your home or anywhere anytime.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-gradient hero-btn">
              Start free trial <ArrowRight size={16} style={{marginLeft: '8px'}}/>
            </button>
            <div className="watch-video">
              <div className="play-icon-container">
                <Play fill="white" size={16} />
              </div>
              <span className="watch-text">Watch the video</span>
            </div>
          </div>

          <div className="features-list">
            <div className="feature-item">
              <div className="icon-box">
                <PlayCircle size={20} color="#ff7d3a" />
              </div>
              <span>Content created by industry experts</span>
            </div>
            <div className="feature-item">
              <div className="icon-box">
                <Edit3 size={20} color="#ff7d3a" />
              </div>
              <span>Practical use based projects and assignments</span>
            </div>
            <div className="feature-item">
              <div className="icon-box">
                <User size={20} color="#ff7d3a" />
              </div>
              <span>Direct support from the mentor</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/hero.png" alt="Student" className="hero-image" />
          
          <div className="floating-icon icon-google">
             <SiGoogle color="#4285F4" size={20} />
          </div>
          <div className="floating-icon icon-youtube">
             <SiYoutube color="#FF0000" size={20} />
          </div>
          <div className="floating-icon icon-drive">
             <SiGoogledrive size={20} />
          </div>
          
          {/* Small orange dots */}
          <div className="dot-small dot-1"></div>
          <div className="dot-small dot-2"></div>
          <div className="dot-small dot-3"></div>
          <div className="dot-small dot-4"></div>
          
          <div className="arrow-down-icon">
            <div className="arrow-circle">
              <ChevronDown color="white" size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add ChevronDown to imports
import { ChevronDown } from 'lucide-react';

export default Hero;
