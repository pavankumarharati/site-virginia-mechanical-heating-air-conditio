"use client"

import { useEffect, useRef } from "react"
import { Clock, DollarSign, Award, ThumbsUp, Phone, Truck } from "lucide-react"
import { BUSINESS } from "@/lib/config"
import { gsap, ScrollTrigger } from "@/lib/gsap-init"

const reasons = [
  { icon: <Clock className="w-6 h-6" />,       title: "Same-Day Service",        desc: "Call before noon and we're there today. 45-minute average emergency response." },
  { icon: <DollarSign className="w-6 h-6" />,  title: "Upfront Pricing",         desc: "No surprises. We quote before we work, and we stick to it. Always." },
  { icon: <Award className="w-6 h-6" />,       title: "NATE Certified Techs",    desc: "Our technicians hold the highest HVAC certification available. Real expertise on every job." },
  { icon: <ThumbsUp className="w-6 h-6" />,    title: "Satisfaction Guarantee",  desc: "If you're not 100% satisfied, we come back and make it right. No questions." },
  { icon: <Phone className="w-6 h-6" />,       title: "Real Humans Answer",      desc: "No phone trees. A real dispatcher picks up — day, night, weekends, holidays." },
  { icon: <Truck className="w-6 h-6" />,       title: "Stocked Service Trucks",  desc: "90% of repairs done on the first visit. We carry the parts so you're not waiting." },
]

const bigStats = [
  { raw: parseFloat(BUSINESS.google_rating), suffix: "★", label: "Google Rating",  decimals: 1 },
  { raw: 4800,                               suffix: "+", label: "Jobs Done",       decimals: 0 },
  { raw: 16,                                 suffix: "+", label: "Yrs Experience",  decimals: 0 },
]

export default function WhyUs() {
  const leftRef   = useRef<HTMLDivElement>(null)
  const statsRef  = useRef<HTMLDivElement>(null)
  const reasonsRef= useRef<HTMLDivElement>(null)
  const numRefs   = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    // Left column slide in
    gsap.from(leftRef.current, {
      opacity: 0, x: -50, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: leftRef.current, start: "top 80%", once: true },
    })

    // Counter animations for big stats
    bigStats.forEach((s, i) => {
      const el = numRefs.current[i]
      if (!el) return
      const obj = { n: 0 }
      gsap.to(obj, {
        n: s.raw,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 80%", once: true },
        onUpdate() {
          el.textContent = (s.decimals > 0 ? obj.n.toFixed(s.decimals) : Math.round(obj.n).toLocaleString()) + s.suffix
        },
      })
    })

    // Reason cards stagger
    const cards = reasonsRef.current?.querySelectorAll<HTMLElement>(".reason-card")
    if (cards?.length) {
      gsap.from(cards, {
        opacity: 0, y: 35, stagger: 0.07, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: reasonsRef.current, start: "top 80%", once: true },
      })
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <section id="why-us" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — headline + counters */}
          <div ref={leftRef}>
            <span className="text-[var(--color-orange-500)] text-xs font-body font-700 tracking-[0.35em] uppercase mb-3 block">
              Why Choose Us
            </span>
            <h2 className="font-display font-800 text-[var(--color-navy-900)] text-4xl md:text-5xl leading-tight mb-6">
              The {BUSINESS.since} Difference —<br />
              <span className="text-[var(--color-navy-700)]">Built on Trust</span>
            </h2>
            <p className="font-body text-[var(--color-slate-600)] leading-relaxed mb-10 max-w-md">
              Since {BUSINESS.since}, we've been the call neighbors make when something breaks.
              No upsells. No scare tactics. Just honest work.
            </p>

            {/* Animated big stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6 mb-10">
              {bigStats.map((s, i) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-900 text-3xl text-[var(--color-navy-700)] tabular-nums">
                    <span ref={(el) => { numRefs.current[i] = el }}>0{s.suffix}</span>
                  </div>
                  <div className="font-body text-xs text-[var(--color-slate-600)] mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-5 bg-[var(--color-slate-50)] rounded-2xl border border-[var(--color-slate-200)]">
              <div className="w-12 h-12 bg-[var(--color-orange-500)]/15 rounded-xl flex items-center justify-center text-[var(--color-orange-500)] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display font-700 text-[var(--color-navy-900)] text-sm">{BUSINESS.license}</div>
                <div className="font-body text-xs text-[var(--color-slate-600)] mt-0.5">Licensed by California State License Board · Fully Insured</div>
              </div>
            </div>
          </div>

          {/* Right — reason cards */}
          <div ref={reasonsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="reason-card tilt-card p-5 rounded-xl border border-[var(--color-slate-200)] hover:border-[var(--color-navy-700)]/30 hover:shadow-[var(--shadow-card)] transition-colors duration-300 cursor-default"
              >
                <div className="w-10 h-10 bg-[var(--color-navy-700)]/10 rounded-lg flex items-center justify-center text-[var(--color-navy-700)] mb-4">
                  {r.icon}
                </div>
                <h3 className="font-display font-700 text-[var(--color-navy-900)] text-base mb-2">{r.title}</h3>
                <p className="font-body text-[var(--color-slate-600)] text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
