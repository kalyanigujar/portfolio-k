import profile from "../assets/profile.jpg";

import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, FileText, Sparkles, Terminal } from "lucide-react";

const Hero: React.FC = () => {
  /**
   * 📸 IMAGE CHANGE INSTRUCTIONS:
   * 1. If using a local image: Put your photo in 'assets' folder and use "./assets/your-photo.jpg"
   * 2. If using an online link: Paste the link directly here, e.g., "https://your-site.com/photo.jpg"
   */

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-yellow-600/10 blur-[130px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[50%] h-[50%] bg-zinc-800/20 blur-[130px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* SEO Focused Content Area */}
          <div className="flex-[1.4] text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Sparkles size={12} className="animate-spin-slow" /> MERN Stack & QA Specialist
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white">
              KALYANI <br />
              <span className="text-gradient">GUJAR.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 leading-relaxed font-light mx-auto lg:mx-0">
              A dedicated <span className="text-white font-bold">Full Stack Developer</span> from Nagpur with expertise in the MERN stack. 
              I specialize in building clean web applications and ensuring <span className="text-yellow-500 italic">top-tier software quality</span> through manual and functional testing.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16">
              <Link
                to="/projects"
                className="group w-full sm:w-auto px-12 py-6 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-3xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-2xl shadow-yellow-500/30"
              >
                View My Work
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/resume"
                className="w-full sm:w-auto px-12 py-6 glass text-white font-black uppercase tracking-widest rounded-3xl flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-yellow-500/20"
              >
                <FileText size={20} className="text-yellow-500" />
                Resume
              </Link>
            </div>

            {/* Realistic Professional Metrics */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 pt-10 border-t border-zinc-900">
               <div className="flex flex-col">
                 <span className="text-3xl font-black text-white">1+</span>
                 <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Year Experience</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-3xl font-black text-white">5+</span>
                 <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Key Projects</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-3xl font-black text-white">Nagpur</span>
                 <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Location</span>
               </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex-1 order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-tr from-yellow-500/20 via-transparent to-orange-500/20 rounded-full blur-[80px] animate-pulse"></div>
              
              <div className="relative z-10 w-[300px] sm:w-[380px] lg:w-[440px] aspect-[4/6] bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-800 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transform transition-all duration-700 hover:scale-[1.02]">
                <img
  src={profile}
  alt="Kalyani Gujar - Full Stack MERN Developer"
  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
/>

                
                {/* Available Status */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-3xl border border-white/5 flex items-center justify-between">
                   <div>
                     <p className="text-[9px] font-black text-yellow-500 uppercase tracking-widest">Status</p>
                     <p className="text-white font-bold text-xs">Open for Opportunities</p>
                   </div>
                   <div className="w-8 h-8 bg-zinc-800 rounded-xl flex items-center justify-center text-yellow-500">
                     <Terminal size={16} />
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
