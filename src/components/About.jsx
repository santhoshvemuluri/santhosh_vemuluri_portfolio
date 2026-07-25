import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <div className="relative mb-8">
          <h2 className="text-3xl font-display font-bold"><span className="text-cyan-400">MY</span> BIOGRAPHY</h2>
          <div className="absolute right-4 top-4 text-slate-800/20 text-6xl font-black pointer-events-none select-none">PORTFOLIO 2025</div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div className="card" initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <img src="/assets/drive/side_image.jpg" alt="portrait" className="w-full grayscale rounded-lg object-cover" />
          </motion.div>
          <div>
            <p className="text-slate-300">I study computer science and engineering, building scalable digital solutions and embedded systems. I enjoy crafting full-stack applications and data-driven tools, with a strong interest in AI-augmented development.</p>
            <h3 className="mt-6 text-lg font-semibold">Skill & Interest</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {['JAVA','DATA STRUCTURES & ALGORITHMS','FULL-STACK DEVELOPMENT','EMBEDDED SYSTEMS','AI-AUGMENTED DEV','PYTHON'].map(s => (
                <span key={s} className="inline-block px-3 py-2 rounded-full bg-slate-900/50 border border-cyan-400/10 text-sm">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
