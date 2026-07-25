import React, { useEffect, useState } from 'react'
import projectsData from '../src_projects.json'
import Certifications from './Certifications'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
]

function Nav({ active }) {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="brand" href="#hero">Santhosh Vemuluri</a>
        <nav className="main-nav">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="hero-badge">Hello !!!</span>
          <h1 className="hero-title">santhosh vemuluri</h1>
          <p className="hero-subtitle">Aspiring Software Engineer</p>
          <p className="lead">B.Tech student with a passion for building scalable digital solutions, data-driven dashboards, and secure full-stack applications.</p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn outline" href="https://drive.google.com/file/d/1qK2K4hrnhtqysoHf36QkwZ4Fo1HFfoBK/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
        <div className="hero-photo">
          <img src="https://santhoshvemuluriportfolio.lovable.app/assets/santhosh-bio-tIr1L6Ss.jpeg" alt="Santhosh Vemuluri" />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container grid-2">
        <div>
          <h2>About Me</h2>
          <p>Aspiring Data Analyst and Full-Stack Developer with hands-on internship experience at Deloitte. Certified in Data Analytics, Cloud Computing, and AI. I work with large datasets, build dashboards, and develop secure web applications.</p>
          <h3>Skills</h3>
          <ul className="skills">
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
            <li>React</li>
            <li>Embedded Systems</li>
            <li>Data Analytics</li>
          </ul>
        </div>
        <div>
          <img src="https://drive.google.com/uc?export=view&id=1gERgQ-YkC5_nze6_6koml0-_eV6VlqfU" alt="Santhosh" className="about-photo" />
          <h3>Experience</h3>
          <div className="card">
            <strong>Deloitte — Data Analyst Intern</strong>
            <div className="muted">May 2026 — Jun 2026</div>
            <ul>
              <li>Extracted and processed large datasets (500k+ records).</li>
              <li>Built dashboards and visualizations to shorten stakeholder reporting.</li>
              <li>Monitored KPIs and identified efficiency improvements.</li>
            </ul>
          </div>
          <div className="card">
            <strong>CSC India / APSCHE — Quantum Computing Intern</strong>
            <div className="muted">May 2026 — Jul 2026</div>
            <p>Completed the student internship initiative focused on quantum computing fundamentals and computational applications.</p>
          </div>
          <div className="card">
            <strong>ServiceNow & AICTE — Virtual Internship Program</strong>
            <div className="muted">Jul 2026</div>
            <p>Trained in ServiceNow administration fundamentals, Agentic AI, and Automated Test Framework essentials.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <div className="card-grid">
          <div className="card">
            <strong>Pragati Engineering College</strong>
            <div className="muted">Bachelor of Technology (B.Tech) — Expected July 2028</div>
            <div>CGPA: 8.31</div>
          </div>
          <div className="card">
            <strong>Narayana Junior College</strong>
            <div className="muted">High School Diploma (Class XII)</div>
            <div>CGPA: 9.34</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [projects] = useState(() => {
    const uniqueProjects = new Map()
    projectsData.forEach(project => {
      if (!uniqueProjects.has(project.full_name)) {
        uniqueProjects.set(project.full_name, project)
      }
    })
    return [...uniqueProjects.values()]
  })

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid-3">
          {projects.map(p => (
            <div key={p.full_name} className="card project">
              {p.image && <img className="project-image" src={p.image} alt={p.name} />}
              <div className="project-body">
                <h4>
                  <a href={p.html_url} target="_blank" rel="noreferrer">{p.name}</a>
                </h4>
                <p>{p.description || 'No project description available yet.'}</p>
                <div className="project-meta">
                  <span>{p.language || 'Unknown'}</span>
                  {p.stargazers_count > 0 && <span>★ {p.stargazers_count}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <h2>Contact</h2>
          <p>Email: <a href="mailto:santhoshvemuluri9@gmail.com">santhoshvemuluri9@gmail.com</a></p>
          <p>Phone: +91 9182446518</p>
          <p>GitHub: <a href="https://github.com/santhoshvemuluri" target="_blank" rel="noreferrer">github.com/santhoshvemuluri</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/santhosh-vemuluri-17413a372" target="_blank" rel="noreferrer">linkedin.com/in/santhosh-vemuluri-17413a372</a></p>
        </div>
        <div className="contact-card card">
          <h3>Let's connect</h3>
          <p>Reach out for internship opportunities, collaboration, or freelance work.</p>
          <a className="btn primary" href="mailto:santhoshvemuluri9@gmail.com">Email me</a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'projects', 'certifications', 'contact']
    const handleScroll = () => {
      const scroll = window.scrollY + 160
      let current = 'hero'
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scroll) {
          current = id
        }
      })
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateMousePosition = event => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <div className="app-shell">
      <div className="background-animation">
        <span className="background-blob blob-1" />
        <span className="background-blob blob-2" />
        <span className="mouse-circle" />
      </div>
      <Nav active={activeSection} />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="site-footer"><div className="container">© 2026 Santhosh Vemuluri</div></footer>
    </div>
  )
}
