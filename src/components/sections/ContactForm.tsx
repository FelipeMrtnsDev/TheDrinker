import { Calendar, Rocket } from "lucide-react"
import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"
import { useState } from "react"

export const ContactFormSection = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [valorEstimado, setValorEstimado] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Enviando...");

        const userData = {
            nome: nome,
            email: email,
            whatsapp: whatsapp,
            valorEstimado: valorEstimado,
            message: message
        };

        const apiUrl = import.meta.env.VITE_API_URL;

        try {
            const response = await fetch(`${apiUrl}/email/enviar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                setStatus("Mensagem enviada com sucesso!");
                setNome("");
                setEmail("");
                setWhatsapp("");
                setValorEstimado("");
                setMessage("");
            } else {
                setStatus("Ocorreu um erro ao enviar. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro no fetch:", error);
            setStatus("Erro de conexão. Verifique sua internet.");
        }
    };

    return (
        <section id="investir" className="py-24 md:py-32 bg-gradient-to-br from-[#01dfb2] via-[#00c9a7] to-[#00b399] relative overflow-hidden">
            <motion.div animate={{ x: [0, 100, 0], y: [0, -50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: "Anton, sans-serif" }}>AGENDE UMA REUNIÃO</h2>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">Vamos conversar sobre como você pode fazer parte dessa revolução</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <Card className="p-6 md:p-12 bg-white/10 backdrop-blur-md border-white/20 shadow-2xl rounded-2xl">
                            <CardContent className="pt-6 p-0">
                                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <motion.div whileHover={{ scale: 1.02 }}>
                                            <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome completo" required className="h-14 text-lg bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 w-full p-4 rounded-lg" />
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.02 }}>
                                            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Seu melhor e-mail" required className="h-14 text-lg bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 w-full p-4 rounded-lg" />
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.02 }}>
                                            <Input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="WhatsApp para contato" required className="h-14 text-lg bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 w-full p-4 rounded-lg" />
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.02 }}>
                                            <Input value={valorEstimado} onChange={(e) => setValorEstimado(e.target.value)} placeholder="Valor estimado de interesse" required className="h-14 text-lg bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 w-full p-4 rounded-lg" />
                                        </motion.div>
                                    </div>
                                    <motion.div whileHover={{ scale: 1.02 }}>
                                        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Conte-nos mais sobre seu interesse e experiência como investidor" required className="min-h-[150px] text-lg bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 resize-none w-full p-4 rounded-lg" />
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-center flex flex-col items-center">
                                        <Button type="submit" size="lg" className="bg-white text-[#01dfb2] hover:bg-gray-100 font-bold w-full md:w-auto px-8 py-6 text-lg md:text-xl rounded-full shadow-2xl flex items-center justify-center cursor-pointer">
                                            <Calendar className="hidden md:inline-block md:mr-3 w-6 h-6 flex-shrink-0" />
                                            <span className="whitespace-nowrap">Agendar Reunião Agora</span>
                                            <Rocket className="hidden md:inline-block md:ml-3 w-6 h-6 flex-shrink-0" />
                                        </Button>
                                        {status && <p className="text-white mt-4">{status}</p>}
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

export default ContactFormSection;