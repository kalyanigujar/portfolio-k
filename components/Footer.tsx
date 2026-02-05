
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-4 text-center">
        <p className="text-zinc-500 text-sm tracking-widest uppercase font-medium">
          &copy; {currentYear} All Rights Reserved | <span className="text-yellow-500 font-bold">Kalyani Gujar</span>
        </p>
        <div className="mt-4 flex justify-center gap-6 text-[10px] text-zinc-700 font-black uppercase tracking-[0.2em]">
          <span>Frontend</span>
          <span>Backend</span>
          <span>Full Stack</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
