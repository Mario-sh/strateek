import { motion } from "framer-motion";

const projects = [
  {
    title: "Shape of Key",
    category: "E-commerce",
    desc: "Boutique en ligne spécialisée dans les gainettes criminelles, corsets et autres articles de shapewear.",
    link: "https://shapeofkey.com/",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "ONG FÄ ET et Culture Africaine",
    category: "Site Institutionnel",
    desc: "Plateforme pour une ONG promouvant la culture et l'éducation du Fâ en Afrique.",
    link: "https://ongfaetcultureafricaine.com/",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "GCBÊ",
    category: "Portail Web",
    desc: "Portail complet pour un centre de formation professionnel et de conseil pour le bien-être basé en Guinée.",
    link: "https://www.gcbeguinee.org",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "SculptBelt",
    category: "E-commerce",
    desc: "Boutique en ligne de ceinture sculptante à effet sauna, destinée pour affiner la taille.",
    link: "https://subtle-puffpuff-4eb5d0.netlify.app/",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[var(--color-surface)] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
              <span className="text-xs font-bold tracking-widest text-[var(--color-primary)] uppercase">
                Nos Réalisations
              </span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight text-[var(--color-text-primary)]"
            >
              Des projets qui parlent d'eux-mêmes
            </motion.h3>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://drive.google.com/drive/folders/1p5QTqhdIjy9GdUhe49cFcx8ljZ-u7bOP?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-50 hover:bg-gray-100 text-[var(--color-text-primary)] font-semibold rounded-full transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
          >
            Voir le catalogue complet
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Action Button */}
                <div className="absolute bottom-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--color-primary)] shadow-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="p-8 relative z-20 bg-white flex-grow flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 bg-blue-50 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider rounded-full">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 tracking-tight group-hover:text-[var(--color-primary)] transition-colors">{project.title}</h4>
                <p className="text-[var(--color-text-secondary)] font-light leading-relaxed mb-6 line-clamp-2 flex-grow">{project.desc}</p>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors mt-auto"
                >
                  Visiter le site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
