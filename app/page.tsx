import { Reenie_Beanie } from "next/font/google"
import Hero from "@/components/hero"
import Notes from "@/components/notes"
import CTA from "@/components/cta"
import CustomCursor from "@/components/custom-cursor"

const reenieBeanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-reenie",
})

export default function Home() {
  return (
    <main className={`${reenieBeanie.variable} bg-notebook min-h-screen relative overflow-hidden cursor-none`}>
      <div className="page-header">
        <span>en-us</span>
        <span>11</span>
      </div>
      <CustomCursor />
      <div className="content-wrapper relative z-10 px-4 sm:px-6 lg:px-8 container mx-auto">
        <Hero />
        <Notes />
        <CTA />
      </div>
    </main>
  )
}

