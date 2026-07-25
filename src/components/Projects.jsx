import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function formatTitle(name) {
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    fetch('https://api.github.com/users/santhoshvemuluri/repos?sort=updated&per_page=12', {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch repositories')
        return res.json()
      })
      .then((data) => {
        const filtered = (Array.isArray(data) ? data : []).filter((repo) => !repo.fork)
        setRepos(filtered)
      })
      .catch(() => setRepos([]))
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-display font-bold">SELECTED <span className="text-cyan-400 italic">PROJECT</span></h2>
        {loading ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-48 rounded-xl border border-slate-800 bg-slate-900/60 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <motion.article
                key={repo.id}
                whileHover={{ y: -6 }}
                className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden flex flex-col"
              >
                <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-400 px-6 text-center">
                  {formatTitle(repo.name)}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-100">{formatTitle(repo.name)}</h3>
                  <p className="mt-3 text-slate-300 flex-1 text-sm leading-6">{repo.description || 'Public repository showcasing recent work in software engineering and data-driven development.'}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {repo.language ? (
                      <span className="text-xs px-2 py-1 rounded-full border border-cyan-400/20 text-cyan-300">{repo.language}</span>
                    ) : null}
                    <span className="text-xs px-2 py-1 rounded-full border border-slate-700 text-slate-300 inline-flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      {repo.stargazers_count || 0}
                    </span>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-md border border-cyan-400 px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                  >
                    View Code
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
