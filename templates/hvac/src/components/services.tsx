"use client"

import { useEffect, useRef } from "react"
import {
  Thermometer, Flame, Droplets, Zap, ShieldCheck, Wrench,
  Star, Heart, Scissors, Sparkles, Clock,
} from "lucide-react"
import { SERVICES } from "@/lib/config"
import { gsap, ScrollTrigger } from "@/lib/gsap-init"

const ICON_MAP: Record<string, React.ReactNode> = {
  thermometer:    <Thermometer className="w-6 h-6" />,
  flame:          <Flame className="w-6 h-6" />,
  droplets:       <Droplets className="w-6 h-6" />,
  zap:            <Zap className="w-6 h-6" />,
  "shield-check": <ShieldCheck className="w-6 h-6" />,
  wrench:         <Wrench className="w-6 h-6" />,
  star:           <Star className="w-6 h-6" />,
  heart:          <Heart className="w-6 h-6" />,
  scissors:       <Scissors className="w-6 h-6" />,
  sparkles:       <Sparkles className="w-6 h-6" />,
  clock:          <Clock className="w-6 h-6" />,
}

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0, y: 48, duration: 0.75, ease: "power3.out",
      scrollTrigger: { trigger: headingRef.current, start: "top 87%", once: true },
    })

    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".service-card")
    if (cards?.length) {
      gsap.from(cards, {
        opacity: 0, y: 60, scale: 0.9, stagger: 0.07, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
      })
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <section
      id="services"
      className="relative py-20 px-5 overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--brand-bg) 0%, color-mix(in srgb, var(--brand-bg) 85%, #000) 100%)" }}
    >
      {/* Subtle accent glow behind heading */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center top, color-mix(in srgb, var(--brand-accent) 12%, transparent) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <span
            className="text-xs font-body font-700 tracking-[0.35em] uppercase mb-4 block"
            style={{ color: "var(--brand-accent)" }}
          >
            What We Do
          </span>
          <h2
            className="font-display font-900 text-white mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Services That{" "}
            <span className="text-gradient">Solve Problems</span>
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto leading-relaxed text-lg">
            Full-service HVAC and plumbing — fast, honest, and done right the first time.
          </p>
          <div className="accent-rule mx-auto" />
        </div>

        <div ref={gridRef} className="flex flex-wrap justify-center gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="service-card group relative rounded-2xl p-7 cursor-default transition-all duration-300 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              style={{
                background: service.urgent
                  ? `linear-gradient(135deg, color-mix(in srgb, var(--brand-accent) 18%, transparent), color-mix(in srgb, var(--brand-accent) 8%, transparent))`
                  : "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: service.urgent
                  ? "1px solid color-mix(in srgb, var(--brand-accent) 45%, transparent)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: service.urgent
                  ? "0 0 40px -8px color-mix(in srgb, var(--brand-accent) 25%, transparent)"
                  : "0 4px 24px -8px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                if (!service.urgent) {
                  el.style.background = "rgba(255,255,255,0.07)"
                  el.style.border = "1px solid rgba(255,255,255,0.16)"
                  el.style.transform = "translateY(-4px)"
                  el.style.boxShadow = `0 16px 48px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.12)`
                }
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                if (!service.urgent) {
                  el.style.background = "rgba(255,255,255,0.04)"
                  el.style.border = "1px solid rgba(255,255,255,0.08)"
                  el.style.transform = ""
                  el.style.boxShadow = "0 4px 24px -8px rgba(0,0,0,0.4)"
                }
              }}
            >
              {service.urgent && (
                <div
                  className="absolute top-4 right-4 text-white text-[0.6rem] font-700 px-2.5 py-1 rounded-full tracking-wider"
                  style={{ background: "var(--brand-accent)" }}
                >
                  24/7
                </div>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{
                  background: "color-mix(in srgb, var(--brand-accent) 15%, transparent)",
                  color: "var(--brand-accent-light)",
                  border: "1px solid color-mix(in srgb, var(--brand-accent) 25%, transparent)",
                }}
              >
                {ICON_MAP[service.icon] ?? <Wrench className="w-6 h-6" />}
              </div>

              <h3
                className="font-display font-700 text-xl mb-2 text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-white/55">
                {service.desc}
              </p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-7 right-7 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, var(--brand-accent), transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
