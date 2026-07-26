import React from 'react'

export default function Education(){
  return (
    <section id="education" className="px-6 py-20 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 flex items-start">
            <div className="hidden text-[clamp(3rem,8vw,5.5rem)] font-extrabold tracking-[0.18em] text-slate-800/30 md:block">2022 - 2028</div>
          </div>
          <h2 className="relative z-10 text-3xl font-display font-bold">EDUCATION</h2>
        </div>
        <div className="relative z-10 mt-8 space-y-6">
          <div className="card border-l-2 border-cyan-400">
            <strong>Bachelor of Technology (B.Tech)</strong>
            <div className="muted">Pragati Engineering College, Surampalem — Expected July 2028</div>
            <div className="mt-2">CGPA: 8.01</div>
          </div>
          <div className="card border-l-2 border-cyan-400">
            <strong>High School Diploma (Class XII)</strong>
            <div className="muted">Narayana Junior College, Kakinada — March 2024</div>
            <div className="mt-2">CGPA: 9.34</div>
          </div>
          <div className="card border-l-2 border-cyan-400">
            <strong>Secondary School Certificate (Class X)</strong>
            <div className="muted">ZPP High School, Indrapalem — April 2022</div>
            <div className="mt-2">GPA: 9.8</div>
          </div>
        </div>
      </div>
    </section>
  )
}
