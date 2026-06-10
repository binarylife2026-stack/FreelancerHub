/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles, Menu, X, ShieldAlert, LogOut, ArrowDown, CheckCircle, ShieldCheck, Zap, Award, Layers, Users, Star, Handshake,
  MessageSquareText, UsersRound, Timer, Headphones, CircleCheck, Search, Clock, MessageSquare, ExternalLink, Edit2, Trash2,
  ArrowLeft, Check, ChevronLeft, ChevronRight, KeyRound, Eye, EyeOff, LayoutDashboard, Plus, Eye as EyeIcon, TrendingUp,
  MousePointerClick, Info, Mail, Globe, Phone, Tag
} from 'lucide-react';

/* ==========================================================================
   1. TYPES & INTERFACES (From src/types.ts)
   ========================================================================== */
export interface SubCategory {
  id: string;
  name: string;
  icon: string;
}

export interface Category {
  id: string;
  label: string;
  icon?: string;
  sub?: SubCategory[];
}

export interface Seller {
  id: string;
  name: string;
  level: string;
  cat: string;
  subcategory?: string;
  price: number;
  rating: string;
  reviews: number;
  delivery: string;
  response: string;
  orders?: string;
  title: string;
  desc: string;
  img: string;
  skills: string[];
  link: string;
  clicks?: number;
}

/* ==========================================================================
   2. DATASETS (From src/data.ts)
   ========================================================================== */
export const DEFAULT_CATEGORIES: Category[] = [
  { id: 'all', label: 'All Fields' },
  { id: 'web', label: 'Web Design' },
  { id: 'logo', label: 'Logo Design' },
  { id: 'seo', label: 'SEO & Growth' },
  { id: 'video', label: 'Video Editing' },
  { id: 'app', label: 'App Dev' },
  { id: 'content', label: 'Content Writing' },
  { id: 'social', label: 'Social Media' },
  { id: 'uiux', label: 'UI/UX Design' }
];

export const DEFAULT_SELLERS: Seller[] = [
  {
    id: "s1",
    name: "Arif Hasan",
    level: "level-2",
    cat: "web",
    price: 50,
    rating: "4.9",
    reviews: 487,
    delivery: "3 Days Delivery",
    response: "1 Hour Response",
    orders: "520+ Orders Done",
    title: "I will design a modern, responsive website for your business",
    desc: "Professional web designer with 5+ years experience in creating stunning, conversion-focused websites.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    skills: ["WordPress", "React", "Figma", "Responsive"],
    link: "https://www.fiverr.com/?utm_source=freelancerhub",
    clicks: 14
  },
  {
    id: "s2",
    name: "Fatima Rahman",
    level: "level-top",
    cat: "logo",
    price: 35,
    rating: "5.0",
    reviews: 1203,
    delivery: "2 Days Delivery",
    response: "30 Min Response",
    orders: "1,350+ Orders Done",
    title: "I will create a stunning logo and full brand identity",
    desc: "Award-winning graphic designer specializing in brand identity, logo design, and visual storytelling.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    skills: ["Logo", "Branding", "Illustrator", "Photoshop"],
    link: "https://www.fiverr.com/?utm_source=freelancerhub"
  },
  {
    id: "s3",
    name: "Rakib Ahmed",
    level: "level-2",
    cat: "seo",
    price: 80,
    rating: "4.8",
    reviews: 312,
    delivery: "7 Days Delivery",
    response: "2 Hour Response",
    orders: "340+ Orders Done",
    title: "I will do SEO optimization to rank your website on Google",
    desc: "SEO expert with proven results. Helped 300+ businesses rank on Google's first page.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    skills: ["On-page SEO", "Technical SEO", "Backlinks"],
    link: "https://www.fiverr.com/?utm_source=freelancerhub"
  },
  {
    id: "s4",
    name: "Nadia Islam",
    level: "level-top",
    cat: "video",
    price: 40,
    rating: "4.9",
    reviews: 678,
    delivery: "2 Days Delivery",
    response: "45 Min Response",
    orders: "720+ Orders Done",
    title: "I will edit your video professionally for YouTube & social media",
    desc: "Creative video editor specializing in YouTube content, social media reels, and cinematic storytelling.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    skills: ["Premiere Pro", "After Effects", "Motion Graphics"],
    link: "https://www.fiverr.com/?utm_source=freelancerhub"
  },
  {
    id: "s5",
    name: "Tariqul Bashar",
    level: "level-2",
    cat: "app",
    price: 120,
    rating: "5.0",
    reviews: 145,
    delivery: "14 Days Delivery",
    response: "1 Hour Response",
    orders: "150+ Orders Done",
    title: "I will build premium iOS and Android apps with Flutter",
    desc: "Senior mobile application architect with robust proficiency in cross-platform mobile ecosystem.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    skills: ["Flutter", "Dart", "Firebase", "API Integration"],
    link: "https://www.fiverr.com/?utm_source=freelancerhub"
  }
];

