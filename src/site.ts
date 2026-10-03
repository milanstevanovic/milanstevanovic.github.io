// Site-wide values. Change them here, not in components.

export const SITE = {
  name: 'Milan Stevanović',
  url: 'https://milan.bio',
  // Meta description for the home page and for pages without their own.
  description:
    'Dedicated engineering teams in Serbia and product & tech leadership for companies in the Netherlands, Europe and the US, through Milan Ventures.',
  subtitle: 'Founder, Milan Ventures',
  keywords:
    'software outsourcing Serbia, dedicated engineering teams, nearshore development, fractional CTO, fractional CPO, head of product, product and tech leadership',
  // Lines under the name on the home page.
  roleLines: [
    'Founder, Milan Ventures',
    'Dedicated engineering teams in Serbia · Product & tech leadership at Head, VP and C-level',
  ],
  lang: 'en',
};

export const NAV = [
  { label: 'Services', href: '/services/' },
  { label: 'Case Studies', href: '/posts/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Contact', href: '/contact/' },
];

export const SOCIAL = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/milanstevanovic' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/mlstevanovic' },
  // TODO: switch to an address on a company domain once there is one.
  { label: 'Email', icon: 'email', href: 'mailto:milan.stevanovic.nl@gmail.com' },
] as const;

// The two offers shown on the home page. Teams come first: it is the main business.
export const OFFERS = [
  {
    title: 'Dedicated Engineering Teams',
    text: 'Engineers, QA, designers and product managers in Serbia, employed and run by Milan Ventures. From one person to a full team or managed delivery. Staffed in less than a month, with a two-week guarantee.',
    href: '/services/#dedicated-engineering-teams',
  },
  {
    title: 'Fractional Leadership',
    text: 'Head of Product, VP, CPO or CTO for companies that need senior product and tech leadership now, without a full-time executive hire.',
    href: '/services/#fractional-leadership',
  },
];

export const FOOTER = {
  owner: 'Milan Stevanović',
  company: {
    name: 'Milan Ventures DOO',
    href: 'https://www.companywall.rs/firma/milan-ventures/MMxFlfE20',
    details: 'VAT: 114947778, Reg: 22094980',
  },
};

export const CONTACT_FORM_ACTION = 'https://formspree.io/f/mrgwdyqy';
