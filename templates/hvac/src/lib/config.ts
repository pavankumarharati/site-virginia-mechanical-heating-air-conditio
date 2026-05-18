import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Virginia Mechanical Heating & Air Conditioning",
  tagline: "Comfort, Quality, Always There",
  phone: "(209) 832-2966",
  phoneHref: "tel:+12098322966",
  email: "info@virginiamechanical.com",
  address: "7553 Carmelo Ave, Tracy, CA 95304, USA",
  serviceAreas: ["Tracy", "Mountain House", "Manteca", "Lathrop", "Stockton", "Modesto"],
  license: "CA C20-101010",
  since: "2005",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
  theme: "ember",
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "Fast, reliable AC repair restores your cool comfort quickly.", urgent: true },
  { icon: "flame", title: "Heating Services", desc: "Expert heating repair and installation keeps your home warm all winter.", urgent: false },
  { icon: "droplets", title: "Plumbing Solutions", desc: "Comprehensive plumbing services for leaks, clogs, and new installations.", urgent: false },
  { icon: "zap", title: "Emergency Service", desc: "24/7 emergency HVAC and plumbing for urgent issues anytime.", urgent: true },
  { icon: "shield-check", title: "Maintenance Plans", desc: "Preventative maintenance extends system life and ensures peak performance.", urgent: false },
  { icon: "wrench", title: "System Installation", desc: "Professional installation of new HVAC systems for optimal efficiency.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah L.", location: "Tracy, CA", text: "Our AC went out in July, and Virginia Mechanical was a lifesaver! They arrived within hours, diagnosed the issue quickly, and had it fixed before the evening heat hit. The technician was incredibly professional and explained everything clearly. So grateful for their prompt service!", rating: 5 },
  { name: "Mark T.", location: "Mountain House, CA", text: "Had a new furnace installed by Virginia Mechanical last fall. The team was fantastic from start to finish. They helped us choose the right unit for our home and completed the installation efficiently and cleanly. Our energy bills have even gone down! Highly recommend their expertise.", rating: 5 },
  { name: "Jessica R.", location: "Manteca, CA", text: "We've used Virginia Mechanical for both our AC maintenance and a recent plumbing repair. Every experience has been excellent. Their technicians are always courteous, knowledgeable, and thorough. It's a relief to have a reliable company we can trust for all our home's needs.", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "Licensed & Insured"
]