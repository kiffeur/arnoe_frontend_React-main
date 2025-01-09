import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCar, FaHotel, FaPlane } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to) => {
    if (to === '#') {
      setShowModal(true);
      return;
    }
    navigate(to);
    setIsOpen(false);
  };

  const navLinks = [
    { 
      name: 'Location de Voitures', 
      to: '/',
      icon: FaCar
    },
    { 
      name: 'Logement', 
      to: '/accommodation',
      icon: FaHotel
    },
    { 
      name: "Achat de Billet d'Avion", 
      to: '#',
      icon: FaPlane
    }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/img/Logo-arnoe.png"
                alt="Arnoe" 
                className="h-28 md:h-36"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.to)}
                  className={`flex items-center space-x-2 font-medium transition-all duration-300 px-4 py-2 rounded-lg
                    ${isActive(link.to)
                      ? 'text-[#283285] font-bold bg-blue-50' 
                      : 'text-[#596198] hover:text-[#232b6c] hover:bg-gray-50'}`}
                >
                  <link.icon className={`text-xl ${isActive(link.to) ? 'text-[#FF4D30]' : ''}`} />
                  <span>{link.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="w-8 h-8 text-[#283285]" />
              ) : (
                <Bars3Icon className="w-8 h-8 text-[#283285]" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.to)}
                  className={`flex items-center space-x-2 w-full py-3 px-4 rounded-lg transition-all duration-300 ${
                    isActive(link.to)
                      ? 'text-[#283285] font-bold bg-blue-50' 
                      : 'text-[#596198] hover:text-[#232b6c] hover:bg-gray-50'
                  }`}
                >
                  <link.icon className={`text-xl ${isActive(link.to) ? 'text-[#FF4D30]' : ''}`} />
                  <span>{link.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Modal de maintenance */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-center">
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </motion.div>
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-gray-900 mb-4"
                >
                  Service en maintenance
                </motion.h3>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 mb-8 text-lg"
                >
                  Nous travaillons pour améliorer ce service. Veuillez réessayer plus tard !
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                  className="bg-gradient-to-r from-[#FF4D30] to-[#dc3a1e] text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Compris !
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
