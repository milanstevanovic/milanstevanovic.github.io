// Site-wide values. Change them here, not in components.

export const SITE = {
  name: 'Milan Stevanović',
  url: 'https://milan.bio',
  // Meta description for the home page and for pages without their own.
  description: "The story of a software engineer's path through technology and life",
  subtitle: 'Senior Software Engineer & Product Manager',
  keywords: 'software engineer, product manager, iOS, kotlin multiplatform, mobile development',
  // Lines under the name on the home page.
  roleLines: [
    'Co-Founder & CTO',
    '10+ years across engineering, product, and leadership roles',
  ],
  lang: 'en',
};

export const NAV = [
  { label: 'My Journey', href: '/posts/' },
  { label: 'Services', href: '/services/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Contact', href: '/contact/' },
];

export const SOCIAL = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/milanstevanovic' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/milanstevanovic' },
  { label: 'Email', icon: 'email', href: 'mailto:hello@milan.bio' },
] as const;

export const FOOTER = {
  owner: 'Milan Stevanović',
  company: {
    name: 'Milan Ventures DOO',
    href: 'https://www.companywall.rs/firma/milan-ventures/MMxFlfE20',
    details: 'VAT: 114947778, Reg: 22094980',
  },
};

export const CONTACT_FORM_ACTION = 'https://formspree.io/f/mrgwdyqy';
