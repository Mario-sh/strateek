import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Combien de temps faut-il pour créer un site web ?",
    answer: "Le délai dépend de la complexité du projet. Un site vitrine classique prend généralement 2 à 4 semaines, tandis qu'une plateforme e-commerce ou une application web sur mesure peut nécessiter 1 à 3 mois.",
  },
  {
    question: "Proposez-vous des services de maintenance ?",
    answer: "Oui, nous offrons des forfaits de maintenance mensuels ou annuels pour assurer la sécurité, les mises à jour et les performances optimales de votre site web.",
  },
  {
    question: "Comment mesurez-vous le succès d'une campagne marketing ?",
    answer: "Nous définissons ensemble des KPIs (Indicateurs Clés de Performance) clairs avant le lancement. Nous suivons le trafic, le taux de conversion, le coût par acquisition et le ROI global, avec des rapports mensuels détaillés.",
  },
  {
    question: "Travaillez-vous uniquement avec des entreprises au Bénin ?",
    answer: "Non, bien que nous soyons basés au Bénin, nous accompagnons des clients à l'international (France, Canada, Afrique de l'Ouest) grâce à nos processus de travail à distance optimisés.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
              <span className="text-xs font-bold tracking-widest text-[var(--color-primary)] uppercase">
                FAQ
              </span>
            </motion.div>
            
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[var(--color-text-primary)]">
              Questions Fréquentes
            </h3>
            <p className="text-[var(--color-text-secondary)] text-lg md:text-xl mb-8 font-light leading-relaxed">
              Vous avez des questions ? Nous avons les réponses. Découvrez comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-[var(--color-text-primary)] font-semibold rounded-full transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
            >
              Vous avez d'autres questions ?
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === idx 
                    ? "border-blue-200 bg-white shadow-lg shadow-blue-900/5" 
                    : "border-gray-200 bg-white hover:border-blue-100"
                }`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-[var(--color-text-primary)] focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className={`pr-4 ${openIndex === idx ? 'text-[var(--color-primary)]' : ''}`}>
                    {faq.question}
                  </span>
                  <span className={`transform transition-transform duration-300 shrink-0 flex items-center justify-center w-8 h-8 rounded-full ${openIndex === idx ? "rotate-180 bg-blue-50 text-[var(--color-primary)]" : "bg-gray-50 text-gray-400"}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[var(--color-text-secondary)] leading-relaxed font-light border-t border-gray-50 pt-4 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
