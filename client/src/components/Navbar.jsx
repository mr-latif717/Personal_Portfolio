import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Education', path: '/#education' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'shadow-sm' : ''} ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} ${scrolled ? 'bg-opacity-90' : 'bg-transparent'} backdrop-blur`} style={{ backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-gradient" to="/">
          Portfolio
        </Link>

        <div className="d-flex align-items-center gap-3 d-lg-none">
          <button className="btn btn-link nav-link p-0" onClick={toggleTheme}>
            {theme === 'dark' ? <FaSun size={20} className="text-warning" /> : <FaMoon size={20} className="text-dark" />}
          </button>
          <button 
            className="navbar-toggler border-0 shadow-none p-0" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} className={theme === 'dark' ? 'text-light' : 'text-dark'} /> : <FaBars size={24} className={theme === 'dark' ? 'text-light' : 'text-dark'} />}
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-lg-center">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a 
                  className={`nav-link fw-medium px-3`} 
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="nav-item d-none d-lg-block ms-4 ps-2">
              <button className="btn btn-link nav-link p-0" onClick={toggleTheme}>
                {theme === 'dark' ? <FaSun size={20} className="text-warning" /> : <FaMoon size={20} className="text-dark" />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
