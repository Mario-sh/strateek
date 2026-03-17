import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { FiArrowLeft, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--color-surface)] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-indigo-100 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors mb-12 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
            >
              <span className="text-2xl">{service.icon}</span>
              <span className="text-xs font-bold tracking-widest text-[var(--color-primary)] uppercase">
                Nos Solutions
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-[var(--color-text-primary)]"
            >
              {service.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed mb-12"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-[var(--color-text-primary)]">À propos de ce service</h2>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 font-light">
                {service.fullContent}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">Ce que nous proposons :</h3>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                    <FiCheckCircle className="text-[var(--color-primary)] shrink-0" />
                    <span className="font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--color-surface)] p-12 rounded-[2.5rem] border border-gray-100"
            >
              <h2 className="text-3xl font-bold mb-8 text-[var(--color-text-primary)]">Pourquoi nous choisir ?</h2>
              <div className="space-y-8">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-primary)] shrink-0 font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-gray-200">
                <Link
                  to="/#contact"
                  className="w-full py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group"
                >
                  Démarrer votre projet
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-text-primary)]">Notre Processus</h2>
            <p className="text-[var(--color-text-secondary)] font-light">
              Une approche structurée pour garantir des résultats exceptionnels à chaque étape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 relative group hover:shadow-xl transition-all"
              >
                <span className="text-5xl font-black text-blue-50 absolute top-4 right-6 group-hover:text-blue-100 transition-colors">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold mb-4 text-[var(--color-text-primary)] relative z-10">{step.title}</h3>
                <p className="text-[var(--color-text-secondary)] font-light leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[var(--color-primary)] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-400/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                Prêt à transformer votre <br className="hidden md:block" /> vision en réalité ?
              </h2>
              <p className="text-xl md:text-2xl text-blue-50 font-light mb-12 max-w-2xl mx-auto">
                Contactez-nous aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons booster votre business.
              </p>
              <Link
                to="/#contact"
                className="px-10 py-5 bg-white text-[var(--color-primary)] font-bold rounded-full hover:bg-gray-50 transition-all shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
              >
                Parlons de votre projet
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
