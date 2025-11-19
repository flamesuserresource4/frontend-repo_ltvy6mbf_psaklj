import { motion } from 'framer-motion'
import GlowCard from './GlowCard'
import { ShieldCheck, ArrowUpRight, Coins } from 'lucide-react'

const products = [
  {
    name: 'Buy & Lease Back',
    line: 'Acquire at a discount, lease to the former owner with an option to buy back.',
    term: 'Typical term: 12–36 months',
    returnType: 'Monthly income + capital growth',
    icon: ShieldCheck
  },
  {
    name: 'Buy-to-Sell / Flip',
    line: 'Fund discounted acquisitions; we manage uplift, listing and resale end-to-end.',
    term: 'Typical term: 6–18 months',
    returnType: 'Fixed capital return (e.g. 15–20% over ±12 months)',
    icon: ArrowUpRight
  },
  {
    name: 'JV Super-Flip',
    line: 'Joint-venture flip structures with pre-priced risk and defined exit.',
    term: 'Typical term: 6–12 months',
    returnType: 'Targeting ±2% per month on certain JV structures',
    icon: Coins
  }
]

const Products = () => {
  return (
    <section id="products" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">Investment Products</h2>
          <p className="text-slate-300 max-w-2xl">Property-backed opportunities with predetermined terms and transparent risk management.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <GlowCard>
                <div className="flex items-center gap-3 mb-3">
                  <p.icon className="text-cyan-300" />
                  <div className="text-white font-semibold text-lg">{p.name}</div>
                </div>
                <p className="text-slate-300 text-sm mb-4">{p.line}</p>
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>{p.term}</span>
                  <span className="text-cyan-300">{p.returnType}</span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center rounded-full bg-cyan-400 text-slate-900 font-semibold px-5 py-2.5 hover:bg-cyan-300 transition-colors">Book a 1:1 Investment Call</a>
          <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-2.5 hover:bg-white/10 transition-colors">Download Investment Brochure</a>
          <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-2.5 hover:bg-white/10 transition-colors">View Current Opportunities</a>
        </div>
      </div>
    </section>
  )
}

export default Products
