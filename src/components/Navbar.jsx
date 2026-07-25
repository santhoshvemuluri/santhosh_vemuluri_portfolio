import React from 'react'

export default function Navbar({ active }) {
  return (
    <header className="w-full py-6">
      <div className="container flex items-center justify-between">
        <a href="#hero" className="px-3 py-2 rounded-md bg-slate-900/40 border border-cyan-500/30 text-sm font-medium tracking-wide glow-cyan">[ SANTHOSH VEMULURI ]</a>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#about" className="tracking-widest text-xs font-semibold uppercase">ABOUT ME</a>
          <a href="#education" className="tracking-widest text-xs font-semibold uppercase">EDUCATION</a>
          <a href="#projects" className="tracking-widest text-xs font-semibold uppercase">PROJECTS</a>
          <a href="#contact" className="tracking-widest text-xs font-semibold uppercase">CONTACT</a>
        </nav>
        <div className="hidden md:block">
          <a href="/resume.pdf" className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-sm font-semibold transition">MY RESUME</a>
        </div>
      </div>
    </header>
  )
}
