import { motion } from "framer-motion";
import { AnimatedCounter } from "../ui/animatedcounter";

export const StatsSection = ({ stats }: { stats: { number: number; suffix: string; label: string }[] }) => {
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#01dfb2]/10 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} className="text-center">
              <motion.div whileHover={{ scale: 1.1 }} className="text-4xl md:text-6xl font-black text-[#01dfb2] mb-2" style={{ fontFamily: "Anton, sans-serif" }}>
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </motion.div>
              <p className="text-white/80 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}