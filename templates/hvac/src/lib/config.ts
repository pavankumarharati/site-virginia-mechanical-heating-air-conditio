import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Virginia Mechanical Heating & Air Conditioning",
  tagline: "Comfort, Quality, Always There",
  phone: "(209) 832-2966",
  phoneHref: "tel:+12098322966",
  email: "info@virginiamechanical.com",
  address: "7553 Carmelo Ave, Tracy, CA 95304, USA",
  serviceAreas: ["Tracy", "Mountain House", "Manteca", "Lathrop", "Stockton", "Modesto"],
  license: "CA C20-1000000",
  since: "2005",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
  theme: "ember",
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "We fix all makes and models of air conditioning units quickly and efficiently.", urgent: true },
  { icon: "flame", title: "Heating Services", desc: "Expert repair, maintenance, and installation for furnaces, heat pumps, and boilers.", urgent: false },
  { icon: "droplets", title: "Plumbing Solutions", desc: "From leaky faucets to water heater installation, our plumbers handle it all.", urgent: false },
  { icon: "zap", title: "Emergency Service", desc: "24/7 rapid response for urgent heating and cooling breakdowns.", urgent: true },
  { icon: "shield-check", title: "Preventative Maintenance", desc: "Regular tune-ups extend system life and prevent costly future repairs.", urgent: false },
  { icon: "wrench", title: "System Installation", desc: "Professional installation of new HVAC systems tailored to your home's needs.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah J.", location: "Tracy, CA", text: "Our AC went out in the middle of a heatwave. Virginia Mechanical responded so fast! The technician, Mark, was at our house within an hour and had it fixed before dinner. The price was fair, and he explained everything clearly. So grateful for their quick, professional service!", rating: 5 },
  { name: "David L.", location: "Mountain House, CA", text: "Had a new furnace installed by Virginia Mechanical last month. From the initial quote to the final installation, the team was fantastic. They were punctual, clean, and very knowledgeable. Our home is much warmer now, and our energy bills are already lower. Highly recommend them!", rating: 5 },
  { name: "Maria P.", location: "Manteca, CA", text: "I've used Virginia Mechanical for years for both AC and heating maintenance. They are always thorough, friendly, and honest. Last week, they caught a small issue with my water heater during a routine check, saving me from a much bigger problem down the line. Trustworthy and reliable!", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "Licensed & Insured"
]