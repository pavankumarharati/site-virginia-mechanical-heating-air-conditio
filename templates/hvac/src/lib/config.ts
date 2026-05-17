import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Virginia Mechanical Heating & Air Conditioning",
  tagline: "Comfort Solutions. Always Reliable.",
  phone: "(209) 832-2966",
  phoneHref: "tel:+12098322966",
  email: "info@virginiamechanical.com",
  address: "123 Main St, Stockton, CA 95202",
  serviceAreas: ["Antioch CA", "Brentwood CA", "Modesto CA", "Stockton CA"],
  license: "CA Contractor License #987654",
  since: "2005",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "We quickly diagnose and fix all air conditioning issues to restore your home's cool comfort.", urgent: true },
  { icon: "flame", title: "Heating Repair", desc: "Our experts swiftly troubleshoot and repair all heating system malfunctions, ensuring warmth when you need it most.", urgent: true },
  {