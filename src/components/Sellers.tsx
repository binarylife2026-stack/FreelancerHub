import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Clock, MessageSquare, ExternalLink, Edit2, Trash2, Award, ShieldCheck, Check, ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import { Category, Seller } from '../types';

interface SellersProps {
  sellers: Seller[];
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  isAdmin: boolean;
  onEditSeller: (seller: Seller) => void;
  onDeleteSeller: (sellerId: string) => void;
  onTrackClick?: (sellerId: string) => void;
}

export default function Sellers({
  sellers,
  categories,
  selectedCategory,
  onSelectCategory,
  isAdmin,
  onEditSeller,
  onDeleteSeller,
  onTrackClick
}: SellersProps) {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10;

  // Filter sellers matching current category and typing queries dynamically
  const filteredSellers = sellers.filter(s => {
    const matchesCategory = selectedCategory === 'all' || s.cat === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    
    if (!query) return matchesCategory;
    
    return matchesCategory && (
      s.name.toLowerCase().includes(query) ||
      s.title.toLowerCase().includes(query) ||
      s.desc.toLowerCase().includes(query) ||
      s.skills.some(skill => skill.toLowerCase().includes(query))
    );
  });

  // Whenever sellers dataset, category or search query changes, return safely to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [sellers.length, selectedCategory, searchQuery]);

  // Total pages calculation based on filtered subset
  const totalPages = Math.ceil(filteredSellers.length / itemsPerPage);

  // Take the subset of sellers for the active page
  const paginatedSellers = filteredSellers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Smooth scroll back to sellers view anchorage
      const el = document.getElementById('sellers');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 bg-slate-50/50" id="sellers">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title block */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fiverr/10 border border-fiverr/20 text-fiverr text-xs font-bold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" /> Hand-Picked Professionals
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Audited <span className="text-fiverr">Expert Directory</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Filter our certified premium freelance experts in real-time or select a custom technology sector below to view its standalone showcase.
          </p>

          {/* Fiverr-Style Real-time Search Panel */}
          <div className="max-w-xl mx-auto bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm focus-within:border-fiverr/50 focus-within:shadow-[0_0_20px_rgba(36,182,75,0.06)] focus-within:ring-2 focus-within:ring-fiverr/15 transition-all duration-300 relative mb-4">
            <div className="flex items-center gap-2 px-3">
              <Search className="w-5 h-5 text-fiverr shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, skill (e.g. React, WordPress, SEO, Figma)..."
                className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none py-2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-705 transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        {/* Popular Keywords suggestions block */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-slate-400 mb-10 max-w-xl mx-auto">
          <span className="font-bold text-slate-500 font-sans animate-none">Popular:</span>
          {['WordPress', 'SEO', 'React', 'Shopify', 'Laravel', 'Logo', 'Figma'].map((chip) => {
            const chipActive = searchQuery.toLowerCase() === chip.toLowerCase();
            return (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={chip}
                onClick={() => setSearchQuery(chip)}
                className={`px-3 py-1 rounded-xl border border-slate-200 hover:text-fiverr text-[11px] font-bold bg-white text-slate-500 transition-all cursor-pointer shadow-sm ${
                  chipActive ? 'text-fiverr border-fiverr/40 bg-fiverr/10 shadow-inner' : ''
                }`}
              >
                {chip}
              </motion.button>
            );
          })}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[10px] text-rose-500 font-extrabold underline hover:text-rose-600 ml-1.5 cursor-pointer"
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Dynamic Category Selector Bar (Clicking opens separate category page, 'all' keeps Home view) */}
      <div className="mb-14 max-w-5xl mx-auto relative">
        <span className="block text-[10px] text-center font-black uppercase text-slate-400 tracking-wider mb-4">
          Navigate to Separate Showcase Pages
        </span>
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative px-5 py-3 rounded-2xl text-xs sm:text-sm font-black tracking-tight transition-all duration-300 cursor-pointer shadow-sm z-10 overflow-hidden ${
                  isActive
                    ? 'text-white font-black'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-fiverr/30'
                }`}
              >
                <span className="relative z-10">
                  {cat.label}
                  {cat.id !== 'all' && (
                    <span className={`ml-1.5 text-[10px] font-mono ${isActive ? 'text-emerald-100' : 'text-slate-400'}`}>
                      ({sellers.filter(s => s.cat === cat.id).length})
                    </span>
                  )}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-fiverr -z-10 shadow-md shadow-fiverr/20 rounded-2xl"
                    transition={{ type: "spring", stiffness: 360, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

        {/* Catalog Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {paginatedSellers.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-20 text-center text-slate-400 font-semibold border border-dashed border-slate-200 rounded-3xl bg-white shadow-sm"
              >
                No verified experts currently indexed.
              </motion.div>
            ) : (
              paginatedSellers.map((s) => {
                const isLevelTop = s.level === 'level-top';

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97, y: -20 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.015,
                      boxShadow: "0 20px 25px -5px rgba(36,182,75,0.08), 0 10px 10px -5px rgba(36,182,75,0.03)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 350, 
                      damping: 26,
                      layout: { type: "spring", stiffness: 350, damping: 28 }
                    }}
                    key={s.id}
                    className="group relative flex flex-col bg-white border border-slate-200/85 hover:border-fiverr/35 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                  >
                    {/* Glowing top line accent on group hover */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-fiverr/0 via-fiverr to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Top Hand-picked overlay tag */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-fiverr/15 border border-fiverr/20 text-fiverr text-[10px] font-black uppercase tracking-wider select-none"
                    >
                      <ShieldCheck className="w-3 h-3" />
                      Fiverr Verified
                    </motion.div>

                    {/* Inside Card Header */}
                    <div className="p-6 pb-4 flex-1">
                      {/* Brand Face & Info */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <img
                            src={s.img || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'}
                            alt={s.name}
                            className="w-14 h-14 rounded-xl object-cover border-2 border-slate-100 shadow-sm"
                          />
                          {/* Online indicator green pulse */}
                          <div className="absolute -bottom-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fiverr opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-fiverr border-2 border-white"></span>
                          </div>
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base font-black text-slate-850 group-hover:text-fiverr transition-colors">
                              {s.name}
                            </h3>
                            <span
                              className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                                isLevelTop
                                  ? 'bg-amber-500/10 text-amber-600 border border-amber-500/25'
                                  : 'bg-[#e0f2fe] text-sky-600 border border-sky-500/25'
                              }`}
                            >
                              {isLevelTop ? 'Top Rated' : 'Level 2'}
                            </span>
                          </div>
                          {/* Category view label link indicator */}
                          <button
                            onClick={() => onSelectCategory(s.cat)}
                            className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest text-left mt-0.5 hover:text-fiverr transition-colors cursor-pointer"
                          >
                            {categories.find(c => c.id === s.cat)?.label || s.cat.replace('-', ' ')}
                          </button>
                        </div>
                      </div>

                      {/* Fiverr Gig title statement */}
                      <div className="font-bold text-slate-800 text-sm line-clamp-2 h-11 mb-2 leading-relaxed">
                        {s.title}
                      </div>

                      {/* Brief Description */}
                      <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                        {s.desc}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {s.skills.slice(0, 4).map((skill, index) => (
                          <motion.span
                            whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                            key={index}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-slate-600 text-[10px] font-bold tracking-tight cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      {/* Performance matrices */}
                      <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                        <div className="flex items-center gap-2">
                          <Star className="w-3.5 h-3.5 text-amber-550 text-amber-500 fill-amber-500" />
                          <span>
                            <strong className="text-slate-800 font-bold">{s.rating || '5.0'}</strong> ({s.reviews || 0})
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{s.delivery || '3 Days Delivery'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                          <span>{s.response || '1 Hour Response'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-fiverr font-bold" />
                          <span className="text-[11px] font-semibold text-slate-500 truncate">
                            {s.orders || `${s.reviews}+ Deals`}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA & Fiverr link routings */}
                    <div className="bg-slate-50/70 px-6 py-4 border-t border-slate-100/90 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                          Starting at
                        </span>
                        <span className="text-xl font-black text-slate-900">
                          ${s.price || '40'}
                        </span>
                      </div>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => onTrackClick?.(s.id)}
                        className="bg-fiverr hover:bg-fiverr-dark text-white font-black text-xs px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer"
                      >
                        Order Now
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>

                    {/* Administrative override settings */}
                    {isAdmin && (
                      <div className="bg-rose-50/70 border-t border-rose-100/80 p-3 flex justify-end gap-2">
                        <button
                          onClick={() => onEditSeller(s)}
                          className="flex items-center gap-1 text-[10px] font-bold bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3 h-3 text-fiverr" />
                          Edit Profile
                        </button>
                        <button
                          onClick={() => onDeleteSeller(s.id)}
                          className="flex items-center gap-1 text-[10px] font-bold bg-rose-550 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    )}
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Pagination Controls bar for showing exactly 10 profiles per page */}
        {totalPages > 1 && (
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 border border-slate-200 rounded-2xl max-w-5xl mx-auto shadow-sm">
            <span className="text-xs font-semibold text-slate-405 text-slate-400 uppercase">
              Page <span className="text-slate-800 font-extrabold">{currentPage}</span> of <span className="text-slate-800 font-extrabold">{totalPages}</span>
              <span className="mx-2 font-normal text-slate-205 text-slate-200">|</span> 
              Showing profiles <span className="text-fiverr font-extrabold">{Math.min(filteredSellers.length, (currentPage - 1) * itemsPerPage + 1)}-{Math.min(filteredSellers.length, currentPage * itemsPerPage)}</span> of <span className="text-slate-800 font-extrabold">{filteredSellers.length}</span>
            </span>

            <div className="flex items-center gap-1.5">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer shadow-sm"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => {
                const pgActive = currentPage === pg;
                return (
                  <button
                    key={pg}
                    onClick={() => handlePageChange(pg)}
                    className={`w-10 h-10 rounded-xl text-xs font-black transition-all cursor-pointer shadow-sm ${
                      pgActive
                        ? 'bg-fiverr text-white font-black shadow-md shadow-fiverr/10'
                        : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300'
                    }`}
                  >
                    {pg}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer shadow-sm"
                aria-label="Next Page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
