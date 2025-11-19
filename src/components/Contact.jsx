import { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks — we’ll be in touch shortly.')
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">Ready to explore your first impact real estate investment?</h2>
          <p className="text-slate-300">Book a 1:1 call or request the brochure. We’ll help you match the right product to your goals and timeline.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required placeholder="Name" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400" />
              <input required type="email" placeholder="Email" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400" />
              <input required placeholder="Phone" className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400" />
              <select className="w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white">
                <option>Investment Range</option>
                <option>R250k - R500k</option>
                <option>R500k - R1m</option>
                <option>R1m - R5m</option>
                <option>R5m+</option>
              </select>
            </div>
            <textarea rows={4} placeholder="Message" className="mt-4 w-full rounded-lg bg-slate-800/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400"></textarea>
            <div className="flex flex-wrap gap-3 mt-4">
              <label className="flex items-center gap-2 text-slate-300 text-sm">
                <input type="checkbox" className="accent-cyan-400" /> Request webinar replay
              </label>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center rounded-full bg-cyan-400 text-slate-900 font-semibold px-6 py-3 hover:bg-cyan-300 transition-colors">Book a 1:1 Investment Call</button>
              <a href="#" className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition-colors">Download Investment Brochure</a>
            </div>
            {status && <p className="mt-4 text-cyan-300">{status}</p>}
          </form>

          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 text-slate-300">
            <div className="text-white font-semibold mb-2">Contact</div>
            <p>Email: hello@wealthassist.co.za</p>
            <p>Phone: +27 21 555 1234</p>
            <p className="mt-4 text-sm">Office: 5th Floor, Century City, Cape Town, South Africa</p>
            <div className="mt-6 text-xs text-slate-400">
              Disclaimer: Wealth Assist is a real estate investment company, not a financial advisor. This information is not investment advice and does not constitute a solicitation to invest.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
