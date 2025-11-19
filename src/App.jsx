import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Products from './components/Products'
import RiskFlow from './components/RiskFlow'
import TrackRecord from './components/TrackRecord'
import Impact from './components/Impact'
import FAQs from './components/FAQs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <WhyUs />
        <HowItWorks />
        <Products />
        <RiskFlow />
        <TrackRecord />
        <Impact />
        <FAQs />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
