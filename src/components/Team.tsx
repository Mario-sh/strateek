import { motion } from "framer-motion";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

const team = [
  { name: "Brunel J. TOTO HINCHEGNON", role: "Directeur Général" },
  { name: "Mardochée HOUNDJENOUKON", role: "Directeur Technique" },
  { name: "Mahmoud CHITOU", role: "Lead Développeur" },
  { name: "Eustache P. SAKITI", role: "Expert SEO" },
  { name: "Exaucé J. ATTINGANME", role: "Designer UI/UX" },
  { name: "Candide SODOKIN", role: "Community Manager" },
  { name: "Ashnel A. de SOUZA", role: "Développeur Full-Stack" },
  { name: "Charles D. HOUNMENOU", role: "Spécialiste Ads" },
  { name: "Farid IBIDAKPO", role: "Vidéaste" },
  { name: "Lauris O. HOUETO", role: "Rédacteur Web" },
  { name: "Dylane S. LOKOSSOU", role: "Chef de Projet" },
];

export default function Team() {
  return (
    <section id="team" className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-[#FF5A00] uppercase mb-4"
          >
            Notre Équipe
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black leading-tight mb-6"
          >
            Les cerveaux derrière la magie
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Une équipe de passionnés, d'experts et de créatifs dévoués à votre succès.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-2xl bg-[#121212] border border-white/5 p-6 hover:border-[#FF5A00]/30 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#FF5A00] to-[#00E5FF] p-[2px] mb-6">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0A0A]">
                  <img
                    src={`https://i.pravatar.cc/150?u=${member.name.replace(/\s/g, '')}`}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-white mb-1 line-clamp-1">{member.name}</h4>
                <p className="text-sm text-[#FF5A00] font-medium mb-4">{member.role}</p>
                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FiTwitter size={18} />
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
