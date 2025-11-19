import { useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Counter = ({ to, suffix = '', duration = 1.4, className = '' }) => {
  const controls = useAnimation()
  const [value, setValue] = useState(0)
  const ref = useInView({ once: true })

  useEffect(() => {
    const node = ref.ref.current
    if (!node) return
  }, [ref.ref])

  useEffect(() => {
    if (!ref.inView) return
    const start = performance.now()
    const step = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1000))
      setValue(Math.floor(p * to))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [ref.inView, to, duration])

  return (
    <div ref={ref.ref} className={className}>
      {value}{suffix}
    </div>
  )
}

const TrackRecord = () => {
  return (
    <section id="track" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">Track Record</h2>
          <p className="text-slate-300 max-w-2xl">A decade of audited performance across cycles. Clear mandates and institutional-grade discipline.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl bg-slate-900/60 border border-white/10 p-8">
            <div className="text-slate-300 mb-2">Years operating</div>
            <div className="text-5xl font-semibold text-white"><Counter to={10} suffix={"+"} /></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-2xl bg-slate-900/60 border border-white/10 p-8">
            <div className="text-slate-300 mb-2">Average net returns</div>
            <div className="text-5xl font-semibold text-white"><Counter to={17} suffix={"%+ p.a."} /></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl bg-slate-900/60 border border-white/10 p-8">
            <div className="text-slate-300 mb-2">Properties transacted</div>
            <div className="text-5xl font-semibold text-white"><Counter to={1200} /></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrackRecord
