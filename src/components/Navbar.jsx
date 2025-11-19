import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how' },
  { label: 'Investment Products', href: '#products' },
  { label: 'Track Record', href: '#track' },
  { label: 'Impact', href: '#impact' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const sections = navItems.map(i => ({ id: i.href.substring(1), label: i.label }))
      let current = ''
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = s.id
          break
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="text-cyan-300 font-semibold tracking-tight text-lg">
            Wealth Assist
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${active === item.href.substring(1) ? 'text-cyan-300' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-cyan-400/90 text-slate-900 font-semibold px-4 py-2 hover:bg-cyan-300 transition-colors">
              Invest Now
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200 py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-cyan-400/90 text-slate-900 font-semibold px-4 py-2">
              Invest Now
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
