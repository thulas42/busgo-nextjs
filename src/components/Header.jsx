"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Schedule', path: '/schedule' },
    { name: 'Deals', path: '/deals' },
    { name: 'Stations', path: '/stations' },
    { name: 'Travel Info', path: '/travel-info' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-[#4F46E5] to-[#10B981] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold text-white transform hover:scale-110 transition-transform duration-300">
              BusGo
            </Link>
            <nav className="hidden md:flex ml-10 space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.path}
                  className={`text-lg transition-colors duration-300 ${
                    pathname === item.path 
                      ? 'text-[#F59E0B] font-medium' 
                      : 'text-white hover:text-[#F59E0B]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signin" className="text-white hover:text-[#F59E0B] transition-colors">
              Sign In
            </Link>
            <Link href="/help" className="bg-[#F59E0B] text-white px-4 py-2 rounded-lg hover:bg-[#F59E0B]/90 transition-colors">
              Help
            </Link>
            <a 
              href="https://github.com/yourusername/busgo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#F59E0B] transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#F59E0B] transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.path}
                  className={`text-lg transition-colors duration-300 ${
                    pathname === item.path 
                      ? 'text-[#F59E0B] font-medium' 
                      : 'text-white hover:text-[#F59E0B]'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20 flex flex-col space-y-4">
                <Link href="/signin" className="text-white hover:text-[#F59E0B] transition-colors">
                  Sign In
                </Link>
                <Link href="/help" className="bg-[#F59E0B] text-white px-4 py-2 rounded-lg hover:bg-[#F59E0B]/90 transition-colors inline-block w-max">
                  Help
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 