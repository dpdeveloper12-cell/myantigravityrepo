import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Play, Code, Trophy } from 'lucide-react';
import './Learning.css';

const Learning = () => {
  return (
    <section className="learning-section" id="learning">
      <div className="container">
        <div className="learning-grid">
          <div className="learning-content">
            <span className="badge">Interactive Learning</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Learn by doing, not just <span className="text-gradient">watching</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle text-left"
            >
              Our interactive platform lets you write real code from day one. Say goodbye to boring lectures and hello to hands-on experience.
            </motion.p>

            <div className="learning-features">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="learning-feature"
              >
                <CheckCircle className="check-icon" size={24} />
                <div>
                  <h4>Real-world Projects</h4>
                  <p>Build portfolio-ready projects that employers actually want to see.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="learning-feature"
              >
                <CheckCircle className="check-icon" size={24} />
                <div>
                  <h4>Instant Feedback</h4>
                  <p>Get immediate automated feedback on your code and quizzes.</p>
                </div>
              </motion.div>
            </div>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="btn btn-gradient btn-lg mt-4"
            >
              Explore Curriculum
            </motion.button>
          </div>

          <div className="learning-visual">
            <div className="code-editor-mockup">
              <div className="editor-header">
                <div className="mac-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="file-name">index.js</div>
              </div>
              <div className="editor-body">
                <pre><code>
<span className="keyword">function</span> <span className="function">calculateSuccess</span>() {'{'}
  <span className="keyword">const</span> <span className="variable">effort</span> = <span className="number">100</span>;
  <span className="keyword">const</span> <span className="variable">learning</span> = <span className="string">"EduTech"</span>;
  
  <span className="keyword">if</span> (learning === <span className="string">"EduTech"</span>) {'{'}
    <span className="keyword">return</span> <span className="string">"Success Guaranteed!"</span>;
  {'}'}
  
  <span className="keyword">return</span> <span className="string">"Keep Trying"</span>;
{'}'}

<span className="comment">// Execute the function</span>
<span className="function">console</span>.<span className="method">log</span>(<span className="function">calculateSuccess</span>());
                </code></pre>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="floating-card stat-card"
            >
              <Trophy color="#eab308" size={24} />
              <div>
                <h5>Top 1%</h5>
                <span>Completion Rate</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
