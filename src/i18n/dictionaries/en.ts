import type { Dictionary } from "@/i18n/dictionary";

const en: Dictionary = {
  meta: {
    title: "Azer Khamassi | Full Stack Engineer",
    description:
      "Full Stack Engineer with 5+ years building responsive, scalable web apps in React, Node.js & TypeScript. Specialized in component architecture and UI performance.",
    keywords: [
      "Azer Khamassi",
      "Full Stack Engineer",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript",
      "Node.js",
      "Software Engineer Tunisia",
      "Component-based architecture",
      "UI performance optimization",
    ],
  },
  nav: {
    work: "work",
    about: "about",
    contact: "contact",
  },
  hero: {
    eyebrow: "// hello, world",
    tagline: "Full Stack Engineer · React, Node.js, TypeScript · Sousse, Tunisia",
    description:
      "5+ years building responsive, scalable web applications end to end. I build REST APIs and relational data models on the backend, then ship component-based interfaces with a focus on UI performance optimization. I work remotely with international teams, mentor junior developers, and keep code clean and maintainable.",
    ctaContact: "say hello →",
    ctaWork: "view work",
  },
  projects: {
    sectionLabel: "01 / work",
    items: [
      {
        title: "IconDesk",
        year: "2023",
        description:
          "B2B SaaS platform unifying Instagram, TikTok, and YouTube analytics into one dashboard for talent agencies. It automates performance tracking and turns scattered social data into client-ready media kits.",
        tags: ["React", "Vite", "Node.js", "Express", "TypeScript", "PostgreSQL", "Stripe"],
        href: "https://github.com/AzerKhamassi",
      },
      {
        title: "The Platform TV",
        year: "2022",
        description:
          "Video streaming platform that lets creators and businesses launch branded subscription services, combining on-demand video, live streaming, and integrated payments in one customizable experience.",
        tags: ["React", "Node.js", "Express", "TypeScript", "PostgreSQL", "Agora SDK", "MyFatoorah"],
        href: "https://github.com/AzerKhamassi",
      },
    ],
  },
  about: {
    sectionLabel: "02 / about",
    paragraphs: [
      "I'm a Full Stack Engineer building responsive, scalable web applications remotely at Plantec, where I've enforced strict TypeScript across the codebase, built a reusable, component-based library of 100+ components, and shipped features from PostgreSQL schema to finished screen: from Stripe payments to real-time notifications with Server-Sent Events.",
      "Earlier I worked with NestJS microservices at PixiMind and built real-time features with Socket.IO at Karwisoft. I've spent most of my career working with distributed, international teams, and I care about UI performance optimization, test coverage, and mentoring. I've coached junior developers through code review on React and TypeScript.",
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
      "REST APIs",
      "Socket.IO",
      "Docker",
    ],
  },
  contact: {
    sectionLabel: "03 / contact",
    intro: "Have a project in mind, or just want to say hi? Drop a message below.",
    nameLabel: "name",
    namePlaceholder: "Jane Doe",
    emailLabel: "email",
    emailPlaceholder: "jane@example.com",
    messageLabel: "message",
    messagePlaceholder: "What's on your mind?",
    send: "send message →",
    sending: "sending…",
    success: "Message sent. I'll get back to you soon.",
    errors: {
      nameTooShort: "Too short",
      emailInvalid: "Enter a valid email",
      messageTooShort: "Tell me a bit more",
      invalidInput: "Invalid input",
      notConfigured: "Contact form is not configured yet.",
      sendFailed: "Could not send your message. Please try again.",
    },
  },
  footer: {
    email: "email",
    github: "github",
    linkedin: "linkedin",
  },
  email: {
    subject: "New message from {name}",
    preview: "New message from {name} via your portfolio",
    heading: "New contact form submission",
    fromLabel: "From",
    messageLabel: "Message",
    footerNote: "Sent from your portfolio contact form.",
  },
};

export default en;
