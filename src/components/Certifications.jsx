import React from 'react'
import { motion } from 'framer-motion'

const certs = [
  {
    title: 'Deloitte Data Analytics & AI',
    issuer: 'Deloitte',
    date: 'Jun 2026',
    badges: ['Data Analytics', 'Cloud', 'KPI Dashboards'],
    link: 'https://drive.google.com/your-cert-1-link'
  },
  {
    title: 'ServiceNow Agentic AI & ATF',
    issuer: 'ServiceNow / AICTE',
    date: 'Jul 2026',
    badges: ['ServiceNow Admin', 'Agentic AI', 'Automated Testing'],
    link: 'https://drive.google.com/your-cert-2-link'
  },
  {
    title: 'Quantum Computing Fundamentals',
    issuer: 'CSC India / APSCHE',
    date: 'Jul 2026',
    badges: ['Quantum Algorithms', 'Computational Physics'],
    link: 'https://drive.google.com/your-cert-3-link'
  }
]

export default function Certifications() {
  const mainDrive = 'https://drive.google.com/your-main-folder-link'

  return (
    <section id="certifications" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-display font-bold">MY <span className="text-cyan-400">CERTIFICATIONS</span></h2>
        <p className="mt-3 text-slate-300">Verified credentials, technical achievements, and training proofs.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {certs.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/40 transition-all"
            >
              <h3 className="text-lg font-semibold text-slate-100">{cert.title}</h3>
              <div className="mt-2 text-sm text-cyan-400">{cert.issuer}</div>
              <div className="mt-2 text-sm text-slate-400">{cert.date}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cert.badges.map((badge) => (
                  <span key={badge} className="text-xs px-2 py-1 rounded-full border border-cyan-400/20 text-cyan-300">{badge}</span>
                ))}
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-md border border-cyan-400 px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                Verify Certificate
              </a>
            </motion.article>
          ))}
        </div>
        <div className="mt-8">
          <a
            href={mainDrive}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            View All Credentials on Google Drive
          </a>
        </div>
      </div>
    </section>
  )
}
