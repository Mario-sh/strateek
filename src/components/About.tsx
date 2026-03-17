import { motion } from "framer-motion";

const team = [
  { name: "Brunel J. TOTO HINCHEGNON", role: "Directeur Général" },
  { name: "Mardochée HOUNDJENOUKON", role: "Directeur Technique" },
  { name: "Mahmoud CHITOU", role: "Lead Développeur" },
  { name: "Eustache P. SAKITI", role: "Expert SEO" },
  { name: "Exaucé J. ATTINGANME", role: "Designer UI/UX" },
  { name: "Candide SODOKIN", role: "Community Manager" },
  { name: "Ashnel A. de SOUZA", role: "Développeur Full-Stack" },
  { name: "Charles D. HOUNMENOU", role: "Spécialiste Ads" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--color-surface)] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
            <span className="text-xs font-bold tracking-widest text-[var(--color-primary)] uppercase">
              Notre Équipe
            </span>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[var(--color-text-primary)]"
          >
            Les cerveaux derrière la magie
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-lg md:text-xl font-light"
          >
            Une équipe de passionnés, d'experts et de créatifs dévoués à votre succès digital.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-[2rem] bg-white border border-gray-100 p-8 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 text-center"
            >
              <div className="relative w-28 h-28 mx-auto mb-6">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 group-hover:border-[var(--color-primary)] group-hover:rotate-180 transition-all duration-700 ease-in-out scale-110" />
                
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={`https://i.pravatar.cc/150?u=${member.name.replace(/\s/g, '')}`}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-1 tracking-tight group-hover:text-[var(--color-primary)] transition-colors">{member.name}</h4>
                <p className="text-sm text-[var(--color-text-secondary)] font-medium mb-4">{member.role}</p>
                
                {/* Social Links (Placeholder) */}
                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
