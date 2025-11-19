import { motion } from 'framer-motion'

const Badge = ({ children }) => (
  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
    {children}
  </div>
)

const FloatingCard = ({ delay, x, y }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className="absolute w-40 h-28 rounded-xl bg-slate-800/60 border border-cyan-400/10 shadow-2xl backdrop-blur-md"
    style={{ transform: `translate(${x}px, ${y}px)` }}
  >
    <div className="absolute inset-0 rounded-xl bg-[radial-gradient(150px_60px_at_50%_20%,rgba(34,211,238,0.15),transparent)]" />
    <div className="p-3 text-slate-200 text-xs">
      Asset-backed • ≤75% of market value
    </div>
  </motion.div>
)

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,211,238,0.12),transparent),radial-gradient(40%_40%_at_80%_20%,rgba(250,204,21,0.08),transparent)]" />
      <div className="absolute -top-24 right-10 opacity-50">
        <FloatingCard delay={0.2} x={0} y={0} />
        <FloatingCard delay={0.35} x={120} y={80} />
        <FloatingCard delay={0.5} x={-120} y={140} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Badge>10+ years track record</Badge>
            <Badge>Property-backed security</Badge>
            <Badge>Real social impact</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            Impact Real Estate Investing with Predetermined, Property-Backed Returns
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mb-8">
            Pre-vetted, risk-mitigated real estate investments at 75% or less of market value, with contractually pre-determined returns and real homes behind every deal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-cyan-400 text-slate-900 font-semibold px-6 py-3 hover:bg-cyan-300 transition-colors">
              Book a 1:1 Investment Call
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition-colors">
              See How It Works
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-16 bg-[conic-gradient(at_50%_50%,rgba(34,211,238,0.08),transparent,rgba(250,204,21,0.06),transparent)] blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="relative h-40 rounded-xl bg-slate-800/60 border border-cyan-400/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(200px_80px_at_50%_20%,rgba(34,211,238,0.2),transparent)]" />
                  <div className="absolute bottom-3 left-3 text-xs text-slate-200">
                    Pre-vetted • Due diligence passed
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
