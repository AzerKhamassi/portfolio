export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    jobTitle: string;
  };
  nav: {
    work: string;
    about: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    stack: string;
    location: string;
    description: string;
    ctaContact: string;
    ctaWork: string;
    ctaTerminal: string;
  };
  projects: {
    sectionLabel: string;
    items: {
      title: string;
      year: string;
      description: string;
      tags: string[];
      href: string;
    }[];
  };
  about: {
    sectionLabel: string;
    paragraphs: string[];
    stackLabel: string;
    stack: string[];
  };
  experience: {
    sectionLabel: string;
    items: {
      role: string;
      company: string;
      period: string;
      location: string;
      achievements: string[];
      tools: string[];
    }[];
  };
  education: {
    sectionLabel: string;
    degree: string;
    school: string;
    period: string;
    certificatesLabel: string;
    certificates: { name: string; issuer: string }[];
  };
  contact: {
    sectionLabel: string;
    intro: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    errors: {
      nameTooShort: string;
      emailInvalid: string;
      messageTooShort: string;
      invalidInput: string;
      notConfigured: string;
      sendFailed: string;
    };
  };
  footer: {
    email: string;
    github: string;
    linkedin: string;
    backToTop: string;
  };
  theme: {
    switchToLight: string;
    switchToDark: string;
  };
  email: {
    subject: string;
    preview: string;
    heading: string;
    fromLabel: string;
    messageLabel: string;
    footerNote: string;
  };
  shortcuts: {
    title: string;
    help: string;
    terminal: string;
    theme: string;
    top: string;
    close: string;
  };
  terminal: {
    prompt: string;
    intro: string;
    helpIntro: string;
    whoami: string;
    azer: string;
    themeToggled: string;
    themeLight: string;
    themeDark: string;
    navigating: string;
    opening: string;
    dateLabel: string;
    pwd: string;
    ls: string;
    sudo: string;
    unknownCommand: string;
    commands: {
      help: string;
      whoami: string;
      azer: string;
      pwd: string;
      ls: string;
      about: string;
      work: string;
      experience: string;
      education: string;
      contact: string;
      theme: string;
      clear: string;
      github: string;
      linkedin: string;
      email: string;
      date: string;
      sudo: string;
    };
  };
};
