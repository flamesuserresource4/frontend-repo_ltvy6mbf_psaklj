import { useState } from 'react'

const faqs = [
  { q: 'Is my capital secured?', a: 'Investments are secured over real property with acquisition at ≤75% of market value (all costs inclusive). Legal security and insurance are in place.' },
  { q: 'What returns can I expect?', a: 'Returns are predetermined per product. Typical targets range from ±17% net p.a. to ~2% per month on certain JV flip structures.' },
  { q: 'How liquid is my investment?', a: 'Terms are fixed (typically 6–36 months). Early exits are not guaranteed and depend on the specific mandate.' },
  { q: 'Where do my funds go?', a: 'Funds are deposited into an attorney’s interest-bearing trust account and released strictly per mandate.' },
  { q: 'Minimum investment?', a: 'Varies per product and opportunity. Speak to us to match your goals and timeline.' },
  { q: 'Tax considerations?', a: 'Earnings may be treated as interest or capital gains depending on the product. We recommend independent tax advice.' },
]

const FAQs = () => {
  const [open, setOpen] = useState(0)
  return (
    <section id="faqs" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 text-center">FAQs</h2>
        <div className="divide-y divide-white/10 rounded-2xl bg-slate-900/60 border border-white/10">
          {faqs.map((f, i) => (
            <details key={i} open={open === i} onClick={() => setOpen(i)} className="p-6">
              <summary className="cursor-pointer list-none text-white font-medium">{f.q}</summary>
              <p className="mt-2 text-slate-300 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs
