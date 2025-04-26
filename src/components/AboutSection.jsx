// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
              About Our Company
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              We are a premier civil engineering firm dedicated to delivering top-tier construction and infrastructure solutions. Our expertise spans across residential, commercial, and industrial projects — always rooted in innovation, quality, and precision.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              With a talented team of engineers, architects, and project managers, we ensure every project not only meets but exceeds client expectations. Your vision is our blueprint.
            </p>
            <button className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow-lg">
              Learn More
            </button>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img 
              src="/about-us.jpg" 
              alt="About us civil project" 
              className="rounded-lg shadow-2xl object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
