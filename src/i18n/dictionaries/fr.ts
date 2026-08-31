import type { Dictionary } from "@/i18n/dictionary";

const fr: Dictionary = {
  meta: {
    title: "Azer Khamassi | Développeur Full Stack",
    description:
      "Développeur Full Stack avec 5+ ans d'expérience sur des applications web réactives et évolutives avec React, Node.js et TypeScript. Spécialisé en architecture de composants et optimisation des performances UI.",
    keywords: [
      "Azer Khamassi",
      "Développeur Full Stack",
      "Développeur Frontend",
      "Développeur React",
      "Développeur Next.js",
      "TypeScript",
      "Node.js",
      "Ingénieur logiciel Tunisie",
      "Architecture de composants",
      "Optimisation des performances UI",
    ],
  },
  nav: {
    work: "projets",
    about: "à propos",
    contact: "contact",
  },
  hero: {
    eyebrow: "// bonjour le monde",
    tagline: "Développeur Full Stack · React, Node.js, TypeScript · Sousse, Tunisie",
    description:
      "5+ ans à concevoir des applications web réactives et évolutives, de bout en bout. Je construis des API REST et des modèles de données relationnelles côté backend, puis je développe des interfaces à base de composants avec un souci constant de l'optimisation des performances UI. Je travaille à distance avec des équipes internationales, j'encadre des développeurs juniors, et je garde un code propre et maintenable.",
    ctaContact: "me contacter →",
    ctaWork: "voir mes projets",
  },
  projects: {
    sectionLabel: "01 / projets",
    items: [
      {
        title: "IconDesk",
        year: "2023",
        description:
          "Plateforme SaaS B2B qui unifie les analytics Instagram, TikTok et YouTube dans un tableau de bord unique pour les agences de talents. Elle automatise le suivi des performances et transforme des données éparses en media kits prêts à présenter.",
        tags: ["React", "Vite", "Node.js", "Express", "TypeScript", "PostgreSQL", "Stripe"],
        href: "https://github.com/AzerKhamassi",
      },
      {
        title: "The Platform TV",
        year: "2022",
        description:
          "Plateforme de streaming vidéo qui permet aux créateurs et aux entreprises de lancer des services d'abonnement à leur propre marque, combinant VOD, streaming en direct et paiements intégrés.",
        tags: ["React", "Node.js", "Express", "TypeScript", "PostgreSQL", "Agora SDK", "MyFatoorah"],
        href: "https://github.com/AzerKhamassi",
      },
    ],
  },
  about: {
    sectionLabel: "02 / à propos",
    paragraphs: [
      "Je suis Développeur Full Stack et je conçois des applications web réactives et évolutives en télétravail chez Plantec, où j'ai fiabilisé le code par un typage TypeScript strict, construit une bibliothèque réutilisable de plus de 100 composants, et livré des fonctionnalités du schéma PostgreSQL jusqu'à l'écran final : paiements Stripe, notifications temps réel via Server-Sent Events.",
      "Auparavant, j'ai travaillé sur des microservices NestJS chez PixiMind et développé des fonctionnalités temps réel avec Socket.IO chez Karwisoft. J'ai passé l'essentiel de ma carrière au sein d'équipes distribuées et internationales, et je porte une attention particulière à l'optimisation des performances UI, à la couverture de tests, et à l'encadrement. J'ai accompagné des développeurs juniors en revue de code sur React et TypeScript.",
    ],
    stackLabel: "stack",
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "TailwindCSS",
      "Node.js",
      "Express",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "API REST",
      "Socket.IO",
      "Docker",
    ],
  },
  contact: {
    sectionLabel: "03 / contact",
    intro: "Un projet en tête, ou juste envie de dire bonjour ? Laissez-moi un message ci-dessous.",
    nameLabel: "nom",
    namePlaceholder: "Jean Dupont",
    emailLabel: "email",
    emailPlaceholder: "jean.dupont@example.com",
    messageLabel: "message",
    messagePlaceholder: "Qu'avez-vous en tête ?",
    send: "envoyer →",
    sending: "envoi…",
    success: "Message envoyé. Je vous répondrai bientôt.",
    errors: {
      nameTooShort: "Trop court",
      emailInvalid: "Entrez un email valide",
      messageTooShort: "Dites-m'en un peu plus",
      invalidInput: "Entrée invalide",
      notConfigured: "Le formulaire de contact n'est pas encore configuré.",
      sendFailed: "Impossible d'envoyer votre message. Veuillez réessayer.",
    },
  },
  footer: {
    email: "email",
    github: "github",
    linkedin: "linkedin",
  },
  email: {
    subject: "Nouveau message de {name}",
    preview: "Nouveau message de {name} via votre portfolio",
    heading: "Nouveau message du formulaire de contact",
    fromLabel: "De",
    messageLabel: "Message",
    footerNote: "Envoyé depuis le formulaire de contact de votre portfolio.",
  },
};

export default fr;
