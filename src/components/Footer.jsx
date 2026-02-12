import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-gray-300">
      <motion.div
        className="container mx-auto px-4 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-800 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Psych Heal Clinic</h3>
            </motion.div>
            <p className="text-sm italic text-gray-400">Every Child Has a Voice - We Help Them Find It</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/contact', label: 'Contact' },
                { path: '/book-appointment', label: 'Book Appointment' }
              ].map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="hover:text-teal-400 transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <motion.li whileHover={{ x: 5 }}>
                <a href="tel:+923115367440" className="hover:text-teal-400 transition-colors duration-300">
                  Phone: 0311-5367440
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a 
                  href="https://wa.me/923303866245" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors duration-300"
                >
                  WhatsApp: 0330-3866245
                </a>
              </motion.li>
              <li className="text-sm text-gray-400">
                St#6, Sector A<br />
                Bahria Enclave, Islamabad
              </li>
            </ul>
          </motion.div>

          {/* Office Hours */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Office Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Monday - Friday</li>
              <li className="text-gray-300 font-medium">9:00 AM - 4:00 PM</li>
              <li className="mt-2">Saturday - Sunday</li>
              <li className="text-gray-300 font-medium">Closed</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-700 mt-8 pt-8 text-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-400">&copy; {currentYear} Psych Heal Clinic. All rights reserved.</p>
          <p className="mt-2 italic text-gray-500">Every Child Has a Voice - We Help Them Find It</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;