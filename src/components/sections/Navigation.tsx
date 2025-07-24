import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navigation = ({ scrollToSection, mobileMenuOpen, setMobileMenuOpen }: {
  scrollToSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) => {
  const navItems = ["Como Funciona", "Diferenciais", "Mercado", "Time", "Investir"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
          <img src="/logo-black.png" alt="The Drinker" width={40} height={40} />
          <span className="text-xl font-black" style={{ fontFamily: "Anton, sans-serif" }}>THE DRINKER</span>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.05, color: "#01dfb2" }}
              onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
              className="text-gray-700 hover:text-[#01dfb2] transition-colors font-medium"
            >
              {item}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="block w-full text-left text-gray-700 hover:text-[#01dfb2] transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}