import React, { useEffect, useRef } from 'react'

// CursorGlow renders a full-screen radial spotlight that follows the mouse.
// Tunable constants below (feel free to adjust):
const RADIUS = 600 // px - size of the radial gradient
const OPACITY = 0.08 // inner color alpha
const OUTER_STOP = '80%' // where gradient becomes transparent
const LERP = 0.14 // smoothing factor (0..1) lower = smoother
const BLUR_PX = 28 // CSS blur px applied to the overlay for softness

export default function CursorGlow() {
  const ref = useRef(null)
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const current = useRef({ x: target.current.x, y: target.current.y })
  const rafRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // initial style
    el.style.position = 'fixed'
    el.style.inset = '0'
    el.style.zIndex = '0'
    el.style.pointerEvents = 'none'
    el.style.transition = 'opacity 220ms linear'
    el.style.opacity = '1'
    el.style.filter = `blur(${BLUR_PX}px)`

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    window.addEventListener('mousemove', onMove)

    const tick = () => {
      // lerp current toward target
      current.current.x += (target.current.x - current.current.x) * LERP
      current.current.y += (target.current.y - current.current.y) * LERP

      // update background radial gradient centered at current position
      const bg = `radial-gradient(${RADIUS}px at ${current.current.x}px ${current.current.y}px, rgba(0,240,255,${OPACITY}), transparent ${OUTER_STOP})`
      el.style.background = bg

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-0" />
  )
}

