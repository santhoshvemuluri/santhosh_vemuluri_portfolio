import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CursorGlow from './components/CursorGlow'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App(){
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'projects', 'certifications', 'contact']
    const handleScroll = () => {
      const scroll = window.scrollY + 160
      let current = 'hero'
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scroll) current = id
      })
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative">
      <CursorGlow />
      <Navbar active={activeSection} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="py-12 text-center relative z-10">
        <div className="container">© 2026 Santhosh Vemuluri</div>
      </footer>
    </div>
  )
}
