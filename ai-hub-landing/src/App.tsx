import AgentCanvas from './components/AgentCanvas'
import CtaBanner from './components/CtaBanner'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ModelRegistry from './components/ModelRegistry'
import Pricing from './components/Pricing'
import Quickstart from './components/Quickstart'

export default function App() {
  return (
    <>
      <Header />
      <main className="w-full pt-28 min-h-screen bg-canvas">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-16">
          <Hero />
          <Features />
          <ModelRegistry />
          <AgentCanvas />
          <Quickstart />
          <Pricing />
          <Faq />
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </>
  )
}
