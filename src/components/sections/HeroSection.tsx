import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "../ui/button"
import { ArrowDown, ArrowRight, DollarSign, Play, Rocket } from "lucide-react"
import { TypingText } from "@/components/ui/typingtext"

export const HeroSection = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* 1. Imagem de Fundo */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/fundo-hero.jpg')] bg-cover bg-center"
      />
      
      {/* 2. Overlay de Gradiente Verde */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01dfb2] via-[#00c9a7] to-[#00b399] opacity-90"></div>

      {/* Elementos flutuantes */}
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <motion.div animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }} transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />

      {/* 3. Conteúdo Principal */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="/logo-white.png" alt="The Drinker Logo" width={150} height={150} className="mx-auto mb-8" />
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "Anton, sans-serif" }}>
            <motion.span initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>THE DRINKER:</motion.span><br />
            <motion.span initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="text-white">A REVOLUÇÃO DA ENTREGA DE BEBIDAS</motion.span><br />
          </h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}>
          <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto font-light">
            <TypingText text="Marketplace que conecta marcas, bares, clientes e motoboys em segundos." delay={200} />
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.8 }} className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <motion.div className="rounded-full" whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-white text-[#01dfb2] hover:bg-gray-100 font-bold px-10 py-6 text-xl rounded-full border-4 border-white/20" onClick={() => scrollToSection("como-funciona")}>
              <Play className="mr-3 w-6 h-6" />Como Funciona<ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
          <motion.div className="rounded-full" whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-transparent border-4 border-white text-white hover:bg-white hover:text-[#01dfb2] font-bold px-10 py-6 text-xl rounded-full backdrop-blur-sm" onClick={() => scrollToSection("investir")}>
              <Rocket className="mr-3 w-6 h-6" />Quero Investir<DollarSign className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} className="absolute left-[47.9%] xl:-bottom-16 md:bottom-0 md:left-[49.3%] -translate-x-1/2 z-20">
          <ArrowDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </div>
    </section>
  )
}