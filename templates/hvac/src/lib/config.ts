import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Virginia Mechanical Heating & Air Conditioning",
  tagline: "Your Comfort, Our Priority, Always.",
  phone: "(209) 832-2966",
  phoneHref: "tel:+12098322966",
  email: "info@virginiamechanical.com",
  address: "Tracy, CA",
  serviceAreas: ["Tracy CA", "Stockton CA", "Modesto CA", "Livermore CA", "Manteca CA", "Lodi CA"],
  license: "CA C20 & C38",
  since: "1999",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
  theme: "ember",
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair & Installation", desc: "Expert repair and seamless installation to keep your home cool.", urgent: true },
  { icon: "flame", title: "Heating Repair & Installation", desc: "Reliable heating solutions for cozy winters, from repair to new systems.", urgent: true },
  { icon: "shield-check", title: "HVAC Maintenance", desc: "Preventative care to extend the life and efficiency of your HVAC system.", urgent: false },
  { icon: "wrench", title: "Commercial HVAC Services", desc: "Specialized HVAC solutions tailored for businesses of all sizes.", urgent: false },
  { icon: "zap", title: "Thermostat & Air Quality", desc: "Upgrade to smart thermostats and improve indoor air quality with advanced systems.", urgent: false },
  { icon: "heart", title: "HVAC Financing Options", desc: "Flexible financing plans available for both residential and commercial projects.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah J.", location: "Tracy, CA", text: "Virginia Mechanical saved us during a heatwave! Our AC went out on a Friday, and they had a technician out within hours. He was professional, explained the issue clearly, and had it fixed by dinner. The price was fair, and the peace of mind was priceless. Highly recommend their prompt and efficient service!", rating: 5 },
  { name: "Mark T.", location: "Stockton, CA", text: "We needed a new furnace, and Virginia Mechanical made the whole process incredibly easy. From the initial quote to the installation, their team was knowledgeable and courteous. They helped us choose the right system for our home and budget, and the installation was quick and clean. Our home has never been warmer!", rating: 5 },
  { name: "Emily R.", location: "Modesto, CA", text: "I've used Virginia Mechanical for years for my annual HVAC maintenance. They are always thorough, punctual, and friendly. Last year, they caught a small issue before it became a major problem, saving me a lot of money and hassle. Their commitment to customer satisfaction is truly outstanding.", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "Instant HVAC Quotes"
]