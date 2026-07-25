import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Deloitte',
    role: 'Data Analytics & AI Intern',
    period: '2024 – Present',
    bullets: [
      'Built data-driven analytics workflows and KPI dashboards for business insight reporting.',
      'Explored cloud-based data pipelines and automation techniques to improve reporting quality.'
    ]
  },
  {
    company: 'CSC / APSCHE',
    role: 'Quantum Computing Research Contributor',
    period: '2023 – 2024',
    bullets: [
      'Collaborated on quantum computing fundamentals and applied computational problem-solving.',
      'Supported academic workshops focused on emerging technologies and research communication.'
    ]
  },
  {
    company: 'ServiceNow / AICTE',
    role: 'Agentic AI & ATF Program Participant',
    period: '2024',
    bullets: [
      'Worked with agentic AI concepts and automated testing workflows in a structured training environment.',
      'Strengthened understanding of enterprise-grade automation and intelligent process design.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-display font-bold">MY <span className="text-cyan-400">EXPERIENCE</span></h2>
        <p className="mt-3 text-slate-300">A mix of analytical, research, and emerging technology work that shaped my current focus.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6"
            >
              <div className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em]">{item.period}</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-100">{item.company}</h3>
              <div className="mt-2 text-cyan-300">{item.role}</div>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
