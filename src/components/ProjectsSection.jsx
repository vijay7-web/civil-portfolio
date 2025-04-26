// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Our Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/path/to/project-image.jpg" alt="Project 1" className="w-full h-60 object-cover" />
            <div className="p-6 bg-gray-100 dark:bg-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Project Name</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                A brief description of the project highlighting its importance and achievements.
              </p>
            </div>
          </motion.div>

          {/* Repeat the same structure for other projects */}
        </div>
      </div>
    </section>
  );
}
