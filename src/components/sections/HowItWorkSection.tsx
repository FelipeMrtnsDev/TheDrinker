import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Bike, Store, Users } from "lucide-react";

export const HowItWorksSection = () => {
    const ecosystem = [
        { icon: Users, title: "CLIENTE", description: "Encontra e compra bebida com frete rápido. Interface intuitiva, pagamento seguro e entrega expressa em minutos.", color: "from-blue-500 to-blue-600", delay: 0 },
        { icon: Store, title: "ESTABELECIMENTO", description: "Vende e é promovido dentro do app. Gestão completa de estoque, promoções e analytics em tempo real.", color: "from-[#01dfb2] to-[#00c9a7]", delay: 0.2 },
        { icon: Bike, title: "MOTOBOY", description: "Recebe pedidos na hora e lucra com entregas. Sistema de rotas otimizado e pagamento instantâneo.", color: "from-orange-500 to-orange-600", delay: 0.4 },
    ];
    return(
        <section id="como-funciona" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} className="absolute top-10 right-10 w-32 h-32 bg-[#01dfb2]/5 rounded-full" />
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-20">
                    <Badge className="bg-[#01dfb2] text-white px-6 py-2 text-lg mb-6 rounded-full">Ecossistema Completo</Badge>
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6" style={{ fontFamily: "Anton, sans-serif" }}>COMO FUNCIONA O APP</h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Um ecossistema revolucionário que beneficia todos os participantes da cadeia</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto mb-20">
                    {ecosystem.map((item, index) => (
                        // **CORREÇÃO APLICADA AQUI**
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 100, rotateY: -90 }} 
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }} 
                            transition={{ duration: 0.8, delay: item.delay }}
                            className="relative group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, rotateY: 5, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                            >
                                <Card className="h-full p-8 border-0 shadow-2xl bg-white relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    <CardContent className="pt-6 text-center relative z-10">
                                        <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }} className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl`}>
                                            <item.icon className="w-12 h-12 text-white" />
                                        </motion.div>
                                        <h3 className="text-3xl font-black text-gray-900 mb-6" style={{ fontFamily: "Anton, sans-serif" }}>{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}