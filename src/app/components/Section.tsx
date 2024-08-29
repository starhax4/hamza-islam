import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section id={id} className={`relative py-20 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-100'} mx-4 sm:mx-0`}>
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${
          isDark 
            ? 'from-blue-900 via-purple-900 to-gray-900' 
            : 'from-blue-200 via-purple-200 to-gray-100'
        } opacity-50`}></div>
        <div className={`absolute inset-0 ${isDark ? 'opacity-20' : 'opacity-10'}`} style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='${isDark ? '%23ffffff' : '%23000000'}' opacity='0.3'/%3E%3Ccircle cx='18' cy='18' r='1' fill='${isDark ? '%23ffffff' : '%23000000'}' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl sm:text-4xl font-bold mb-10 text-center ${
            isDark ? 'text-gray-100' : 'text-gray-800'
          }`}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
};

export default Section;