'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Layout } from 'lucide-react';


const services = [
  {
    title: 'AI Development',
    description: 'Cutting-edge AI solutions for your business needs.',
    icon: Brain,
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end web application development.',
    icon: Code,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces.',
    icon: Layout,
  },
];

const Services = () => {


  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="card cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;