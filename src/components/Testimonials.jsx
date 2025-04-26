// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Client Testimonials</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <motion.div
            className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg max-w-xs"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "They built our office complex with utmost professionalism and precision. Highly recommended!"
            </p>
            <p className="mt-4 text-gray-800 dark:text-white font-semibold">John Doe</p>
            <p className="text-gray-600 dark:text-gray-400">CEO, Company</p>
          </motion.div>

          {/* Add more testimonials here */}
        </div>
      </div>
    </section>
  );
}
