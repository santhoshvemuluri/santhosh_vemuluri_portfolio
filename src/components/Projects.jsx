import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function formatTitle(name) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase())
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
    <section id="projects" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="flex h-full flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full border border-cyan-400/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">GitHub</span>
                    <span className="text-sm text-slate-400">{repo.stargazers_count || 0}★</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-cyan-300">{formatTitle(repo.name)}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{repo.description || 'Public repository showcasing recent work in software engineering and data-driven development.'}</p>
                </div>
                <div className="mt-5">
                  <div className="flex flex-wrap gap-2">
                    {repo.language ? (
                      <span className="rounded-full border border-cyan-400/20 px-2.5 py-1 text-xs text-cyan-300">{repo.language}</span>
                    ) : null}
                    <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300">Repo</span>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-md border border-cyan-400 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
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
