import { motion } from "framer-motion";
import { BarChart3, Globe, Heart, Rocket, Users } from "lucide-react";
import { Badge } from "../ui/badge";

export const FounderSection = () => {
    const skills = [
        { icon: Rocket, title: "Visão Estratégica", desc: "Experiência em transformação digital" },
        { icon: Globe, title: "Mercado Global", desc: "Conhecimento em expansão internacional" },
        { icon: BarChart3, title: "Growth Hacking", desc: "Especialista em crescimento acelerado" },
        { icon: Heart, title: "Paixão pelo Produto", desc: "Dedicação total ao sucesso da empresa" },
    ];
    return(
        <section id="time" className="py-32 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-20">
                    <Badge className="bg-[#01dfb2] text-white px-6 py-2 text-lg mb-6 rounded-full">Liderança Visionária</Badge>
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6" style={{ fontFamily: "Anton, sans-serif" }}>NOSSO FUNDADOR</h2>
                </motion.div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="text-center lg:text-left">
                            <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="relative inline-block">
                                <div className="w-80 h-80 bg-gradient-to-br from-[#01dfb2] to-[#00c9a7] rounded-3xl mx-auto lg:mx-0 mb-8 flex items-center justify-center shadow-2xl">
                                    <div className="text-center">
                                        <motion.div whileHover={{ scale: 1.1 }} className="w-40 h-40 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                                            <Users className="w-20 h-20 text-[#01dfb2]" />
                                        </motion.div>
                                        <p className="text-white text-xl font-bold">Daniel Justino</p>
                                        <p className="text-white/80">CEO & Founder</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="space-y-8">
                            <div>
                                <h3 className="text-4xl font-black text-gray-900 mb-6" style={{ fontFamily: "Anton, sans-serif" }}>DANIEL JUSTINO</h3>
                                <p className="text-2xl text-gray-700 leading-relaxed mb-6">Fundador e desenvolvedor do The Drinker. <span className="text-[#01dfb2] font-bold"> 7 anos de dedicação</span> para criar a solução mais escalável do setor de delivery de bebidas no Brasil.</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {skills.map((item, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#01dfb2]">
                                        <item.icon className="w-8 h-8 text-[#01dfb2] mb-3" />
                                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}