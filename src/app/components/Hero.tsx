'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { siteData } from '../data/siteData';

const Hero = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden py-20 ${isDark ? 'gradient-bg-dark' : 'gradient-bg-light'}`}>
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-blue-900 to-purple-900 opacity-30' : 'from-blue-200 to-purple-200 opacity-50'}`}></div>
        <div className={`absolute inset-0 ${isDark ? 'opacity-20' : 'opacity-40'}`} style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='${isDark ? '%23ffffff' : '%23000000'}' opacity='0.3'/%3E%3Ccircle cx='18' cy='18' r='1' fill='${isDark ? '%23ffffff' : '%23000000'}' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-blue-700 to-purple-700'}`}
        >
          {siteData.name}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-xl sm:text-2xl md:text-3xl mb-8 ${isDark ? 'text-gray-200' : 'text-gray-800'} font-semibold`}
        >
          {siteData.title}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`text-base sm:text-lg mb-12 ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto`}
        >
          {siteData.intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <Link href="#projects">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className={`${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-700 hover:bg-blue-800'} text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg flex items-center`}
            >
              Explore My Work
              <FaArrowRight className="ml-2" />
            </motion.button>
          </Link>
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/starhax4/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/hamzaislam01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
            >
              <FaLinkedin size={32} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;