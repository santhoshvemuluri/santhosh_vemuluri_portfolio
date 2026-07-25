import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="hero" className="py-24">
      <div className="container flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="text-cyan-400 font-medium uppercase tracking-[0.24em] text-sm">Hello, I’m</div>
          <h1 className="mt-4 font-extrabold font-display display-hero heading-tight leading-[0.9]"><span className="block text-cyan-400 text-glow">santhosh</span><span className="block">vemuluri</span></h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-900/40 border border-slate-700 text-xs font-semibold tracking-widest">ASPIRING SOFTWARE ENGINEER</div>
            <div className="inline-block px-3 py-1 rounded-full border border-cyan-400 text-cyan-400 text-xs font-semibold tracking-widest">DATA ANALYST</div>
          </div>
          <p className="mt-6 text-slate-300 max-w-xl">I build thoughtful digital products at the intersection of software engineering, analytics, and emerging technologies.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#projects" className="bg-cyanAccent px-6 py-3 rounded-md font-bold text-black uppercase glow-cyan">VIEW PROJECTS</a>
            <a href="/resume.pdf" className="border border-slate-700 px-6 py-3 rounded-md text-white uppercase hover:border-cyan-400">VIEW RESUME</a>
          </div>
        </div>
        <motion.div className="w-72 rounded-2xl bg-slate-900/50 p-4 shadow-xl glow-cyan" initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}}>
          <img src="/assets/drive/hero_right.jpg" alt="portrait" className="w-full h-auto rounded-lg object-cover" />
        </motion.div>
      </div>
    </section>
  )
}
