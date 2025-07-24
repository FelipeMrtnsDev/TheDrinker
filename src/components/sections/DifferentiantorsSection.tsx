import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Clock, DollarSign, Shield, Target, TrendingUp, Zap } from "lucide-react";

export const DifferentiatorsSection = () => {
    const features = [
        { icon: Clock, title: "Entrega em 15-35 min", desc: "Logística otimizada com IA para entregas ultra-rápidas", color: "from-green-400 to-green-600" },
        { icon: DollarSign, title: "Lucro Compartilhado", desc: "Modelo justo que beneficia todos os parceiros do ecossistema", color: "from-[#01dfb2] to-[#00c9a7]" },
        { icon: Target, title: "Publicidade Interna", desc: "Sistema de banners e promoções integrado ao app", color: "from-purple-400 to-purple-600" },
        { icon: TrendingUp, title: "Baixíssimo CAC", desc: "Custo de aquisição otimizado através de marketing viral", color: "from-blue-400 to-blue-600" },
        { icon: Shield, title: "Grandes Marcas", desc: "Parcerias estratégicas com principais fornecedores", color: "from-red-400 to-red-600" },
        { icon: Zap, title: "Experiência Premium", desc: "Interface moderna com UX/UI de classe mundial", color: "from-yellow-400 to-yellow-600" },
    ];
    return(
        <section id="diferenciais" className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-20">
                    <Badge className="bg-[#01dfb2] text-white px-6 py-2 text-lg mb-6 rounded-full">Tecnologia Avançada</Badge>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "Anton, sans-serif" }}>NOSSOS DIFERENCIAIS</h2>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Inovação e tecnologia para revolucionar o mercado de bebidas</p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((item, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 50, rotateX: -90 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} whileHover={{ scale: 1.05, rotateY: 10, boxShadow: "0 25px 50px rgba(1, 223, 178, 0.3)" }} className="group">
                            <Card className="h-full p-8 bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-500">
                                <CardContent className="pt-6">
                                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }} className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl`}>
                                        <item.icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#01dfb2] transition-colors">{item.title}</h3>
                                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}