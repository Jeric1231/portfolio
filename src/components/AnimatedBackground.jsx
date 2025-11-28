import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  // simple particle system (subtle, performant)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = innerWidth)
    let h = (canvas.height = innerHeight)
    const particles = Array.from({ length: Math.round((w * h) / 90000) }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.6 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -0.1 - Math.random() * 0.4,
      alpha: 0.05 + Math.random() * 0.12
    }))

    let raf = null
    function resize() {
      w = canvas.width = innerWidth
      h = canvas.height = innerHeight
    }
    function frame() {
      ctx.clearRect(0, 0, w, h)
      for (let p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -20) {
          p.y = h + 20
          p.x = Math.random() * w
        }
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }

    window.addEventListener('resize', resize)
    frame()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // mouse parallax -- set CSS variables that blobs use
  useEffect(() => {
    function onMove(e) {
      const px = (e.clientX / window.innerWidth - 0.5) * 2 // -1..1
      const py = (e.clientY / window.innerHeight - 0.5) * 2
      document.documentElement.style.setProperty('--parallax-x', `${px}`)
      document.documentElement.style.setProperty('--parallax-y', `${py}`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="animated-bg-layer pointer-events-none -z-30">
      {/* gradient + floating blobs animated via Framer Motion */}
      <motion.div
        className="bg-blob blob-a"
        animate={{ y: [0, -18, 0], x: [0, 28, 0], scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-blob blob-b"
        animate={{ y: [0, 22, 0], x: [0, -36, 0], scale: [1, 0.98, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-blob blob-c"
        animate={{ y: [0, -12, 0], x: [0, 18, 0], scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
      />
      <canvas ref={canvasRef} className="bg-particles" />
    </div>
  )
}