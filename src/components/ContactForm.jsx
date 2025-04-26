// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Contact Us</h2>
        <form className="mt-8 max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-white">Your Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 mt-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-white">Your Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 mt-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-white">Message</label>
            <textarea id="message" className="w-full px-4 py-2 mt-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg" rows="5"></textarea>
          </div>
          <motion.button
            type="submit"
            className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
