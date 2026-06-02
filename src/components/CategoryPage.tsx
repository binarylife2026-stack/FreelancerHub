import React from 'react';
import { motion } from 'motion/react';
import { Star, Clock, MessageSquare, ExternalLink, Edit2, Trash2, ArrowLeft, ShieldCheck, Check, Award } from 'lucide-react';
import { Category, Seller } from '../types';

interface CategoryPageProps {
  categoryId: string;
  category: Category;
  sellers: Seller[];
  categories: Category[];
  isAdmin: boolean;
  onEditSeller: (seller: Seller) => void;
  onDeleteSeller: (sellerId: string) => void;
  onBackToHome: () => void;
  onTrackClick?: (sellerId: string) => void;
}

export default function CategoryPage({
  categoryId,
  category,
  sellers,
  categories,
  isAdmin,
  onEditSeller,
  onDeleteSeller,
  onBackToHome,
  onTrackClick
}: CategoryPageProps) {
  
  // Filter sellers that are assigned to this selected category
  const categorySellers = sellers.filter(s => s.cat === categoryId);

  return (
    <div className="bg-slate-50/50 pt-32 pb-24 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb section */}
        <div className="flex items-center gap-2.5 text-xs text-slate-500 font-bold mb-8">
          <button
            onClick={onBackToHome}
            className="hover:text-fiverr transition-colors cursor-pointer text-slate-600"
          >
            Home / Verification Indexes
          </button>
          <span>/</span>
          <span className="text-slate-800 font-bold">{category.label}</span>
        </div>

        {/* Dynamic Category Hero section */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden shadow-sm">
          
          {/* Faint fiverr green glows for premium atmosphere */}
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-fiverr/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-fiverr/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fiverr/10 border border-fiverr/25 text-fiverr text-xs font-bold tracking-wider uppercase mb-4">
                <Award className="w-3.5 h-3.5" /> Core Sector Block
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
                {category.label}
              </h1>
              <p className="text-slate-505 text-slate-500 max-w-xl text-sm sm:text-base leading-relaxed">
                Displaying certified, top performing experts strictly filtered inside the <strong className="text-slate-800 font-extrabold">{category.label}</strong> directory logic.
              </p>
            </div>

            <div className="flex flex-col gap-2 bg-slate-50 border border-slate-200 p-4 rounded-2xl min-w-[180px] text-center sm:text-left shadow-sm">
              <span className="text-[10px] text-slate-550 text-slate-400 font-black uppercase tracking-wider block">
                AUDITED POOL
              </span>
              <span className="text-2xl font-black text-fiverr">
                {categorySellers.length} {categorySellers.length === 1 ? 'Expert' : 'Experts'}
              </span>
              <span className="text-[9px] text-slate-600 font-bold">
                Assigned in current session database
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-105 border-slate-100 flex">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 text-xs font-black uppercase text-slate-600 hover:text-slate-900 bg-white border border-slate-205 hover:bg-slate-100/50 px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-fiverr" />
              Back to Home Directory
            </button>
          </div>
        </div>

        {/* Category specific dynamic grid */}
        {categorySellers.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-slate-200 rounded-3xl bg-white shadow-sm">
            <p className="text-slate-500 font-bold text-sm">
              No authenticated experts are currently assigned under this category node.
            </p>
            {isAdmin && (
              <p className="text-[11px] text-slate-600 mt-2">
                Use the Administrator Gate shortcut to assign service contractors.
              </p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorySellers.map((s) => {
              const isLevelTop = s.level === 'level-top';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={s.id}
                  className="group relative flex flex-col bg-white border border-slate-200/85 hover:border-fiverr/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-fiverr/5 transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Glowing top line accent on group hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-fiverr/0 via-fiverr to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Verified Fiverr badge Tag */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-fiverr/15 border border-fiverr/20 text-fiverr text-[10px] font-black uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3" />
                    Fiverr Verified
                  </div>

                  <div className="p-6 pb-4 flex-1">
                    {/* Brand Face & Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={s.img || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'}
                          alt={s.name}
                          className="w-14 h-14 rounded-xl object-cover border-2 border-slate-100 shadow-sm"
                        />
                        {/* Live indicator green pulse */}
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
                                ? 'bg-amber-500/10 text-amber-600 border border-amber-500/25 shadow-sm'
                                : 'bg-[#e0f2fe] text-sky-600 border border-sky-500/25'
                            }`}
                          >
                            {isLevelTop ? 'Top Rated' : 'Level 2'}
                          </span>
                        </div>
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mt-0.5 animate-none">
                          {category.label}
                        </span>
                      </div>
                    </div>

                    {/* Fiverr Gig title statement */}
                    <div className="font-bold text-slate-800 text-sm line-clamp-2 h-11 mb-2 leading-relaxed">
                      {s.title}
                    </div>

                    {/* Biography Description */}
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                      {s.desc}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {s.skills.slice(0, 4).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-slate-605 text-slate-600 text-[10px] font-bold tracking-tight"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Performance parameters */}
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

                  {/* Pricing Matrix & Routing Destination */}
                  <div className="bg-slate-50/70 px-6 py-4 border-t border-slate-100/90 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                        Starting at
                      </span>
                      <span className="text-xl font-black text-slate-900">
                        ${s.price || '40'}
                      </span>
                    </div>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => onTrackClick?.(s.id)}
                      className="bg-fiverr hover:bg-fiverr-dark text-white font-black text-xs px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer animate-none"
                    >
                      Order Now
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Secret administrative trigger block */}
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
                        className="flex items-center gap-1 text-[10px] font-bold bg-rose-550 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        Delete
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
