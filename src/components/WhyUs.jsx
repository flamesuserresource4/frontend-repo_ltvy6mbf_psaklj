import GlowCard from './GlowCard'
import { Shield, Scale, BadgeCheck, Landmark, Settings, Handshake } from 'lucide-react'

const items = [
  { icon: Shield, title: 'Pre-vetted, risk-mitigated deals', text: 'Each asset passes legal, valuation and insurance checks with risk committee oversight.' },
  { icon: Scale, title: '≤75% of market value', text: 'All-in acquisition costs at 75% or less of market value provide strong downside protection.' },
  { icon: Landmark, title: 'Attorney-managed funds', text: 'Capital is received and disbursed via an attorney’s interest-bearing trust with clear mandates.' },
  { icon: Handshake, title: 'Impact-first philosophy', text: 'Principle and purpose before profit — investors earn while helping families avoid distressed auctions.' },
  { icon: Settings, title: 'Fully managed', text: 'No DIY chaos — we handle acquisition, uplift, tenants, listings, and exit execution end-to-end.' },
  { icon: BadgeCheck, title: 'Transparent & ethical', text: 'Plain-language mandates, clear reporting, and aligned incentives.' },
]

const WhyUs = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">Why Wealth Assist</h2>
          <p className="text-slate-300 max-w-2xl">Institutional discipline with human impact. We focus on capital preservation first, then compounding returns.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <GlowCard key={title}>
              <div className="flex items-center gap-3 mb-3">
                <Icon className="text-cyan-300" />
                <div className="text-white font-semibold">{title}</div>
              </div>
              <p className="text-slate-300 text-sm">{text}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
