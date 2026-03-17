import React from 'react';

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "developpement-web",
    title: "Développement Web",
    description: "Sites web sur mesure, e-commerce et applications web performantes conçues pour convertir vos visiteurs en clients.",
    fullContent: "Nous créons des expériences numériques exceptionnelles qui allient design moderne et performances techniques. Que vous ayez besoin d'un site vitrine élégant, d'une plateforme e-commerce robuste ou d'une application web complexe, notre équipe utilise les dernières technologies pour donner vie à votre vision.",
    icon: "🌐",
    features: [
      "Architecture moderne et scalable",
      "Optimisation mobile (Responsive Design)",
      "Performance et vitesse de chargement",
      "Sécurité renforcée",
      "Interface d'administration intuitive"
    ],
    benefits: [
      "Amélioration de l'image de marque",
      "Augmentation du taux de conversion",
      "Meilleure expérience utilisateur",
      "Réduction des coûts de maintenance"
    ],
    process: [
      { step: "01", title: "Analyse", desc: "Étude de vos besoins et définition des objectifs." },
      { step: "02", title: "Design", desc: "Création de maquettes UI/UX modernes et intuitives." },
      { step: "03", title: "Développement", desc: "Codage propre et respectueux des standards web." },
      { step: "04", title: "Tests & Lancement", desc: "Vérification rigoureuse avant la mise en ligne." }
    ]
  },
  {
    id: "marketing-digital",
    title: "Marketing Digital & Funnels",
    description: "Construction des tunnels de vente et stratégies digitales complètes pour augmenter votre visibilité en ligne.",
    fullContent: "Le marketing digital ne se limite pas à la visibilité ; il s'agit de créer un parcours client fluide qui mène à la conversion. Nous concevons des tunnels de vente optimisés et des stratégies de contenu qui captent l'attention et fidélisent votre audience.",
    icon: "📈",
    features: [
      "Stratégie de tunnels de vente (Funnels)",
      "Gestion des réseaux sociaux",
      "Email marketing automatisé",
      "Analyse de données et reporting",
      "Copywriting persuasif"
    ],
    benefits: [
      "Génération de leads qualifiés",
      "Augmentation prévisible du chiffre d'affaires",
      "Automatisation des processus de vente",
      "Meilleure compréhension de votre audience"
    ],
    process: [
      { step: "01", title: "Audit", desc: "Analyse de votre présence actuelle et de la concurrence." },
      { step: "02", title: "Stratégie", desc: "Définition du parcours client idéal." },
      { step: "03", title: "Implémentation", desc: "Mise en place des outils et des campagnes." },
      { step: "04", title: "Optimisation", desc: "Ajustements continus basés sur les résultats." }
    ]
  },
  {
    id: "design-graphique",
    title: "Design Graphique",
    description: "Identité visuelle impactante qui renforce votre image de marque et vous distingue de la concurrence.",
    fullContent: "Votre identité visuelle est le premier contact de vos clients avec votre marque. Nous créons des designs qui racontent votre histoire, transmettent vos valeurs et marquent les esprits. Du logo à la charte graphique complète, nous assurons une cohérence visuelle sur tous vos supports.",
    icon: "🎨",
    features: [
      "Création de logos uniques",
      "Charte graphique complète",
      "Supports de communication print",
      "Design pour les réseaux sociaux",
      "Illustration sur mesure"
    ],
    benefits: [
      "Reconnaissance immédiate de la marque",
      "Professionnalisme accru",
      "Différenciation par rapport à la concurrence",
      "Cohérence sur tous les points de contact"
    ],
    process: [
      { step: "01", title: "Briefing", desc: "Compréhension de l'univers de votre marque." },
      { step: "02", title: "Exploration", desc: "Recherche créative et concepts initiaux." },
      { step: "03", title: "Affinage", desc: "Développement du concept choisi." },
      { step: "04", title: "Livraison", desc: "Fourniture des fichiers dans tous les formats nécessaires." }
    ]
  },
  {
    id: "seo",
    title: "SEO",
    description: "Optimisation pour les moteurs de recherche pour améliorer votre classement et attirer du trafic qualifié.",
    fullContent: "Être présent sur le web est inutile si personne ne vous trouve. Notre expertise en SEO (Search Engine Optimization) permet à votre site de remonter dans les résultats de recherche sur les mots-clés qui comptent vraiment pour votre business.",
    icon: "🔍",
    features: [
      "Audit technique SEO",
      "Recherche de mots-clés stratégiques",
      "Optimisation on-page",
      "Stratégie de netlinking",
      "Suivi de positionnement"
    ],
    benefits: [
      "Trafic organique durable",
      "Réduction de la dépendance à la publicité payante",
      "Crédibilité renforcée auprès des utilisateurs",
      "Meilleur ROI à long terme"
    ],
    process: [
      { step: "01", title: "Audit", desc: "Identification des freins à votre référencement." },
      { step: "02", title: "Mots-clés", desc: "Sélection des termes les plus rentables." },
      { step: "03", title: "Optimisation", desc: "Amélioration technique et sémantique." },
      { step: "04", title: "Suivi", desc: "Analyse des gains de positions et de trafic." }
    ]
  },
  {
    id: "publicite-en-ligne",
    title: "Publicité en Ligne",
    description: "Campagnes publicitaires ciblées sur Google, Facebook et Instagram pour un retour sur investissement maximal.",
    fullContent: "Accélérez votre croissance avec des campagnes publicitaires ultra-ciblées. Nous gérons vos budgets publicitaires sur Google Ads et les réseaux sociaux pour vous apporter des résultats immédiats et mesurables.",
    icon: "📢",
    features: [
      "Google Search & Display Ads",
      "Facebook & Instagram Ads",
      "Retargeting stratégique",
      "A/B Testing de publicités",
      "Optimisation du coût par clic (CPC)"
    ],
    benefits: [
      "Résultats immédiats",
      "Ciblage précis par audience",
      "Contrôle total du budget",
      "Mesure exacte du ROI"
    ],
    process: [
      { step: "01", title: "Ciblage", desc: "Définition de l'audience idéale." },
      { step: "02", title: "Création", desc: "Conception des visuels et des textes." },
      { step: "03", title: "Lancement", desc: "Mise en ligne et monitoring serré." },
      { step: "04", title: "Scaling", desc: "Augmentation du budget sur ce qui fonctionne." }
    ]
  },
  {
    id: "production-video",
    title: "Production Vidéo",
    description: "Création de contenus vidéo professionnels pour raconter votre histoire et engager votre audience.",
    fullContent: "La vidéo est le format le plus consommé et le plus engageant sur le web. Nous produisons des contenus vidéo de haute qualité qui captivent votre audience, expliquent vos services et renforcent votre autorité.",
    icon: "🎥",
    features: [
      "Vidéos promotionnelles",
      "Interviews et témoignages clients",
      "Motion Design & Animation",
      "Montage vidéo dynamique",
      "Optimisation pour les réseaux sociaux"
    ],
    benefits: [
      "Taux d'engagement supérieur",
      "Mémorisation accrue du message",
      "Humanisation de votre marque",
      "Boost du référencement (SEO vidéo)"
    ],
    process: [
      { step: "01", title: "Scripting", desc: "Écriture du scénario et du storyboard." },
      { step: "02", title: "Tournage", desc: "Captation d'images professionnelles." },
      { step: "03", title: "Post-prod", desc: "Montage, étalonnage et sound design." },
      { step: "04", title: "Diffusion", desc: "Optimisation pour les différents canaux." }
    ]
  }
];
