import { motion } from 'motion/react';
import { useState } from 'react';
import profileImg from '../assets/images/Profile.jpeg';
import Resume from "../assets/resume/Updated_Resume.pdf"

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fs-4 fw-medium text-secondary mb-2">Hello, I'm</h2>
              <h1 className="display-3 fw-bold mb-3">
                <span className="text-gradient">Abdul Latif</span>
              </h1>
              <h3 className="fs-4 fw-medium mb-4 text-secondary">
                Full Stack Developer
              </h3>
              <p className="lead mb-5 opacity-75">
                I build modern, scalable, and responsive web applications with a focus on exceptional user experiences.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#contact" className="btn btn-primary px-4 py-2 rounded-pill shadow">
                  Hire Me
                </a>
                <a href={Resume} download className="btn btn-outline-primary px-4 py-2 rounded-pill">
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="position-relative d-inline-block">
                <div className="position-absolute w-100 h-100 rounded-circle bg-primary opacity-25 blur-3xl" style={{ filter: 'blur(50px)' }}></div>
                <img 
                  src={profileImg} 
                  alt="Profile" 
                  className="img-fluid rounded-circle shadow-lg border border-4 border-primary position-relative"
                  style={{ 
                    width: '350px',
                    height:"350px",
                    objectFit:"cover"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
