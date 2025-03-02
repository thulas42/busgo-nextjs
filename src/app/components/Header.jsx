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
          <div className="hidden md:flex items-center space-x-6">
            <select className="bg-transparent text-white border-none focus:ring-0">
              <option className="text-gray-800">English</option>
              <option className="text-gray-800">Spanish</option>
            </select>
            <Link 
              href="/help" 
              className="text-white hover:text-[#F59E0B] transition-colors duration-300"
            >
              Help
            </Link>
            <Link 
              href="/signin" 
              className="bg-[#F59E0B] text-white px-6 py-3 rounded-lg hover:bg-[#10B981] transition-colors duration-300"
            >
              Sign In
            </Link>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.path}
                  className={`text-white hover:text-[#F59E0B] transition-colors duration-300 ${
                    pathname === item.path ? 'font-medium text-[#F59E0B]' : ''
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/help" 
                className="text-white hover:text-[#F59E0B]"
                onClick={handleNavClick}
              >
                Help
              </Link>
              <Link 
                href="/signin" 
                className="bg-[#F59E0B] text-white px-4 py-2 rounded-lg w-full text-center hover:bg-[#10B981] transition-colors duration-300"
                onClick={handleNavClick}
              >
                Sign In
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 