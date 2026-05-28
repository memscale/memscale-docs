import React, { useEffect, useRef } from 'react'

// Docs-only hero. Deliberately calmer than memscale.id:
// the particle canvas lives ONLY here and never behind article bodies.
// Animation is disabled under prefers-reduced-motion and on small screens.
export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const smallScreen = window.matchMedia('(max-width: 640px)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles = []
    let raf = 0

    const MINT = '0, 224, 184' // #00E0B8

    function resize() {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    function seed() {
      // density scales with area; capped and skipped on tiny screens
      const base = smallScreen ? 0 : Math.min(70, Math.floor((width * height) / 14000))
      particles = Array.from({ length: base }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    function drawFrame(animate) {
      ctx.clearRect(0, 0, width, height)

      // connecting lines (constellation)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = dx * dx + dy * dy
          if (dist < 120 * 120) {
            const a = (1 - dist / (120 * 120)) * 0.18
            ctx.strokeStyle = `rgba(${MINT}, ${a})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      // particle dots
      for (const p of particles) {
        ctx.fillStyle = `rgba(${MINT}, 0.7)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()

        if (animate) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        }
      }

      if (animate) raf = requestAnimationFrame(() => drawFrame(true))
    }

    resize()
    if (reduceMotion || smallScreen) {
      drawFrame(false) // single static frame, no rAF
    } else {
      drawFrame(true)
    }

    let resizeTimer = 0
    function onResize() {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(resize, 150)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="ms-hero" aria-label="MemScale">
      <canvas ref={canvasRef} className="ms-hero__canvas" aria-hidden="true" />
      <div className="ms-hero__glow" aria-hidden="true" />
      <div className="ms-hero__inner">
        <p className="ms-hero__eyebrow">v1.2.0 · Intelligence Foundation</p>
        <h1 className="ms-hero__title">
          Memory Engineering<br />
          <span className="ms-hero__title-accent">for AI</span>
        </h1>
        <p className="ms-hero__subtitle">
          Train bigger models on the GPU you already have. A drop-in PyTorch
          memory optimizer — one call rewrites how your model uses VRAM, with
          no change to your training loop.
        </p>
        <div className="ms-hero__actions">
          <a className="ms-hero__btn ms-hero__btn--primary" href="/getting-started/quickstart">
            Quick Start
          </a>
          <a className="ms-hero__btn ms-hero__btn--ghost" href="/reference/overview">
            API Reference
          </a>
        </div>
        <p className="ms-hero__stat">
          <span className="ms-hero__stat-num">up to 76%</span> less peak VRAM ·
          <span className="ms-hero__stat-num"> ~59%</span> median across 25 RTX&nbsp;3090 configs
        </p>
      </div>
    </section>
  )
}
