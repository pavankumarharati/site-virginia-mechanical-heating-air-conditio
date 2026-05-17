"use client"

import { useEffect, useRef } from "react"
import { Phone, ArrowRight, ShieldCheck, Star, Clock } from "lucide-react"
import { BUSINESS, TRUST_BADGES } from "@/lib/config"
import { gsap } from "@/lib/gsap-init"

const EASE = "power3.out"

const STATS = [
  { value: 45,   suffix: " min", label: "Avg. Response",     sub: "Emergency calls"              },
  { value: 16,   suffix: "+",    label: "Years Serving",     sub: `Since ${BUSINESS.since}`      },
  { value: 4800, suffix: "+",    label: "Jobs Completed",    sub: "Residential & commercial"     },
  { value: 100,  suffix: "%",    label: "Satisfaction",      sub: "Or we make it right"          },
]

// Particle canvas — color pulled from CSS var at runtime
function useParticles(ref: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    // Read particle color from CSS var set by theme
    const particleColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--brand-particle").trim() || "rgba(96,165,250,0.40)"

    let w = (canvas.width  = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r:  Math.random() * 1.6 + 0.4,
      o:  Math.random() * 0.5 + 0.15,
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x = (p.x + p.vx + w) % w
        p.y = (p.y + p.vy + h) % h
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.globalAlpha = p.o
        ctx.fill()
        ctx.globalAlpha = 1
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight }
    window.addEventListener("resize", resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize) }
  }, [ref])
}

function StatCard({ stat, delay }: { stat: typeof STATS[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const numRef  = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const num  = numRef.current
    if (!card || !num) return

    gsap.from(card, { opacity: 0, y: 36, scale: 0.88, duration: 0.7, ease: EASE, delay })

    const obj = { n: 0 }
    gsap.to(obj, {
      n: stat.value,
      duration: 1.8,
      ease: "power2.out",
      delay: delay + 0.2,
      onUpdate() { num.textContent = Math.round(obj.n).toLocaleString() + stat.suffix },
    })
  }, [delay, stat.suffix, stat.value])

  return (
    <div
      ref={cardRef}
      className="tilt-card glass-card rounded-2xl p-6 group cursor-default"
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px -8px rgba(0,0,0,0.4)" }}
    >
      <div
        className="font-display font-900 text-3xl mb-1 tabular-nums text-gradient-animate"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <span ref={numRef}>0{stat.suffix}</span>
      </div>
      <div className="font-body font-700 text-white text-sm">{stat.label}</div>
      <div className="font-body text-white/40 text-xs mt-0.5">{stat.sub}</div>
    </div>
  )
}

export default function Hero() {
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const badgeRef    = useRef<HTMLDivElement>(null)
  const labelRef    = useRef<HTMLDivElement>(null)
  const h1Ref       = useRef<HTMLHeadingElement>(null)
  const paraRef     = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const trustRef    = useRef<HTMLDivElement>(null)
  const badgesRef   = useRef<HTMLDivElement>(null)
  const grainRef    = useRef<HTMLDivElement>(null)

  useParticles(canvasRef)

  // Master entrance timeline
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: EASE } })
    tl
      .from(labelRef.current,  { opacity: 0, y: -20, duration: 0.5 })
      .from(badgeRef.current,  { opacity: 0, y: -14, duration: 0.5 }, "-=0.2")
      .from(h1Ref.current,     { opacity: 0, y: 60, duration: 0.85, filter: "blur(8px)" }, "-=0.3")
      .from(paraRef.current,   { opacity: 0, y: 30, duration: 0.65 }, "-=0.5")
      .from(ctaRef.current,    { opacity: 0, y: 24, duration: 0.55 }, "-=0.4")
      .from(trustRef.current,  { opacity: 0, duration: 0.5 }, "-=0.3")
      .from(badgesRef.current, { opacity: 0, y: 16, duration: 0.5 }, "-=0.25")
  }, [])

  return (
    <section
      className="grain relative min-h-screen flex items-center overflow-hidden"
      style={{ background: `linear-gradient(160deg, var(--brand-bg) 0%, var(--brand-bg-mid) 60%, var(--brand-bg) 100%)` }}
    >
      {/* Particle field */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />

      {/* Aurora blobs */}
      <div className="aurora-blob-1 absolute -top-32 -right-32 w-[800px] h-[800px] rounded-full pointer-events-none" aria-hidden />
      <div className="aurora-blob-2 absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full pointer-events-none" aria-hidden />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--brand-grid) 1px,transparent 1px),linear-gradient(90deg,var(--brand-grid) 1px,transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — copy */}
          <div>
            {/* Eyebrow label */}
            <div ref={labelRef} className="mb-4">
              <span
                className="text-[0.65rem] font-body font-700 tracking-[0.3em] uppercase"
                style={{ color: "var(--brand-accent-light)" }}
              >
                {BUSINESS.serviceAreas[0]} · Licensed & Insured
              </span>
            </div>

            {/* Emergency badge */}
            <div ref={badgeRef} className="accent-badge mb-7 w-fit">
              <span className="accent-dot" />
              24/7 Emergency Service Available
            </div>

            {/* Giant headline */}
            <h1
              ref={h1Ref}
              className="font-display font-900 text-white leading-[1.0] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {BUSINESS.name.split(" ").slice(0, 2).join(" ")}<br />
              <span className="text-gradient-animate">{BUSINESS.tagline}</span>
            </h1>

            <p
              ref={paraRef}
              className="font-body text-white/60 leading-relaxed mb-9"
              style={{ fontSize: "1.125rem", maxWidth: "36rem" }}
            >
              Licensed, insured, and on-call 24/7. We fix AC, heating, and plumbing
              the same day — or your service call is free. Trusted by{" "}
              <span className="text-white font-700">{BUSINESS.review_count}+ homeowners</span> in {BUSINESS.serviceAreas[0]}.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href={BUSINESS.phoneHref} className="btn-primary">
                <Phone className="w-5 h-5 shrink-0" />
                Call {BUSINESS.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/45 text-white font-body font-600 px-8 py-4 rounded-full text-base transition-all duration-250 hover:bg-white/6 cursor-pointer group"
              >
                Free Estimate
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust row */}
            <div ref={trustRef} className="flex flex-wrap gap-5">
              <div className="flex items-center gap-1.5 text-white/55 text-sm font-body">
                <Star className="w-4 h-4 fill-current" style={{ color: "var(--brand-accent)" }} />
                <span className="text-white font-700">{BUSINESS.google_rating}</span> Google Rating
                <span className="text-white/30 ml-1">({BUSINESS.review_count})</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/55 text-sm font-body">
                <ShieldCheck className="w-4 h-4" style={{ color: "var(--brand-accent-light)" }} />
                <span className="text-white font-700">Licensed</span> & Insured
              </div>
              <div className="flex items-center gap-1.5 text-white/55 text-sm font-body">
                <Clock className="w-4 h-4" style={{ color: "var(--brand-accent-light)" }} />
                Since <span className="text-white font-700 ml-1">{BUSINESS.since}</span>
              </div>
            </div>
          </div>

          {/* RIGHT — stat cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} delay={0.4 + i * 0.1} />
            ))}
          </div>
        </div>

        {/* Trust badges strip */}
        <div
          ref={badgesRef}
          className="mt-16 pt-8 border-t border-white/8 flex flex-wrap gap-3 justify-center lg:justify-start"
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-white/45 text-xs font-body font-600 border border-white/10 px-4 py-2 rounded-full hover:border-white/30 hover:text-white/70 transition-all duration-200 cursor-default"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
