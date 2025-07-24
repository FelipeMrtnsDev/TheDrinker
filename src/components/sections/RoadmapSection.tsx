import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "../ui/badge";

export const RoadmapSection = () => {
    const roadmapPhases = [
        { period: "2024 Q4", location: "Campinas", users: "10K", color: "from-green-400 to-green-600" },
        { period: "2025 Q2", location: "Interior SP", users: "50K", color: "from-blue-400 to-blue-600" },
        { period: "2025 Q4", location: "Sudeste", users: "200K", color: "from-purple-400 to-purple-600" },
        { period: "2026", location: "Brasil", users: "1M+", color: "from-[#01dfb2] to-[#00c9a7]" },
    ];
    return(
        <section className="py-32 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#01dfb2]/10 via-transparent to-[#01dfb2]/10"></div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-20">
                    <Badge className="bg-[#01dfb2] text-white px-6 py-2 text-lg mb-6 rounded-full">Expansão Nacional</Badge>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "Anton, sans-serif" }}>ROADMAP DE CRESCIMENTO</h2>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Plano estratégico para dominar o mercado brasileiro</p>
                </motion.div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {roadmapPhases.map((phase, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} whileHover={{ scale: 1.05, y: -10 }} className="text-center group">
                                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className={`w-24 h-24 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-[#01dfb2]/50`}>
                                    <MapPin className="w-12 h-12 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#01dfb2] transition-colors">{phase.period}</h3>
                                <p className="text-[#01dfb2] text-xl font-bold mb-2">{phase.location}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="hidden md:block relative mt-8">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 via-purple-400 to-[#01dfb2]"
                      />
                    </div>
                </div>
            </div>
        </section>
    )
}