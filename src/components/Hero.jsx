import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="hero" className="px-6 py-24 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        <motion.div className="flex-1" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">Hello, I’m</div>
          <h1 className="mt-4 font-extrabold font-display display-hero heading-tight leading-[0.9]"><span className="block text-cyan-400 text-glow">santhosh</span><span className="block">vemuluri</span></h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="inline-block rounded-full border border-slate-700 bg-slate-900/40 px-3 py-1 text-xs font-semibold tracking-widest">ASPIRING SOFTWARE ENGINEER</div>
            <div className="inline-block rounded-full border border-cyan-400 px-3 py-1 text-xs font-semibold tracking-widest text-cyan-400">DATA ANALYST</div>
          </div>
          <p className="mt-6 max-w-xl text-slate-300">I build thoughtful digital products at the intersection of software engineering, analytics, and emerging technologies.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#projects" className="bg-cyanAccent rounded-md px-6 py-3 font-bold uppercase text-black glow-cyan">VIEW PROJECTS</a>
            <a href="/resume.pdf" className="rounded-md border border-slate-700 px-6 py-3 uppercase text-white hover:border-cyan-400">VIEW RESUME</a>
          </div>
        </motion.div>
        <motion.div className="w-72 rounded-2xl bg-slate-900/50 p-4 shadow-xl glow-cyan" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}>
          <img src="/assets/drive/hero_right.jpg" alt="portrait" className="h-auto w-full rounded-lg object-cover" />
        </motion.div>
      </div>
    </section>
  )
}
