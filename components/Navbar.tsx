'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="relative flex justify-between items-center py-6 px-8 bg-[#0d1117] text-white"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 32px',
        backgroundColor: '#0d1117',
        color: 'white'
      }}
    >
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded flex items-center justify-center">
          <img 
            src="/assets/NambikeJustLogo.png" 
            alt="Nambike Logo" 
            width={32} 
            height={32}
            className="w-8 h-8 object-contain rounded-full"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.display = 'none';
              const next = img.nextElementSibling as HTMLElement | null;
              if (next) next.style.display = 'block';
            }}
          />
          <span className="text-white font-bold text-sm" style={{display: 'none'}}>N</span>
        </div>
        <a href="/"><span className="text-xl font-semibold">Nambike</span></a>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-4 md:space-x-8" style={{ gap: '16px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
        <li><a href="/about" className="hover:text-blue-400 transition-colors text-sm md:text-base" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="/careers" className="hover:text-blue-400 transition-colors text-sm md:text-base" style={{ color: 'white', textDecoration: 'none' }}>Careers</a></li>
        <li><a href="/contact" className="hover:text-blue-400 transition-colors text-sm md:text-base" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>

      {/* Mobile hamburger button */}
      <button
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="md:hidden inline-flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        style={{ color: 'white' }}
      >
        {isOpen ? (
          // Close icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-[#0d1117] border-t border-gray-800">
          <ul className="flex flex-col py-2" style={{ listStyle: 'none', margin: 0, paddingLeft: 0 }}>
            <li className="px-8 py-2"><a href="/about" className="block hover:text-blue-400 transition-colors text-base" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setIsOpen(false)}>About</a></li>
            <li className="px-8 py-2"><a href="/careers" className="block hover:text-blue-400 transition-colors text-base" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setIsOpen(false)}>Careers</a></li>
            <li className="px-8 py-2"><a href="/contact" className="block hover:text-blue-400 transition-colors text-base" style={{ color: 'white', textDecoration: 'none' }} onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}