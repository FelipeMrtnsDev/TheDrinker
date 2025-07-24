import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { AnimatedCounter } from "../ui/animatedcounter";
import { useState } from "react";

const TamSamSomInteractiveChart = () => {
    const [activeView, setActiveView] = useState("todas")
    const data = {
        tam: { label: "TAM", value: "R$ 200 BI", description: "Total Addressable Market - Mercado total de bebidas no Brasil", color: "from-[#01dfb2]/30 to-[#00c9a7]/30" },
        sam: { label: "SAM", value: "R$ 50 BI", description: "Serviceable Addressable Market - Mercado de delivery de bebidas", color: "from-[#01dfb2]/60 to-[#00c9a7]/60" },
        som: { label: "SOM", value: "R$ 2 BI", description: "Serviceable Obtainable Market - Nossa fatia realista do mercado", color: "from-[#01dfb2] to-[#00c9a7]" },
    };

    const getCircleClasses = (circleName: string) => {
        const baseClasses = "absolute top-1/2 left-1/2 rounded-full flex flex-col justify-center items-center text-white text-center p-5 transition-all duration-700 ease-out overflow-hidden bg-gradient-to-br";
        if (activeView === "todas") {
            const sizes = { tam: "w-full h-full", sam: "w-[70%] h-[70%]", som: "w-[40%] h-[40%]" };
            const zIndexes = { tam: "z-10", sam: "z-20", som: "z-30" };
            return `${baseClasses} ${sizes[circleName as keyof typeof sizes]} ${zIndexes[circleName as keyof typeof zIndexes]} opacity-100 transform -translate-x-1/2 -translate-y-1/2 scale-100 ${data[circleName as keyof typeof data].color}`;
        }
        if (activeView === circleName) {
            return `${baseClasses} w-full h-full z-50 opacity-100 transform -translate-x-1/2 -translate-y-1/2 scale-100 ${data[circleName as keyof typeof data].color}`;
        }
        return `${baseClasses} w-full h-full z-0 opacity-0 transform -translate-x-1/2 -translate-y-1/2 scale-0 ${data[circleName as keyof typeof data].color}`;
    };

    const getLabelClasses = (circleName: string) => {
        const baseClasses = "absolute left-1/2 transform -translate-x-1/2 text-white font-black text-shadow-lg z-40 pointer-events-none transition-opacity duration-300";
        const opacity = activeView === "todas" ? "opacity-100" : "opacity-0";
        switch (circleName) {
            case "tam": return `${baseClasses} top-4 text-2xl ${opacity}`;
            case "sam": return `${baseClasses} top-20 text-xl ${opacity}`;
            case "som": return `${baseClasses} top-1/2 -translate-y-1/2 text-2xl ${opacity}`;
            default: return baseClasses;
        }
    };

    return (
        <div className="flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="mb-8 flex gap-3 flex-wrap justify-center">
                {["tam", "sam", "som", "todas"].map((view) => (
                    <motion.button key={view} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveView(view)} className={`px-6 py-3 text-lg font-bold cursor-pointer border-2 rounded-lg transition-all duration-300 ${activeView === view ? "bg-[#01dfb2] border-[#01dfb2] text-white shadow-lg shadow-[#01dfb2]/30" : "bg-transparent border-gray-300 text-gray-700 hover:border-[#01dfb2] hover:text-[#01dfb2]"}`}>
                        {view.toUpperCase()}
                    </motion.button>
                ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1.1 }} className="relative w-96 h-96">
                {Object.keys(data).map((key) => (
                    <div key={key} className={getCircleClasses(key)}>
                        {activeView === key && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }} className="text-center">
                                <h2 className="text-4xl font-black mb-3 text-shadow-lg" style={{ fontFamily: "Anton, sans-serif" }}>{data[key as keyof typeof data].label}</h2>
                                <p className="text-2xl font-bold mb-2">{data[key as keyof typeof data].value}</p>
                                <p className="text-sm leading-relaxed max-w-[80%] mx-auto">{data[key as keyof typeof data].description}</p>
                            </motion.div>
                        )}
                    </div>
                ))}
                <div className={getLabelClasses("tam")} style={{ fontFamily: "Anton, sans-serif" }}>TAM</div>
                <div className={getLabelClasses("sam")} style={{ fontFamily: "Anton, sans-serif" }}>SAM</div>
                <div className={getLabelClasses("som")} style={{ fontFamily: "Anton, sans-serif" }}>SOM</div>
            </motion.div>
        </div>
    );
};

export const MarketOpportunitySection = () => {
    const marketData = [
        { label: "TAM - Total Addressable Market", value: "R$ 200 BI", desc: "Mercado total de bebidas no Brasil" },
        { label: "SAM - Serviceable Addressable Market", value: "R$ 50 BI", desc: "Mercado de delivery de bebidas" },
        { label: "SOM - Serviceable Obtainable Market", value: "R$ 2 BI", desc: "Nossa fatia realista do mercado" },
    ];
    return(
        <section id="mercado" className="py-32 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-20">
                    <Badge className="bg-[#01dfb2] text-white px-6 py-2 text-lg mb-6 rounded-full">Oportunidade Única</Badge>
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8" style={{ fontFamily: "Anton, sans-serif" }}>MERCADO E OPORTUNIDADE</h2>
                </motion.div>
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                        <Card className="p-12 bg-gradient-to-br from-[#01dfb2] to-[#00c9a7] text-white shadow-2xl">
                            <CardContent className="pt-6 text-center">
                                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="text-8xl font-black mb-6" style={{ fontFamily: "Anton, sans-serif" }}>
                                    R$ <AnimatedCounter end={200} /> BI
                                </motion.div>
                                <p className="text-2xl font-bold mb-6">O mercado de bebidas movimenta mais de R$ 200 bilhões por ano no Brasil.</p>
                                <p className="text-xl opacity-90">O delivery representa a nova porta de entrada para esse consumo massivo.</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="space-y-8">
                        {marketData.map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} whileHover={{ scale: 1.02 }} className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#01dfb2]">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
                                <div className="text-4xl font-black text-[#01dfb2] mb-2" style={{ fontFamily: "Anton, sans-serif" }}>{item.value}</div>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="max-w-4xl mx-auto">
                    <TamSamSomInteractiveChart />
                </motion.div>
            </div>
        </section>
    )
}