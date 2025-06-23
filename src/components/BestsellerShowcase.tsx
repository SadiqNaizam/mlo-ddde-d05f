import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Define the type for a bestseller item
interface BestsellerItem {
  name: string;
  description: string;
  imageUrl: string;
  characterArtUrl: string;
  ctaText: string;
  bgColor: string;
}

// Mock data for the showcase items
const bestsellers: BestsellerItem[] = [
  {
    name: 'Giga-Sized Dorayaki',
    description: 'A fluffy, giant pancake sandwich filled with sweet red bean paste. Just like Doraemon loves!',
    imageUrl: '/placeholder-dorayaki.png', // Replace with actual image path
    characterArtUrl: '/placeholder-doraemon.png', // Replace with actual image path
    ctaText: 'Taste the classic',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Memory Bread Toast',
    description: 'Crispy, golden-brown toast that’s so good, you’ll never forget it. Served with your choice of jam.',
    imageUrl: '/placeholder-memory-bread.png', // Replace with actual image path
    characterArtUrl: '/placeholder-nobita.png', // Replace with actual image path
    ctaText: 'Make a memory',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Anywhere Door Parfait',
    description: 'A magical dessert journey with layers of fruit, cream, and ice cream that can take your taste buds anywhere.',
    imageUrl: '/placeholder-parfait.png', // Replace with actual image path
    characterArtUrl: '/placeholder-shizuka.png', // Replace with actual image path
    ctaText: 'Start your adventure',
    bgColor: 'bg-pink-100',
  },
];

const BestsellerShowcase: React.FC = () => {
  console.log('BestsellerShowcase loaded');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 font-sans" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", sans-serif' }}>
            Doraemon's Fan Favorites
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            These are the treats that make everyone smile! Hand-picked by Doraemon himself.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {bestsellers.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center ${item.bgColor}`}
            >
              <img
                src={item.characterArtUrl}
                alt={`${item.name} character art`}
                className="absolute -top-10 -right-8 w-32 h-32 object-contain opacity-80 group-hover:scale-110 transition-transform duration-300"
                style={{ transform: `rotate(${index * 15 - 15}deg)` }}
              />
              <div className="relative z-10 w-full flex flex-col h-full">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-md transform hover:scale-105 transition-transform duration-300"
                />
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                  <p className="mt-2 text-gray-600 flex-grow">{item.description}</p>
                </div>
                <div className="mt-6">
                  <Button asChild size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Link to="/menu">
                      {item.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BestsellerShowcase;