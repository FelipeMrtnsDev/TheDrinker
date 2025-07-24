import { motion } from "framer-motion";
import { Instagram, Linkedin, Phone } from "lucide-react";

export const Footer = () => {
    const socialLinks = [
        { icon: Instagram, href: "https://www.instagram.com/thedrinkeroficial", color: "hover:text-pink-400" },
        { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
        { icon: Phone, href: "#", color: "hover:text-green-400" },
    ];
    return(
        <footer className="bg-gray-900 py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <img src="/logo-white.png" alt="The Drinker Logo" width={100} height={100} className="mx-auto mb-8" />
                    </motion.div>
                    <div className="flex justify-center space-x-8 mb-8">
                        {socialLinks.map((social, index) => (
                            <motion.a key={index} href={social.href} whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} className={`text-gray-400 ${social.color} transition-all duration-300`}>
                                <social.icon className="w-8 h-8" />
                            </motion.a>
                        ))}
                    </div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="text-gray-400 text-lg pb-4">
                        O futuro da bebida é agora. <span className="text-[#01dfb2] font-bold">The Drinker® 2025</span>
                    </motion.p>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="text-gray-400 text-md">
                        Desenvolvido por<a href="https://portifolio-ten-drab-63.vercel.app" target="_blank" className="text-[#01dfb2]"> @FelipeMrtnsDev</a>
                    </motion.p>
                </div>
            </div>
        </footer>
    )
}