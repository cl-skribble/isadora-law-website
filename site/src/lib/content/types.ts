// Shared shape both language content files must implement. Add a field
// here, then fill it in both en.ts and ms.ts — TypeScript will flag any
// mismatch.

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image: string;
};

export type Service = {
  slug: string;
  name: string;
  description: string;
  summary: string;
  keyServices: string[];
  image: string;
};

export type ClientLogo = { name: string; slug: string; width: number; height: number };

export type SiteContent = {
  site: {
    name: string;
    legalName: string;
    tagline: string;
    established: number;
    url: string;
    phone: string;
    address: string[];
  };
  nav: { label: string; href: string }[];
  logo: { subtitle: string };
  hero: {
    established: string;
    headingLine1: string;
    headingLine2: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    pullQuote: string;
  };
  welcome: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    image: string;
  };
  team: TeamMember[];
  teamSection: { eyebrow: string; emphasis: string };
  managingPartner: {
    name: string;
    title: string;
    credentials: string;
    image: string;
    bio: string;
    pillarsHeading: string;
    pillars: { title: string; description: string }[];
    industryEngagementHeading: string;
    industryEngagement: { org: string; roles: string[] }[];
  };
  visionMission: {
    visionLabel: string;
    vision: string;
    missionLabel: string;
    mission: string;
  };
  coreValues: { title: string; description: string }[];
  coreValuesSection: { eyebrow: string; emphasis: string };
  whyUs: { title: string; description: string }[];
  whyUsSection: { eyebrow: string; emphasis: string };
  achievements: { title: string; org: string }[];
  achievementsSection: {
    industryEyebrow: string;
    industryEmphasis: string;
    recentEyebrow: string;
    recentEmphasis: string;
  };
  services: Service[];
  servicesSection: { eyebrow: string; emphasis: string; intro: string; keyServicesLabel: string };
  clients: ClientLogo[];
  clientsSection: { eyebrow: string; emphasis: string; subtitle: string };
  contact: {
    headingLine1: string;
    headingLine2: string;
    ctaButton: string;
    rightsReserved: string;
  };
  form: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    practiceAreaLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    selectAreaPlaceholder: string;
    otherOption: string;
    submitIdle: string;
    submitPending: string;
    messages: {
      missingFields: string;
      invalidEmail: string;
      tooLong: string;
      notConfigured: string;
      sendFailed: string;
      success: string;
    };
  };
};
