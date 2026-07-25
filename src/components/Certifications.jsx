import React from 'react'
import { motion } from 'framer-motion'

function CertCard({ title, date, badges }){
  return (
    <motion.div whileHover={{y:-6}} className="card hover:border-cyan-400/50 transition-all">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="text-sm text-slate-300 mt-1">Issued {date}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {badges.map(b => <span key={b} className="text-xs px-2 py-1 bg-slate-800/40 border border-slate-700 rounded-full">{b}</span>)}
      </div>
      <div className="mt-6">
        <button className="px-4 py-2 rounded-md border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">Verify Credential</button>
      </div>
    </motion.div>
  )
}

export default function Certifications(){
  const items = [
    { title: 'Deloitte — Data Analytics & AI', date: 'Jun 2026', badges: ['Data Analytics','Cloud','KPI Dashboards'] },
    { title: 'CSC India / APSCHE — Quantum Computing', date: 'Jul 2026', badges: ['Quantum Algorithms','Computational Physics'] },
    { title: 'ServiceNow & AICTE — Agentic AI & ATF', date: 'Jul 2026', badges: ['ServiceNow Admin','Agentic AI','Automated Testing'] }
  ]

  return (
    <section id="certifications" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-display font-bold">Certifications</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {items.map(i => <CertCard key={i.title} {...i} />)}
        </div>
      </div>
    </section>
  )
}
