import { motion } from "framer-motion";

const problems = [
  {
    title: "Manque de visibilité",
    desc: "Votre entreprise est invisible sur les moteurs de recherche et les réseaux sociaux.",
  },
  {
    title: "Faible taux de conversion",
    desc: "Vous avez du trafic, mais il ne se transforme pas en clients payants.",
  },
  {
    title: "Image de marque obsolète",
    desc: "Votre identité visuelle ne reflète plus la qualité de vos services.",
  },
  {
    title: "Stratégie inefficace",
    desc: "Vous dépensez du budget publicitaire sans retour sur investissement clair.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface)] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="text-xs font-bold tracking-widest text-red-600 uppercase">
              Les défis que vous rencontrez
            </span>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[var(--color-text-primary)]"
          >
            Pourquoi votre entreprise stagne-t-elle en ligne ?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-lg md:text-xl font-light"
          >
            Dans un monde numérique en constante évolution, rester compétitif est un défi majeur. Voici les obstacles qui freinent votre croissance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 hover:border-red-100 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-8 text-xl font-bold group-hover:bg-red-500 group-hover:text-white transition-colors duration-500 group-hover:scale-110 group-hover:rotate-12">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-[var(--color-text-primary)] tracking-tight">{problem.title}</h4>
              <p className="text-[var(--color-text-secondary)] leading-relaxed font-light">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
