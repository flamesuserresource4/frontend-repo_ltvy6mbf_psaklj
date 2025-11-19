import { motion } from 'framer-motion'

const Impact = () => {
  return (
    <section id="impact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">Social Impact</h2>
          <p className="text-slate-300 max-w-2xl">Your capital helps families avoid distressed auctions and rebuild financial stability — while you earn competitive returns backed by real property.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-slate-900/60 border border-white/10 p-8">
            <div className="text-white font-semibold mb-2">Before → After</div>
            <p className="text-slate-300 text-sm">A homeowner in arrears faced an imminent sheriff auction. We acquired the property below market, executed a leaseback, and structured an affordable path to buy back. The family stayed in their home and regained stability; the investor earned monthly income plus contractually defined growth.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="rounded-2xl bg-slate-900/60 border border-white/10 p-8">
            <div className="grid grid-cols-2 gap-4 text-slate-200 text-sm">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-white/10">
                <div className="text-3xl font-semibold text-white mb-1">65%</div>
                Avoided auctions in our program
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-white/10">
                <div className="text-3xl font-semibold text-white mb-1">R100m+</div>
                Debt restructured for households
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-white/10">
                <div className="text-3xl font-semibold text-white mb-1">24 mo</div>
                Average product term
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-white/10">
                <div className="text-3xl font-semibold text-white mb-1">17%+ p.a.</div>
                Typical net target returns
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Impact
