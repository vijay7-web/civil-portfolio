// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Construction</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              We offer full-cycle construction services, from planning and design to execution and management.
            </p>
          </motion.div>

          <motion.div
            className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Consulting</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Our expert team provides consulting for building infrastructure and creating sustainable plans.
            </p>
          </motion.div>

          <motion.div
            className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Design & Engineering</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              We provide state-of-the-art design services with engineering precision to meet your needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
