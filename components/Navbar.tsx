'use client';

export default function Navbar() {
  return (
    <nav 
      className="flex justify-between items-center py-6 px-8 bg-[#0d1117] text-white"
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
      <ul className="flex space-x-4 md:space-x-8" style={{ display: 'flex', gap: '16px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
        <li><a href="/about" className="hover:text-blue-400 transition-colors text-sm md:text-base" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="/careers" className="hover:text-blue-400 transition-colors text-sm md:text-base" style={{ color: 'white', textDecoration: 'none' }}>Careers</a></li>
        <li><a href="/contact" className="hover:text-blue-400 transition-colors text-sm md:text-base" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
}