import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  { title: 'Core Programming', items: ['Java', 'Python', 'SQL', 'C/C++'] },
  { title: 'Web & Product', items: ['React', 'Tailwind CSS', 'Vite', 'REST APIs'] },
  { title: 'Data & Analytics', items: ['Power BI', 'Excel', 'Dashboards', 'KPI Reporting'] },
  { title: 'Emerging Tech', items: ['ServiceNow', 'Agentic AI', 'Automation', 'Embedded Systems'] }
]

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="relative mb-8">
          <h2 className="text-3xl font-display font-bold"><span className="text-cyan-400">MY</span> BIOGRAPHY</h2>
          <div className="pointer-events-none absolute right-0 top-0 hidden text-[clamp(2.4rem,5vw,3.6rem)] font-black tracking-[0.25em] text-slate-800/20 md:block">PORTFOLIO 2025</div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <motion.div className="card motion-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <img src="/assets/drive/side_image.jpg" alt="portrait" className="w-full rounded-lg object-cover grayscale" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-slate-300 leading-7">
              I’m a Computer Science and Engineering student focused on building scalable software, thoughtful data products, and polished user experiences. My interests span full-stack development, analytics, automation, and emerging tools like AI-assisted workflows.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-slate-100">Skills & Interests</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
                >
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">{group.title}</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-cyan-400/10 bg-slate-900/60 px-3 py-1 text-sm text-slate-300">{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
