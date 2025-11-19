import GlowCard from './GlowCard'

const RiskFlow = () => {
  return (
    <section id="risk" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">Risk Mitigation & Flow of Funds</h2>
          <p className="text-slate-300 max-w-3xl">Capital preservation is built into the mandate. From due diligence to attorney-managed trust accounts, every step is transparent and documented.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <GlowCard>
            <div className="text-white font-semibold mb-3">Risk Mitigation Framework</div>
            <ul className="space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>Independent valuations at ≤75% market value (all costs included)</li>
              <li>Legal structuring and security over real property assets</li>
              <li>Insurance and property management in place from day one</li>
              <li>Risk committee oversight and documented sign-offs</li>
              <li>Transparent reporting with on-request statements</li>
            </ul>
          </GlowCard>

          <GlowCard>
            <div className="text-white font-semibold mb-3">Flow of Funds</div>
            <ol className="space-y-3 text-slate-300 text-sm list-decimal pl-5">
              <li>Investor signs mandate and funds an attorney’s interest-bearing trust</li>
              <li>Funds are released strictly per agreed property transaction</li>
              <li>Acquisition occurs and strategy is executed (leaseback / flip)</li>
              <li>Proceeds are received and distributed to investor per contract</li>
              <li>Auditable trail with attorney statements at each stage</li>
            </ol>
          </GlowCard>
        </div>
      </div>
    </section>
  )
}

export default RiskFlow
