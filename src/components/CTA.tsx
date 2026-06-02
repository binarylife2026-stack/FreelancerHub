import { motion } from 'motion/react';
import { MessageSquareText, UsersRound } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100/50 border border-slate-200 p-10 sm:p-14 text-center shadow-md"
        >
          {/* Ambient glowing radial light overlay */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fiverr/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-400/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="text-4xl justify-center flex mb-6 animate-bounce">
              🤔
            </div>
            <h2 className="text-2xl sm:text-3.5xl font-black text-slate-900 leading-tight tracking-tight mb-4 font-sans">
              Need Custom Project Architecture <br />
              <span className="text-fiverr">Before Ordering?</span>
            </h2>
            <p className="text-slate-505 text-slate-500 text-sm sm:text-base mb-10 leading-relaxed font-semibold">
              Let our technology integration analysts map your milestones and recommend the exact specialized professional suited for your production requirements.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-fiverr hover:bg-fiverr-dark text-white font-extrabold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-fiverr/10 flex items-center justify-center gap-2 group hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquareText className="w-5 h-5" />
                Consult via WhatsApp Terminal
              </a>
              <a
                href="#sellers"
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-xl transition-all border border-slate-250 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <UsersRound className="w-4 h-4 text-fiverr" />
                View Active Profiles
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-slate-500 text-xs font-semibold">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fiverr opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-fiverr"></span>
              </span>
              Mean response latency averages below 30 minutes
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
