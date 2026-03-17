import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projets Réalisés" },
  { value: "98%", label: "Clients Satisfaits" },
  { value: "5+", label: "Années d'Expérience" },
  { value: "24/7", label: "Support Dédié" },
];

export default function Stats() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
