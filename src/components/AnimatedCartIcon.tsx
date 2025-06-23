import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface AnimatedCartIconProps {
  itemCount: number;
}

const AnimatedCartIcon: React.FC<AnimatedCartIconProps> = ({ itemCount = 0 }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const prevCountRef = useRef(itemCount);

  // This effect triggers the animation only when the item count increases.
  useEffect(() => {
    if (itemCount > prevCountRef.current) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 700); // Animation duration
      return () => clearTimeout(timer);
    }
    prevCountRef.current = itemCount;
  }, [itemCount]);

  console.log('AnimatedCartIcon loaded');

  const pocketVariants = {
    rest: { scale: 1, rotate: 0 },
    wiggle: {
      rotate: [0, -10, 10, -10, 10, 0],
      scale: [1, 1.15, 1, 1.15, 1],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: 1.1,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  };

  const badgeVariants = {
    initial: { scale: 0, y: 15, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0, y: 15, opacity: 0 },
    transition: { type: 'spring', stiffness: 500, damping: 30 },
  };

  return (
    <Link to="/cart" className="relative block" aria-label={`View cart with ${itemCount} items`}>
      <motion.div
        className="relative"
        variants={pocketVariants}
        animate={isAnimating ? 'wiggle' : 'rest'}
        whileHover="hover"
      >
        {/* Doraemon's 4D Pocket styled with Tailwind CSS */}
        <div className="w-24 h-12 bg-white rounded-t-full border-4 border-b-0 border-gray-900 shadow-md" />

        <AnimatePresence>
          {itemCount > 0 && (
            <motion.div
              key={itemCount}
              variants={badgeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={badgeVariants.transition}
              className="absolute -top-3 -right-4"
            >
              <Badge
                className="bg-red-500 hover:bg-red-600 text-white font-bold border-2 border-white rounded-full h-8 w-8 flex items-center justify-center text-base p-0"
                aria-live="polite"
              >
                {itemCount > 99 ? '99+' : itemCount}
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default AnimatedCartIcon;