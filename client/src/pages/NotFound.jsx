import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <h1 className="display-1 fw-bold text-gradient mb-4">404</h1>
        <h2 className="h3 mb-4">Oops! Page Not Found</h2>
        <p className="text-secondary mb-5 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2">
          <FaHome /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
