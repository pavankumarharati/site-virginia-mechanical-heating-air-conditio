import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Virginia Mechanical Heating & Air Conditioning",
  tagline: "Your Trusted Partner for HVAC Excellence in Tracy & Stockton, CA",
  phone: "(209) 832-2966",
  phoneHref: "tel:+12098322966",
  email: "info@virginiamechanical.com",
  address: "Serving Tracy, Stockton, and surrounding areas",
  serviceAreas: ["Tracy", "Stockton", "Mountain House", "Lathrop", "Manteca", "Ripon", "Lodi"],
  license: "CA C20, C36, C43, C46, C53, C54, C61/D21",
  since: "1990",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair & Installation", desc: "Expert air conditioning services to keep your home cool and comfortable all summer long.", urgent: true },
  { icon: "flame", title: "Heating Repair & Installation", desc: "Reliable heating solutions, from furnace repair to new system installations, for a warm winter.", urgent: true },
  { icon: "wrench", title: "HVAC Maintenance", desc: "Preventative maintenance plans to extend the life of your system and ensure peak performance.", urgent: false },
  { icon: "droplets", title: "Indoor Air Quality", desc: "Solutions for cleaner, healthier indoor air, including purifiers, humidifiers, and ventilation.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah J.", location: "Tracy, CA", text: "Virginia Mechanical was prompt and professional. They fixed my AC quickly and the price was fair. Highly recommend!", rating: 5 },
  { name: "Mark T.", location: "Stockton, CA", text: "Our furnace broke down in winter, and Virginia Mechanical came out the same day. Excellent service and very knowledgeable technicians.", rating: 5 },
  { name: "Emily R.", location: "Mountain House, CA", text: "We had a new AC unit installed, and the team was fantastic from start to finish. Clean, efficient, and great communication.", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "Licensed & Insured", "Same-Day Service", "5-Star Rated", "24/7 Emergency"
]