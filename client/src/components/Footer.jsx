import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaArrowUp, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold text-gradient mb-3">Portfolio</h4>
            <p className="text-secondary">
              Building beautiful, responsive, and robust web applications. Let's create something amazing together.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="https://github.com/mr-latif717" target="_blank" rel="noreferrer" className="text-white fs-4"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/abdul-latif-054abb409" target="_blank" rel="noreferrer" className="text-white fs-4"><FaLinkedin /></a>
              <a href="https://www.instagram.com/mr._.717?igsh=MTBqN2g5MmlnemRh" target="_blank" rel="noreferrer" className="text-white fs-4"><FaInstagram /></a>
              <a href="https://wa.me/923492604451" target="_blank" rel="noreferrer" className="text-white fs-4"><FaWhatsapp /></a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/#home" className="text-secondary text-decoration-none hover-white">Home</a></li>
              <li className="mb-2"><a href="/#about" className="text-secondary text-decoration-none hover-white">About</a></li>
              <li className="mb-2"><a href="/#projects" className="text-secondary text-decoration-none hover-white">Projects</a></li>
              <li className="mb-2"><a href="/#contact" className="text-secondary text-decoration-none hover-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><span className="text-secondary">Frontend Development</span></li>
              <li className="mb-2"><span className="text-secondary">Backend Development</span></li>
              <li className="mb-2"><span className="text-secondary">Full Stack Solutions</span></li>
              <li className="mb-2"><span className="text-secondary">API Development</span></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center gap-2 text-secondary">
                <FaEnvelope className="text-primary" /> latif2015717@gmail.com
              </li>
              <li className="mb-3 d-flex align-items-center gap-2 text-secondary">
                <FaPhone className="text-primary" /> +92 327 3162422
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-top border-secondary mt-4 pt-3 d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-0 text-secondary">&copy; {new Date().getFullYear()} Abdul Latif. All rights reserved.</p>
          <button onClick={scrollToTop} className="btn btn-primary rounded-circle shadow-lg" style={{ width: '45px', height: '45px' }}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
