import { motion } from 'framer-motion'
import GlowCard from './GlowCard'

const steps = [
  {
    title: 'Source at a deep discount',
    text: 'We find distressed properties at ≤75% of market value through our national network.'
  },
  {
    title: 'Due diligence & risk checks',
    text: 'Legal, valuation, insurance and risk committee sign-off before any capital is accepted.'
  },
  {
    title: 'Funds held in attorney trust',
    text: 'Investor capital sits in an interest-bearing attorney trust with transparent statements.'
  },
  {
    title: 'Acquire & execute strategy',
    text: 'Leaseback or flip execution is fully managed end-to-end by specialist teams.'
  },
  {
    title: 'Exit & distribution',
    text: 'Property exits or buybacks are executed and returns distributed per contract.'
  }
]

const HowItWorks = () => {
  return (
    <section id="how" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">How It Works</h2>
          <p className="text-slate-300 max-w-2xl">A simple, transparent process designed to protect capital and deliver predetermined outcomes.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <GlowCard className="h-full">
                <div className="text-cyan-300 text-sm mb-2">Step {i + 1}</div>
                <div className="text-white font-semibold mb-2">{s.title}</div>
                <p className="text-slate-300 text-sm">{s.text}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
