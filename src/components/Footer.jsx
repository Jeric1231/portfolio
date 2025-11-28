import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-8 border-t border-white/6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-4 justify-center">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} John Eric E. Lumambas — Built with React & Tailwind</div>
      </div>
    </footer>
  )
}
