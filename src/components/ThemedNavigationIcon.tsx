import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Props interface for type safety
interface ThemedNavigationIconProps {
  to: string;
  iconSrc: string; // URL to the gadget icon
  label: string;   // For accessibility and the tooltip
  className?: string;
}

const ThemedNavigationIcon: React.FC<ThemedNavigationIconProps> = ({
  to,
  iconSrc,
  label,
  className,
}) => {
  console.log(`ThemedNavigationIcon loaded for: ${label}`);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={to}
          aria-label={label}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 rounded-full"
        >
          <motion.div
            className={`p-2 cursor-pointer rounded-full flex items-center justify-center ${className || ''}`}
            whileHover={{
              scale: 1.15,
              filter: "drop-shadow(0px 2px 8px rgba(250, 204, 21, 0.8))", // A nice yellow glow
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <img
              src={iconSrc}
              alt={label}
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
          </motion.div>
        </Link>
      </TooltipTrigger>
      <TooltipContent className="bg-blue-600 text-white border-none rounded-md shadow-lg font-semibold">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemedNavigationIcon;