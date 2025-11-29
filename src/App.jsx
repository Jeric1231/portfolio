import React from 'react'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground' 

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased bg-gradient-to-b from-[#071026] via-[#031022] to-[#01040a] text-slate-100">
      <Nav />
      <main className="relative overflow-hidden z-10">
        <AnimatedBackground />
        <div className="hero-bg pointer-events-none" />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
