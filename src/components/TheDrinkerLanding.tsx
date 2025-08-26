import { useState } from "react"
import { Navigation } from "./sections/Navigation"
import { HeroSection } from "./sections/HeroSection"
import { StatsSection } from "./sections/StatsSection"
import { HowItWorksSection } from "./sections/HowItWorkSection"
import { DifferentiatorsSection } from "./sections/DifferentiantorsSection"
import { TestimonialsSection } from "./sections/TestimonialsSection"
import { RoadmapSection } from "./sections/RoadmapSection"
import { MarketOpportunitySection } from "./sections/MarketOpportunitySection"
import { FounderSection } from "./sections/FounderSection"
import { ContactFormSection } from "./sections/ContactForm"
import { Footer } from "./sections/Footer"

export default function TheDrinkerLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const testimonials = [
    { name: "João Silva", role: "Dono do Bar do João", text: "Aumentei 300% as vendas em 2 meses!", rating: 5 },
    { name: "Maria Santos", role: "Proprietária Distribuidora", text: "Melhor plataforma de delivery que já usei!", rating: 5 },
  ]

  const stats = [
    { number: 200, suffix: "+", label: "Usuários Ativos" },
    { number: 15, suffix: "+", label: "Estabelecimentos" },
    { number: 30, suffix: "+", label: "Motoboys" },
    { number: 98, suffix: "%", label: "Satisfação" },
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation 
        scrollToSection={scrollToSection} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <HeroSection scrollToSection={scrollToSection} />
      <StatsSection stats={stats} />
      <HowItWorksSection />
      <DifferentiatorsSection />
      <TestimonialsSection 
        testimonials={testimonials} 
        currentTestimonial={currentTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
      />
      <MarketOpportunitySection />
      <RoadmapSection />
      <FounderSection />
      <ContactFormSection />
      <Footer />
    </div>
  )
}