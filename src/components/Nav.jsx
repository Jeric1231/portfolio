import React, { useState, useEffect } from 'react'

export default function Nav(){
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 p-4 ${isScrolled ? 'backdrop-blur-md shadow-md' : ''}`}
      style={isScrolled ? { background: 'linear-gradient(180deg,#071026 0%,#031022 80%,#01040a 150%)' } : undefined}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-semibold">John Eric E. Lumambas</div>
          <div className="mt-1 hidden md:flex text-xs">
            <div className="px-3 py-1 bg-sky-900 text-white rounded-full font-medium shadow-sm ring-1 ring-white/10">
              Software Developer • QA Technical
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a
              href="https://drive.google.com/file/d/12WjUmsN046RQAbUEpjraAmPFTH3n8Amk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              title="Open Resume (PDF)"
              aria-label="Open Resume (PDF)"
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/6 text-sm text-white hover:bg-white/10 rounded-full border border-white/10 shadow-sm transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v12m0 0l4-4m-4 4-4-4M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
              </svg>
              <span className="font-medium">Resume</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
