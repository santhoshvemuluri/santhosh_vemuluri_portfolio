import React from 'react'

export default function Education(){
  return (
    <section id="education" className="py-20 relative">
      <div className="container">
        <div className="relative">
          <div className="absolute inset-0 flex items-start">
            <div className="text-8xl font-extrabold text-slate-800/30 pointer-events-none select-none">2022 - 2028</div>
          </div>
          <h2 className="text-3xl font-display font-bold relative z-10">EDUCATION</h2>
        </div>
        <div className="mt-8 space-y-6 relative z-10">
          <div className="card border-l-2 border-cyan-400">
            <strong>Bachelor of Technology (B.Tech)</strong>
            <div className="muted">Pragati Engineering College, Surampalem — Expected July 2026</div>
            <div className="mt-2">CGPA: 8.31</div>
          </div>
          <div className="card border-l-2 border-cyan-400">
            <strong>High School Diploma (Class XII)</strong>
            <div className="muted">Narayana Junior College, Kakinada — March 2022</div>
            <div className="mt-2">CGPA: 9.34</div>
          </div>
          <div className="card border-l-2 border-cyan-400">
            <strong>Secondary School Certificate (Class X)</strong>
            <div className="muted">ZPP High School, Indrapalem — April 2020</div>
            <div className="mt-2">GPA: 9.8</div>
          </div>
        </div>
      </div>
    </section>
  )
}
