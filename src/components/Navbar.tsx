import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ShieldAlert, LogOut } from 'lucide-react';

interface NavbarProps {
  isAdmin: boolean;
  onLogout: () => void;
  onOpenLogin: () => void;
  onLogoClick?: () => void;
}

export default function Navbar({ isAdmin, onLogout, onOpenLogin, onLogoClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/85 shadow-sm py-3'
          : 'bg-white/60 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={(e) => {
            e.preventDefault();
            if (onLogoClick) onLogoClick();
          }}
          className="flex items-center gap-3.5 group text-left cursor-pointer transition-all duration-300 transform hover:scale-[1.02]"
          id="navbar-logo-btn"
        >
          <div className="relative w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm group-hover:border-fiverr/50 transition-all duration-300 overflow-hidden">
            {/* Pulsing neon background aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-fiverr/10 via-emerald-400/5 to-fiverr/10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
            
            {/* Glowing particle effect in BG */}
            <div className="absolute -inset-1 bg-gradient-to-r from-fiverr to-emerald-400 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-300" />
            
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-100 flex items-center justify-center text-fiverr shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] group-hover:text-fiverr transition-all">
              <Sparkles className="w-4 h-4 animate-pulse" fill="currentColor" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-1 leading-none font-sans">
              <span>Skkill</span>
              <span className="text-fiverr italic font-black drop-shadow-[0_0_8px_rgba(36,182,75,0.35)]">Works</span>
            </span>
            <span className="text-[9px] font-mono font-extrabold tracking-widest text-fiverr leading-none mt-1 uppercase">
              Affiliate Directory
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => {
              if (onLogoClick) onLogoClick();
              setTimeout(() => {
                document.getElementById('sellers')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="text-sm font-bold text-slate-700 hover:text-fiverr transition-colors bg-transparent border-0 cursor-pointer"
          >
            Find Sellers
          </button>
          <button
            onClick={() => {
              if (onLogoClick) onLogoClick();
              setTimeout(() => {
                document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="text-sm font-bold text-slate-700 hover:text-fiverr transition-colors bg-transparent border-0 cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => {
              if (onLogoClick) onLogoClick();
              setTimeout(() => {
                document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="text-sm font-bold text-slate-700 hover:text-fiverr transition-colors bg-transparent border-0 cursor-pointer"
          >
            Why Us
          </button>

          {isAdmin ? (
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 text-xs font-bold text-rose-500 hover:text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              Log Out
            </button>
          ) : null}

          <button
            onClick={() => {
              if (onLogoClick) onLogoClick();
              setTimeout(() => {
                document.getElementById('sellers')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="bg-fiverr hover:bg-fiverr-dark font-black text-sm text-white px-5.5 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-fiverr/10 hover:shadow-fiverr/30 hover:-translate-y-0.5 border-0 cursor-pointer"
          >
            Hire Now 🚀
          </button>
        </div>

        {/* Hamburger Menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => {
              setMobileOpen(false);
              if (onLogoClick) onLogoClick();
              setTimeout(() => {
                document.getElementById('sellers')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="text-left py-2 text-base font-bold text-slate-750 hover:text-fiverr transition-colors border-b border-slate-100 bg-transparent border-0 cursor-pointer"
          >
            Find Sellers
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              if (onLogoClick) onLogoClick();
              setTimeout(() => {
                document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="text-left py-2 text-base font-bold text-slate-750 hover:text-fiverr transition-colors border-b border-slate-100 bg-transparent border-0 cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              if (onLogoClick) onLogoClick();
              setTimeout(() => {
                document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="text-left py-2 text-base font-bold text-slate-750 hover:text-fiverr transition-colors border-b border-slate-100 bg-transparent border-0 cursor-pointer"
          >
            Why Us
          </button>

          {isAdmin && (
            <button
              onClick={() => {
                onLogout();
                setMobileOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 w-full text-sm font-bold text-rose-500 bg-rose-50 border border-rose-200 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Log Out Session
            </button>
          )}

          <button
            onClick={() => {
              setMobileOpen(false);
              if (onLogoClick) onLogoClick();
              setTimeout(() => {
                document.getElementById('sellers')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="bg-fiverr text-white text-center font-extrabold text-sm py-3 rounded-xl shadow-md shadow-fiverr/20 border-0 cursor-pointer"
          >
            Hire Now 🚀
          </button>
        </div>
      )}
    </nav>
  );
}
