import { Calendar, Rocket } from "lucide-react"
import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"

export const ContactFormSection = () => {
    return(
        <section id="investir" className="py-24 md:py-32 bg-gradient-to-br from-[#01dfb2] via-[#00c9a7] to-[#00b399] relative overflow-hidden">
            <motion.div animate={{ x: [0, 100, 0], y: [0, -50, 0] }} transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: "Anton, sans-serif" }}>AGENDE UMA REUNIÃO</h2>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">Vamos conversar sobre como você pode fazer parte dessa revolução</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <Card className="p-6 md:p-12 bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
                            <CardContent className="pt-6">
                                <form className="space-y-6 md:space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <motion.div whileHover={{ scale: 1.02 }}>
                                            <Input placeholder="Seu nome completo" className="h-14 text-lg bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30" />
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.02 }}>
                                            <Input type="email" placeholder="Seu melhor e-mail" className="h-14 text-lg bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30" />
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.02 }}>
                                            <Input placeholder="WhatsApp para contato" className="h-14 text-lg bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30" />
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.02 }}>
                                            <Input placeholder="Valor estimado de interesse" className="h-14 text-lg bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30" />
                                        </motion.div>
                                    </div>
                                    <motion.div whileHover={{ scale: 1.02 }}>
                                        <Textarea placeholder="Conte-nos mais sobre seu interesse e experiência como investidor" className="min-h-[150px] text-lg bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 resize-none" />
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-center flex justify-center">
                                        <Button size="lg" className="bg-white text-[#01dfb2] hover:bg-gray-100 font-bold w-full md:w-auto px-8 py-6 text-lg md:text-xl rounded-full shadow-2xl flex items-center justify-center">
                                            <Calendar className="hidden md:inline-block md:mr-3 w-6 h-6 flex-shrink-0" />
                                            <span className="whitespace-nowrap">Agendar Reunião Agora</span>
                                            <Rocket className="hidden md:inline-block md:ml-3 w-6 h-6 flex-shrink-0" />
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}