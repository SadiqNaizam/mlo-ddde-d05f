import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import ThemedNavigationIcon from '@/components/ThemedNavigationIcon';
import AnimatedCartIcon from '@/components/AnimatedCartIcon';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-200 bg-blue-100/80 backdrop-blur supports-[backdrop-filter]:bg-blue-100/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Back to Homepage">
          <Bell className="h-8 w-8 text-yellow-500" />
          <span className="font-bold text-xl text-blue-800" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
            Dora-Eats
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <ThemedNavigationIcon
            to="/"
            gadget="Anywhere-Door"
            aria-label="Home"
          />
          <ThemedNavigationIcon
            to="/menu"
            gadget="Time-Furoshiki"
            aria-label="Menu"
          />
        </nav>

        <div className="flex items-center">
          <Link to="/cart" aria-label="View your cart">
            {/* AnimatedCartIcon expects item count to be managed by state, passing a placeholder */}
            <AnimatedCartIcon itemCount={0} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;