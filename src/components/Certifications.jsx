import React, { useState } from 'react'
import { motion } from 'framer-motion'

const certs = [
  {
    title: 'Deloitte Data Analytics & AI',
    issuer: 'Deloitte',
    date: 'Jun 2026',
    summary: 'Focused on analytics workflows, KPI reporting, and practical use of data in business decision-making.',
    badges: ['Data Analytics', 'Cloud', 'KPI Dashboards'],
    link: 'https://drive.google.com/file/d/1qK2K4hrnhtqysoHf36QkwZ4Fo1HFfoBK/view?usp=drive_link'
  },
  {
    title: 'ServiceNow Agentic AI & ATF',
    issuer: 'ServiceNow / AICTE',
    date: 'Jul 2026',
    summary: 'Explored automation, agentic workflows, and test automation practices in enterprise-oriented systems.',
    badges: ['ServiceNow Admin', 'Agentic AI', 'Automated Testing'],
    link: 'https://drive.google.com/file/d/1qK2K4hrnhtqysoHf36QkwZ4Fo1HFfoBK/view?usp=drive_link'
  },
  {
    title: 'Quantum Computing Fundamentals',
    issuer: 'CSC India / APSCHE',
    date: 'Jul 2026',
    summary: 'Covered foundational quantum concepts and their computational relevance in emerging technology research.',
    badges: ['Quantum Algorithms', 'Computational Physics'],
    link: 'https://drive.google.com/file/d/1qK2K4hrnhtqysoHf36QkwZ4Fo1HFfoBK/view?usp=drive_link'
  }
]

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCert = certs[activeIndex]
  const mainDrive = 'https://drive.google.com/file/d/1qK2K4hrnhtqysoHf36QkwZ4Fo1HFfoBK/view?usp=drive_link'

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-display font-bold">MY <span className="text-cyan-400">CERTIFICATIONS</span></h2>
            <p className="mt-3 max-w-2xl text-slate-300">Credentials and learning milestones aligned with my analytics, software engineering, and emerging technology focus.</p>
          </div>
          <a href={mainDrive} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300">
            View All Credentials
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <motion.div
            key={activeCert.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-6"
          >
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-400">Featured credential</div>
            <h3 className="mt-3 text-2xl font-semibold text-slate-100">{activeCert.title}</h3>
            <div className="mt-2 text-sm text-cyan-300">{activeCert.issuer}</div>
            <div className="mt-2 text-sm text-slate-400">{activeCert.date}</div>
            <p className="mt-4 leading-7 text-slate-300">{activeCert.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeCert.badges.map((badge) => (
                <span key={badge} className="rounded-full border border-cyan-400/20 px-3 py-1 text-sm text-cyan-300">{badge}</span>
              ))}
            </div>
            <a href={activeCert.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-md border border-cyan-400 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black">
              View Credential
            </a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {certs.map((cert, index) => {
              const isActive = activeIndex === index
              return (
                <motion.button
                  key={cert.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`rounded-2xl border p-4 text-left transition ${isActive ? 'border-cyan-400/50 bg-slate-900/90' : 'border-slate-800 bg-slate-900/50'}`}
                >
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">{cert.issuer}</div>
                  <div className="mt-2 font-semibold text-slate-100">{cert.title}</div>
                  <div className="mt-3 text-sm text-slate-400">{cert.date}</div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
