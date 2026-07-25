import React from 'react'

const cards = [
  {title:'Visual Connect', year:2024},
  {title:'Identity Portal', year:2024, badge:'SECURITY & AUTHENTICATION'},
  {title:'Earthquake Detector', year:2023, badge:'EMBEDDED SYSTEMS & IOT'},
  {title:'AI Ethics Research', year:2024}
]

export default function Projects(){
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-display font-bold">SELECTED <span className="text-cyan-400 italic">PROJECT</span></h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {cards.map(c=> (
            <div key={c.title} className="card flex items-start gap-4">
              <div className="w-24 h-24 bg-slate-800/40 rounded-md flex items-center justify-center text-sm">{c.year}</div>
              <div>
                <h3 className="text-xl font-semibold text-slate-200">{c.title}</h3>
                {c.badge && <div className="mt-2 text-xs inline-block px-2 py-1 rounded bg-slate-900/40 border border-slate-800">{c.badge}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
