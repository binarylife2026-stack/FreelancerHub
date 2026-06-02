import { motion } from 'motion/react';
import { Search, UserCheck, CreditCard, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: <Search className="w-6 h-6 text-fiverr" />,
      title: "Isolate Requirements",
      desc: "Filter down individual expert cards based on metrics, live review weights, or core skill competencies.",
      bg: "from-fiverr/15 to-emerald-500/5",
      border: "group-hover:border-fiverr/30"
    },
    {
      step: "02",
      icon: <UserCheck className="w-6 h-6 text-fiverr" />,
      title: "Verify Integrity",
      desc: "Analyze pre-vetted score parameters, live execution benchmarks, and absolute timeline delivery charts.",
      bg: "from-fiverr/15 to-emerald-500/5",
      border: "group-hover:border-fiverr/30"
    },
    {
      step: "03",
      icon: <CreditCard className="w-6 h-6 text-fiverr" />,
      title: "Engage Escrow",
      desc: "Triggering order actions directly forwards requests into Fiverr's protected multi-layered milestone systems.",
      bg: "from-fiverr/15 to-emerald-500/5",
      border: "group-hover:border-fiverr/30"
    },
    {
      step: "04",
      icon: <Rocket className="w-6 h-6 text-fiverr" />,
      title: "Deploy Production",
      desc: "Receive pristine outputs directly on schedule. Full refund rights preserved if delivery metrics collapse.",
      bg: "from-fiverr/15 to-emerald-500/5",
      border: "group-hover:border-fiverr/30"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="how">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fiverr/10 border border-fiverr/20 text-fiverr text-xs font-bold uppercase tracking-wider mb-3">
            🔄 Procurement Flowchart
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Seamless 3-Minute <span className="text-fiverr">Hand-off</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base font-medium">
            Secure top specialized contractors within simple, structured execution steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative bg-white hover:bg-slate-50 border border-slate-200/80 p-8 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Massive background step number */}
              <div className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-fiverr/10 select-none transition-all duration-300">
                {st.step}
              </div>

              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${st.bg} flex items-center justify-center mb-6 border border-slate-100/50 shadow-sm`}>
                {st.icon}
              </div>

              {/* Titles */}
              <h3 className="text-base font-black text-slate-800 mb-2 tracking-tight">
                {st.title}
              </h3>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
