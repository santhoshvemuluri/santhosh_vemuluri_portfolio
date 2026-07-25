import React, { useEffect, useState } from 'react'
// small inline GitHub svg used below
import { motion } from 'framer-motion'

const initialProjects = [
  {
    id: 'identity',
    title: 'Secure Identity Portal',
    year: 2024,
    desc: 'Full-stack authentication portal built with user management, JWT tokens, and Bcrypt password hashing.',
    tags: ['Java','React','JWT','Bcrypt','Tailwind'],
  },
  {
    id: 'earthquake',
    title: 'Real-Time Earthquake Detector',
    year: 2023,
    desc: 'Embedded system using accelerometer sensors and microcontrollers for seismic activity early warning alerts.',
    tags: ['Embedded C','Sensors','Hardware Integration','IoT'],
  },
  {
    id: 'visual',
    title: 'Visual Connect',
    year: 2024,
    desc: 'Data visualization dashboard for real-time analytics and user behavior insights.',
    tags: ['React','Tailwind CSS','Data Analytics'],
  },
  {
    id: 'ai-ethics',
    title: 'AI Ethics & Agentic Workflows',
    year: 2024,
    desc: 'Research and implementation of agentic AI frameworks and automated test flows.',
    tags: ['Python','Agentic AI','Research'],
  }
]

export default function Projects(){
  const [projects, setProjects] = useState(initialProjects)

  useEffect(() => {
    // optional: fetch GitHub repos and merge basic info
    fetch('https://api.github.com/users/santhoshvemuluri/repos')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data) return
        // map a couple repos into projects if names match
        const repoMap = new Map(data.map(r => [r.name.toLowerCase(), r.html_url]))
        setProjects(prev => prev.map(p => ({...p, repo: repoMap.get(p.id) || repoMap.get(p.title.toLowerCase().split(' ').join('-'))})))
      }).catch(()=>{})
  }, [])

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-display font-bold">SELECTED <span className="text-cyan-400 italic">PROJECT</span></h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {projects.map(p => (
            <motion.article key={p.id} className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden flex flex-col" whileHover={{y:-6}}>
              <div className="h-48 overflow-hidden rounded-t-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-400">{p.title} — visual</div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-slate-200">{p.title} <span className="text-sm text-slate-400">• {p.year}</span></h3>
                <p className="mt-3 text-slate-300 flex-1">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-800/40 border border-slate-700 rounded-full">{t}</span>)}
                </div>
                <div className="mt-6 flex gap-3">
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-700 hover:border-cyan-400 transition text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-slate-200"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.911 1.23 3.221 0 4.61-2.805 5.625-5.475 5.92.429.369.81 1.096.81 2.215 0 1.6-.015 2.887-.015 3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    GitHub
                  </a>}
                  <a href="#" className="ml-auto px-4 py-2 rounded-md bg-cyan-400 text-black font-semibold">Live Demo</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
