import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import Custom Page Components
import BestsellerShowcase from '@/components/BestsellerShowcase';

// Import shadcn/ui Components
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Homepage = () => {
  console.log('Homepage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-[#F0F8FF]" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative text-center py-20 sm:py-32 px-4 bg-white overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-yellow-300 rounded-full opacity-50 filter blur-2xl"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-64 h-64 bg-red-300 rounded-full opacity-50 filter blur-2xl"></div>

            <div className="relative z-10 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl sm:text-7xl font-extrabold text-blue-600 tracking-tight">
                        A Magical Bite in Every Dish!
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-700">
                        Welcome to Dora-Eats! Explore our menu full of wonders, inspired by Doraemon's most famous gadgets and favorite snacks.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 150 }}
                    className="mt-10"
                >
                    {/* Using a valid placeholder image URL as required */}
                    <img
                        src="https://placehold.co/1000x500/AEE2FF/3572EF?text=Doraemon+%26+Friends+Welcome+You!"
                        alt="A cheerful illustration of Doraemon and friends."
                        className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border-4 border-yellow-400"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mt-12"
                >
                    <Button asChild size="lg" className="rounded-full bg-red-500 hover:bg-red-600 text-white font-bold text-xl px-10 py-7 transform transition-transform hover:scale-105 active:scale-95">
                        <Link to="/menu">
                            Explore The Menu
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>

        {/* Bestseller Showcase Section */}
        {/* This component is used as-is from the provided custom components. */}
        <BestsellerShowcase />

      </main>

      <Footer />
    </div>
  );
};

export default Homepage;