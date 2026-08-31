export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    tagline: string;
    description: string;
    ctaContact: string;
    ctaWork: string;
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
  };
  email: {
    subject: string;
    preview: string;
    heading: string;
    fromLabel: string;
    messageLabel: string;
    footerNote: string;
  };
};
