import { motion } from 'motion/react';
import { ArrowDown, CheckCircle, ShieldCheck, Zap, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fiverr/10 via-white to-slate-50 overflow-hidden pt-36 pb-20">
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-fiverr/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle grid pattern background with soft green accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#24b64b_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fiverr/10 border border-fiverr/20 text-fiverr text-xs font-bold tracking-wide uppercase mb-8 shadow-sm shadow-fiverr/5"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fiverr opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-fiverr"></span>
          </span>
          Hand-Picked Elite Freelancers — Verified and Audited ✅
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6"
        >
          Top Tier Freelancing Experts <br />
          <span className="text-slate-500">On-Demand at </span>
          <span className="text-slate-900 font-extrabold">Skkill</span>
          <span className="inline-block text-fiverr italic tracking-tight font-black drop-shadow-[0_0_10px_rgba(36,182,75,0.25)] ml-2.5">Works</span>
        </motion.h1>

        {/* Hero Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          We source, interview, and catalog individual industry high-performers directly from Fiverr. 
          Compare transparent operational ratings, test delivery times, and secure your transactions risk-free.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
        >
          <a
            href="#sellers"
            className="w-full sm:w-auto px-8 py-4 bg-fiverr hover:bg-fiverr-dark text-white font-extrabold text-base rounded-2xl transition-all duration-300 shadow-xl shadow-fiverr/20 hover:shadow-fiverr/35 hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            Explore Vetted Profiles
            <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#how"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-base rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            See Verification Process
          </a>
        </motion.div>

        {/* Absolute Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {/* Trust item 1 */}
          <div className="flex items-center gap-4 bg-white/70 border border-slate-200/80 p-5 rounded-2xl backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/10 to-amber-500/25 text-amber-500 flex items-center justify-center">
              <Award className="w-6 h-6 animate-none" />
            </div>
            <div className="text-left">
              <div className="font-extrabold text-slate-800 text-base">Fiverr Vetted</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Elite Tier Candidates</div>
            </div>
          </div>

          {/* Trust item 2 */}
          <div className="flex items-center gap-4 bg-white/70 border border-slate-200/80 p-5 rounded-2xl backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-fiverr/10 to-fiverr/25 text-fiverr flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 animate-pulse" />
            </div>
            <div className="text-left">
              <div className="font-extrabold text-slate-800 text-base">SSL Secured</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Encrypted Escrow protection</div>
            </div>
          </div>

          {/* Trust item 3 */}
          <div className="flex items-center gap-4 bg-white/70 border border-slate-200/80 p-5 rounded-2xl backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/10 to-cyan-500/25 text-cyan-500 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-extrabold text-slate-800 text-base">100% Assurance</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Risk-Free Client Protection</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
