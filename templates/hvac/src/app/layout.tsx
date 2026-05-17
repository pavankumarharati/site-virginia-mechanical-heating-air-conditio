import type { Metadata } from "next"
import "./globals.css"
import { BUSINESS } from "@/lib/config"
import SmoothScroll from "@/components/smooth-scroll"

export const metadata: Metadata = {
  title: `${BUSINESS.name} | ${BUSINESS.address}`,
  description: `${BUSINESS.name} — Licensed HVAC & Plumbing serving ${BUSINESS.serviceAreas.join(", ")}. 24/7 emergency service. Call ${BUSINESS.phone}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = (BUSINESS as any).theme ?? "navy"
  return (
    <html lang="en">
      <body
        className="min-h-full flex flex-col antialiased"
        data-theme={theme}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
