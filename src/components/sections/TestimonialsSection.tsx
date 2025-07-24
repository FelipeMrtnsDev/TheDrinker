import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "../ui/button";

export const TestimonialsSection = ({ testimonials, currentTestimonial, setCurrentTestimonial }: {
  testimonials: { name: string; role: string; text: string; rating: number }[];
  currentTestimonial: number;
  setCurrentTestimonial: (index: number | ((prev: number) => number)) => void;
}) => {
  return (
    <section className="py-32 bg-[#01dfb2] relative overflow-hidden">
      <motion.div animate={{ x: [0, 100, 0] }} transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 -translate-y-48" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "Anton, sans-serif" }}>O QUE DIZEM NOSSOS PARCEIROS</h2>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={currentTestimonial} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="text-center">
              <Card className="p-12 bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
                        <Star className="w-8 h-8 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-2xl text-white mb-8 italic">"{testimonials[currentTestimonial].text}"</p>
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-white/80">{testimonials[currentTestimonial].role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center space-x-4 mt-8">
            <Button onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))} className="bg-white/20 hover:bg-white/30 text-white border-0"><ChevronLeft /></Button>
            <Button onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))} className="bg-white/20 hover:bg-white/30 text-white border-0"><ChevronRight /></Button>
          </div>
        </div>
      </div>
    </section>
  )
}