/* ==========================================================================
   3. SUB-COMPONENTS
   ========================================================================== */

/* Navbar Component */
export function Navbar({ isAdmin, onLogout, onOpenLogin, onLogoClick }: {
  isAdmin: boolean;
  onLogout: () => void;
  onOpenLogin: () => void;
  onLogoClick?: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/85 py-3 shadow-sm' : 'bg-white/60 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => { if (onLogoClick) onLogoClick(); }} className="flex items-center gap-3.5 group text-left cursor-pointer transition-all">
          <div className="relative w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4 text-fiverr animate-pulse" fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-slate-900 leading-none">
              Skkill<span id="nav-brand-fiverr" className="text-fiverr italic ml-0.5">Works</span>
            </span>
            <span className="text-[9px] font-mono font-extrabold tracking-widest text-fiverr leading-none mt-1 uppercase">Affiliate Directory</span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => document.getElementById('sellers')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-bold text-slate-700 hover:text-fiverr cursor-pointer">Find Sellers</button>
          <button onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-bold text-slate-700 hover:text-fiverr cursor-pointer">How It Works</button>
          <button onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-bold text-slate-700 hover:text-fiverr cursor-pointer">Why Us</button>
          {isAdmin && (
            <button onClick={onLogout} className="flex items-center gap-1.5 text-xs font-bold text-rose-500 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200 cursor-pointer">
              <LogOut className="w-3.5 h-3.5" /> Log Out
            </button>
          )}
          <button onClick={() => document.getElementById('sellers')?.scrollIntoView({ behavior: 'smooth' })} className="bg-fiverr hover:bg-fiverr-dark font-black text-sm text-white px-5.5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md">Hire Now 🚀</button>
        </div>

        <div className="flex md:hidden items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-slate-700 rounded-lg">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl md:hidden">
          <button onClick={() => { setMobileOpen(false); document.getElementById('sellers')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left font-bold py-2 text-slate-700">Find Sellers</button>
          <button onClick={() => { setMobileOpen(false); document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left font-bold py-2 text-slate-700">How It Works</button>
          <button onClick={() => { setMobileOpen(false); document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left font-bold py-2 text-slate-700">Why Us</button>
          <button onClick={() => { setMobileOpen(false); document.getElementById('sellers')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-fiverr text-white font-extrabold text-sm py-3 rounded-xl text-center shadow">Hire Now 🚀</button>
        </div>
      )}
    </nav>
  );
}

/* Hero Component */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fiverr/15 via-white to-slate-50 overflow-hidden pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fiverr/10 border border-fiverr/20 text-fiverr text-xs font-bold tracking-wide uppercase mb-8 shadow-sm">
          Hand-Picked Elite Freelancers — Verified and Audited ✅
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
          Top Tier Freelancing Experts <br />
          <span className="text-slate-500">On-Demand at </span>
          <span className="text-slate-900 font-extrabold">Skkill</span>
          <span className="text-fiverr italic ml-1">Works</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
          We source, interview, and catalog individual industry high-performers directly from Fiverr. Compare transparent operational ratings, test delivery times, and secure your transactions risk-free.
        </p>
        <div class="flex justify-center flex-col sm:flex-row gap-4 mb-16" id="hero-btn-holder">
          <a href="#sellers" className="px-8 py-4 bg-fiverr text-white font-extrabold text-base rounded-2xl flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-fiverr/30">
            Explore Vetted Profiles <ArrowDown className="w-5 h-5" />
          </a>
          <a href="#how" className="px-8 py-4 bg-white border border-slate-200 text-slate-800 font-bold text-base rounded-2xl flex justify-center items-center hover:bg-slate-50 shadow-sm">
            See Verification Process
          </a>
        </div>
      </div>
    </section>
  );
}

/* Stats Component */
export function Stats({ sellersCount }: { sellersCount: number }) {
  const statsData = [
    { icon: <Layers className="w-5 h-5 text-fiverr" />, value: "5,000+", label: "Contracts Fulfilled", color: "from-fiverr/15 to-fiverr/5" },
    { icon: <Users className="w-5 h-5 text-fiverr" />, value: sellersCount.toString(), label: "Premium Experts", color: "from-fiverr/15 to-emerald-500/10" },
    { icon: <Star className="w-5 h-5 text-amber-500" fill="currentColor" />, value: "4.9 / 5.0", label: "Average Score Matrix", color: "from-amber-500/10 to-orange-500/10" },
    { icon: <Handshake className="w-5 h-5 text-fiverr" />, value: "99.2%", label: "Retention Standard", color: "from-fiverr/15 to-emerald-400/10" }
  ];

  return (
    <section className="bg-white border-y border-slate-150 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${stat.color} flex items-center justify-center mb-3 shadow-sm`}>
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
              <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* HowItWorks Component */
export function HowItWorks() {
  const steps = [
    { step: "01", icon: <Search className="w-6 h-6 text-fiverr" />, title: "Isolate Requirements", desc: "Filter down individual expert cards based on metrics, live review weights, or core skill competencies." },
    { step: "02", icon: <CheckCircle className="w-6 h-6 text-fiverr" />, title: "Verify Integrity", desc: "Analyze pre-vetted score parameters, live execution benchmarks, and absolute timeline delivery charts." },
    { step: "03", icon: <ShieldCheck className="w-6 h-6 text-fiverr" />, title: "Engage Escrow", desc: "Triggering order actions directly forwards requests into Fiverr's protected multi-layered milestone systems." },
    { step: "04", icon: <Zap className="w-6 h-6 text-fiverr" />, title: "Deploy Production", desc: "Receive pristine outputs directly on schedule. Full refund rights preserved if delivery metrics collapse." }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="how">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex px-3 py-1 bg-fiverr/10 text-fiverr text-xs font-bold uppercase rounded-full mb-3">🔄 Procurement Flowchart</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Seamless 3-Minute <span class="text-fiverr" id="howitworks-fiverr-accent">Hand-off</span></h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-2 text-base">Secure top specialized contractors within simple, structured execution steps.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <div key={i} className="group relative bg-white hover:bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm transition-all overflow-hidden">
              <div className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-fiverr/10 select-none transition-all">{st.step}</div>
              <div className="w-12 h-12 rounded-xl bg-fiverr/10 flex items-center justify-center mb-6">{st.icon}</div>
              <h3 className="text-base font-black text-slate-800 mb-2">{st.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* WhyUs Component */
export function WhyUs() {
  const protocols = [
    { icon: <ShieldAlert className="w-5 h-5 text-fiverr" />, title: "Continuous Vetting", desc: "We monitor feedback scores weekly. Underperforming assets are instantly culled from indices." },
    { icon: <Timer className="w-5 h-5 text-fiverr" />, title: "Pristine Timelines", desc: "Featured professionals maintain rigorous milestone habits. Late hand-offs remain strictly below 0.8%." },
    { icon: <CheckCircle className="w-5 h-5 text-fiverr" />, title: "Value Audited Rates", desc: "Procure premium human intellectual properties aligned precisely within competitive market parameters." },
    { icon: <Headphones className="w-5 h-5 text-fiverr" />, title: "Solution Architects", desc: "Confused by project definitions? Reach out directly via active links for expert pipeline structuring." },
    { icon: <Star className="w-5 h-5 text-amber-500" fill="currentColor" />, title: "Elite Tier Exclusivity", desc: "We restrict admissions inside our vetted index to operators registering stellar 4.7+ average weights." },
    { icon: <CircleCheck className="w-5 h-5 text-fiverr" />, title: "Absolute Escrow Cover", desc: "Operate safely inside standard escrow frameworks. Zero financial exposure until performance passes." }
  ];

  return (
    <section className="py-24 bg-slate-50/50 border-t border-slate-100" id="why">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex px-3 py-1 bg-fiverr/10 text-fiverr text-xs font-bold uppercase rounded-full mb-3">💎 Elite Curations</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Strict Vetting <span className="text-fiverr">Protocols</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-2 text-base">Fiverr aggregates millions of listings—we screen out anomalies and track continuous scores to guard your active workflows.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocols.map((pt, i) => (
            <div key={i} className="bg-white border border-slate-205 border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-5 border border-slate-100">{pt.icon}</div>
              <h3 className="text-base font-black text-slate-800 mb-2">{pt.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CTA Component */
export function CTA() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100/50 border border-slate-200 p-10 sm:p-14 text-center shadow-md">
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="text-4xl justify-center flex mb-6 animate-bounce">🤔</div>
            <h2 className="text-2xl sm:text-3.5xl font-black text-slate-900 leading-tight tracking-tight mb-4 font-sans">
              Need Custom Project Architecture <br />
              <span className="text-fiverr">Before Ordering?</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mb-10 leading-relaxed font-semibold">
              Let our technology integration analysts map your milestones and recommend the exact specialized professional suited for your production requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3.5 bg-fiverr text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg">
                <MessageSquareText className="w-5 h-5" /> Consult via WhatsApp Terminal
              </a>
              <a href="#sellers" className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm">
                <UsersRound className="w-4 h-4 text-fiverr" /> View Active Profiles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Footer Component */
export function Footer({ categories, onSelectCategory }: {
  categories: Category[];
  onSelectCategory: (id: string) => void;
}) {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
          <div className="flex flex-col gap-5">
            <span className="text-lg font-black text-slate-800">
              Skkill<span className="text-fiverr italic">Works</span>
            </span>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Aggregating and verifying elite professional freelancers from around the globe under talent-vetted pipelines.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 text-xs font-black uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-550 text-slate-500 font-semibold">
              <li><button onClick={() => onSelectCategory('all')} className="hover:text-fiverr font-semibold border-0 bg-transparent text-left cursor-pointer">Find Active Indexes</button></li>
              <li><button onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-fiverr font-semibold border-0 bg-transparent text-left cursor-pointer">Detailed Validation Flow</button></li>
              <li><button onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-fiverr font-semibold border-0 bg-transparent text-left cursor-pointer">Risk Mitigation Metrics</button></li>
            </ul>
          </div>
          <div>
            <h4 class="text-slate-900 text-xs font-black uppercase tracking-widest mb-6" id="footer-categories-header">Core Segments</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs sm:text-sm text-slate-500 font-semibold">
              {categories.slice(1, 9).map(cat => (
                <li key={cat.id}>
                  <button onClick={() => onSelectCategory(cat.id)} className="hover:text-fiverr font-semibold border-0 bg-transparent text-left cursor-pointer">{cat.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 text-xs font-black uppercase tracking-widest mb-6">Compliance</h4>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-500 font-semibold">
              <li><a href="#" className="hover:text-fiverr">Privacy Framework</a></li>
              <li><a href="#" className="hover:text-fiverr">Terms of Engagement</a></li>
              <li><a href="#" className="hover:text-fiverr">Anti-Scam Escrow Guide</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-150 pt-8 pb-6">
          <p className="text-[11px] text-slate-400 text-center max-w-4xl mx-auto">
            Disclaimer: This website operates strictly as an independent affiliate verification routing directory. We hold no official centralized brand ownership over Fiverr. Clicking specific catalog execution buttons securely passes parameters into Fiverr.com payment interfaces.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Base Sellers Listing Component */
export function Sellers({ sellers, categories, selectedCategory, onSelectCategory, isAdmin, onEditSeller, onDeleteSeller, onTrackClick }: {
  sellers: Seller[];
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  isAdmin: boolean;
  onEditSeller: (seller: Seller) => void;
  onDeleteSeller: (id: string) => void;
  onTrackClick: (id: string) => void;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 8;

  const filteredSellers = sellers.filter(s => {
    const matchesCategory = selectedCategory === 'all' || s.cat === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;
    return matchesCategory && (
      s.name.toLowerCase().includes(query) ||
      s.title.toLowerCase().includes(query) ||
      s.desc.toLowerCase().includes(query) ||
      s.skills.some(sk => sk.toLowerCase().includes(query))
    );
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [sellers.length, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredSellers.length / itemsPerPage);
  const paginatedSellers = filteredSellers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="py-24 bg-slate-50/50" id="sellers">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-flex px-3 py-1 bg-fiverr/10 text-fiverr text-xs font-bold uppercase rounded-full mb-3">💎 Professional Indexes</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Audited <span className="text-fiverr">Expert Directory</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-2 mb-8">Filter our certified premium freelance experts in real-time or search specific skill competencies.</p>

          <div className="max-w-xl mx-auto bg-white p-2 border border-slate-200 rounded-2xl flex items-center gap-2 px-4 shadow-sm focus-within:border-fiverr/50 transition-all mb-8">
            <Search className="w-5 h-5 text-fiverr" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, skill (e.g. React, WordPress, SEO)..."
              className="w-full bg-transparent text-sm focus:outline-none py-2"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center" id="sellers-filter-holder">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase rounded-xl border transition-all cursor-pointer ${cat.id === selectedCategory ? 'bg-fiverr border-fiverr text-white shadow-sm' : 'bg-white border-slate-200 text-slate-700 hover:border-fiverr'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedSellers.map(s => (
            <div key={s.id} className="relative bg-white border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-fiverr/30 hover:shadow-lg transition-all">
              <div className="absolute top-4 right-4 bg-fiverr/15 border border-fiverr/20 text-fiverr text-[9px] font-black uppercase rounded-full px-2.5 py-1">Verified</div>
              <div className="flex items-center gap-3.5 mb-4 text-left">
                <img src={s.img} alt={s.name} className="w-12 h-12 rounded-xl object-cover border border-slate-100" />
                <div>
                  <h3 className="text-sm font-black text-slate-900 text-left">{s.name}</h3>
                  <span className="text-[9px] font-bold text-fiverr uppercase bg-fiverr/10 rounded px-1.5 py-0.5 mt-0.5 inline-block">{s.level}</span>
                </div>
              </div>
              <p className="text-xs font-bold text-slate-800 line-clamp-2 text-left mb-2">{s.title}</p>
              <p className="text-[11px] text-slate-500 line-clamp-3 text-left mb-4 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {s.skills.slice(0, 3).map(sk => (
                  <span key={sk} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-bold">{sk}</span>
                ))}
              </div>
              <div class="border-t border-slate-100 pt-3 flex items-center justify-between" id={`seller-card-billing-${s.id}`}>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] font-bold text-slate-400 uppercase">Starting at</span>
                  <span className="text-base font-black text-slate-900">${s.price}</span>
                </div>
                <a href={s.link} target="_blank" rel="noopener" onClick={() => onTrackClick(s.id)} className="px-3 py-2 bg-slate-50 hover:bg-fiverr border border-slate-200 hover:border-fiverr text-slate-700 hover:text-white text-xs font-black rounded-xl transition-all">Order Now</a>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="p-2 border rounded-xl disabled:opacity-50"><ChevronLeft className="w-4 h-4" /></button>
            <span className="text-xs font-mono font-bold text-slate-500">Page {currentPage} of {totalPages}</span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="p-2 border rounded-xl disabled:opacity-50"><ChevronRight className="w-4 h-4" /></button>
          </div>
        )}
      </div>
    </section>
  );
}

/* Mini Admin/Operator Component */
export function StandaloneAdminModals({ open, onClose, sellers, onSetSellers, categories, onSetCategories, onShowToast }: {
  open: boolean;
  onClose: () => void;
  sellers: Seller[];
  onSetSellers: React.Dispatch<React.SetStateAction<Seller[]>>;
  categories: Category[];
  onSetCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  onShowToast: (msg: string) => void;
}) {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('level-2');
  const [cat, setCat] = useState('web');
  const [price, setPrice] = useState('50');
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState('');

  const addNewSeller = () => {
    if (!name || !title) {
      onShowToast('Please fill out Contractor name and promotional title.');
      return;
    }
    const newEntry: Seller = {
      id: 's_' + Date.now(),
      name,
      level,
      cat,
      price: parseInt(price) || 50,
      rating: '4.9',
      reviews: 14,
      delivery: '3 Days Delivery',
      response: '1 Hour Response',
      title,
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      desc: 'Expert premium contractor delivering audited high-performance outcomes schedules.',
      skills: skills.split(',').map(s => s.trim()).filter(Boolean),
      link: 'https://www.fiverr.com/',
      clicks: 0
    };
    onSetSellers(p => [...p, newEntry]);
    onShowToast('Expert profile registered successfully.');
    setName('');
    setTitle('');
    setSkills('');
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div className="w-full max-w-xl bg-white rounded-3xl border shadow-2xl relative p-6 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-405 text-slate-400 hover:text-slate-700"><X className="w-6 h-6" /></button>
        <h2 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3 mb-6">Local Operator Panel</h2>
        
        <div className="flex flex-col gap-4 text-left">
          <div>
            <label className="text-xs font-bold text-slate-500 mb-1 block">Contractor Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Arif Hasan" className="w-full p-2.5 border rounded-xl text-sm" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 mb-1 block">Vetted Level</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)} className="w-full p-2.5 border rounded-xl text-sm">
              <option value="level-2">Vetted Seller (Level 2)</option>
              <option value="level-top">Top Rated Candidate</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 mb-1 block">Skill Category Node</label>
            <select value={cat} onChange={(e) => setCat(e.target.value)} className="w-full p-2.5 border rounded-xl text-sm">
              {categories.slice(1).map(c => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 mb-1 block">Starting Rate Pricing ($ USD)</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="50" className="w-full p-2.5 border rounded-xl text-sm" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 mb-1 block">Fiverr Gig Headline</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. I will design custom layouts" className="w-full p-2.5 border rounded-xl text-sm" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 mb-1 block">Skills (comma-separated)</label>
            <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="React, Figma, HTML" className="w-full p-2.5 border rounded-xl text-sm" />
          </div>

          <button onClick={addNewSeller} className="mt-4 w-full bg-fiverr text-white p-3.5 font-bold rounded-xl shadow-lg">Register Expert Entry</button>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   4. MAIN DYNAMIC APPLICATION WRAPPER
   ========================================================================== */
export default function SinglePageReactApp() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState<Category[]>(DEFAULT_CATEGORIES);
  const [sellers, setSellers] = useState<Seller[]>(DEFAULT_SELLERS);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const trackClick = (id: string) => {
    setSellers(prev => prev.map(s => s.id === id ? { ...s, clicks: (s.clicks || 0) + 1 } : s));
    triggerToast('Transfer secure tunnel triggered successfully!');
  };

  return (
    <div className="min-h-screen bg-slate-50 antialiased font-sans text-slate-900 pb-12">
      <Navbar
        isAdmin={isAdmin}
        onLogout={() => { setIsAdmin(false); triggerToast('Authorized session terminated.'); }}
        onOpenLogin={() => { setIsAdmin(true); triggerToast('Local developer admin access granted!'); }}
        onLogoClick={() => setSelectedCategory('all')}
      />

      <Hero />

      <Stats sellersCount={sellers.length} />

      <Sellers
        sellers={sellers}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        isAdmin={isAdmin}
        onEditSeller={() => {}}
        onDeleteSeller={(id) => { setSellers(p => p.filter(x => x.id !== id)); triggerToast('Entry deleted.'); }}
        onTrackClick={trackClick}
      />

      <HowItWorks />

      <WhyUs />

      <CTA />

      <Footer categories={categories} onSelectCategory={setSelectedCategory} />

      {/* Admin Quick Entry Widget Switch floating */}
      <div className="fixed bottom-6 right-6 z-40">
        <button onClick={() => setIsAdminPanelOpen(true)} className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-4.5 py-3 rounded-xl shadow-lg border border-slate-800">
          Admin Gate
        </button>
      </div>

      <StandaloneAdminModals
        open={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
        sellers={sellers}
        onSetSellers={setSellers}
        categories={categories}
        onSetCategories={setCategories}
        onShowToast={triggerToast}
      />

      {toastMessage && (
        <div style={{zIndex: 99999}} className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-5 py-3 rounded-2xl shadow-xl">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
