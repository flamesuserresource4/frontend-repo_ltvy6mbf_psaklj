import { motion } from 'framer-motion'

function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

const GlowCard = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : undefined}
      whileTap={hover ? { scale: 0.99 } : undefined}
      className={cx(
        'relative rounded-2xl p-6 bg-slate-900/60 border border-cyan-400/10 shadow-[0_0_0_1px_rgba(0,0,0,0.2)] backdrop-blur-md',
        'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-cyan-400/10 before:to-emerald-400/5 before:pointer-events-none',
        'after:absolute after:-inset-px after:rounded-2xl after:bg-[radial-gradient(400px_150px_at_var(--x,50%)_var(--y,50%),rgba(34,211,238,0.15),transparent)] after:opacity-0 hover:after:opacity-100 after:transition-opacity',
        className
      )}
      onMouseMove={(e) => {
        const target = e.currentTarget
        const rect = target.getBoundingClientRect()
        target.style.setProperty('--x', `${e.clientX - rect.left}px`)
        target.style.setProperty('--y', `${e.clientY - rect.top}px`)
      }}
    >
      {children}
    </motion.div>
  )
}

export default GlowCard
