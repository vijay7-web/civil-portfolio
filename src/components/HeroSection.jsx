// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="h-screen bg-cover bg-red-500 bg-center flex items-center justify-center text-white bg-[url('/hero.jpg')] dark:bg-[url('/hero-dark.jpg')]">
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Building the Future <br />
          <span className="text-orange-500">with Precision</span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl">Quality. Innovation. Sustainability.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-full text-white font-semibold shadow-lg"
        >
          Explore Projects
        </motion.button>
      </motion.div>
    </section>
  );
}
