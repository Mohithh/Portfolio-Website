"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300
      }
    })
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <motion.header 
        className="fixed top-0 w-full z-50 px-4 py-2"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className={`w-full max-w-7xl mx-auto bg-white/90 backdrop-blur-md shadow-sm border border-gray-100 px-6 py-3 rounded-2xl flex items-center justify-between transition-all duration-300 ${scrolled ? "!bg-white/95 !shadow-md" : ""}`}
          whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div 
              className="text-2xl font-black tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Mo</span>
              <span className="text-gray-900 group-hover:text-indigo-800 transition-colors">hit</span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors group"
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-indigo-600 rounded-full -translate-x-1/2 group-hover:w-3/5 transition-all duration-300"
                    layoutId="nav-underline"
                  />
                </Link>
              </motion.div>
            ))}
            
        <motion.a
  href="https://drive.google.com/file/d/17K1qwOs3FvNTRJTD2mSgpozlT4a5FQ9f/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-indigo-100 transition-all"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
>
  Resume
</motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 focus:outline-none "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-gray-800 rounded-sm mb-1.5"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-gray-800 rounded-sm mb-1.5"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-gray-800 rounded-sm"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            />
          </motion.button>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 pt-24 px-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 }
            }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 mx-auto max-w-sm"
              variants={mobileMenuVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div className="flex flex-col space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                  >
                    <Link
                      href={link.href}
                      className="block text-gray-700 text-lg py-2 px-4 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <a
  href="https://drive.google.com/file/d/1wNIcKhutV5PEYag76qP8ve1E9mvoPdtj/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg text-lg font-medium mt-4"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    Download Resume
  </motion.button>
</a>



      
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;