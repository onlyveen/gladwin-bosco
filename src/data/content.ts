import group9 from '../assets/images/group9.svg';
import group11 from '../assets/images/group11.svg';
import image8 from '../assets/images/image8.png';
import image9 from '../assets/images/image9.png';
import image10 from '../assets/images/image10.png';
import image11 from '../assets/images/image11.png';

export type Job = {
  company: string;
  companySubtitle?: string;
  role: string;
  period: string;
  logo?: string;
  initials?: string;
  badgeClass?: string;
};

export const visibleJobs: Job[] = [
  {
    company: 'HashedIn by Deloitte',
    role: 'Chief of Staff',
    period: 'Jun 2026 – Present',
    logo: image8,
  },
  {
    company: 'AntStack Technologies Pvt Ltd',
    role: 'Executive Assistant & Business Manager',
    period: 'Nov 2019 – Jun 2026 · Founding member',
    logo: group9,
  },
  {
    company: 'WheelsBox',
    role: 'Consultant — Data & Operations',
    period: 'Oct 2018 – Oct 2019',
    logo: group11,
  },
  {
    company: 'BhookhaHaathi Hospitality Pvt. Ltd',
    role: 'General Manager, Sales & Operations',
    period: 'Sep 2017 – May 2018',
    initials: 'bh',
    badgeClass: 'bg-[#8a8f3a] text-white',
  },
];

export const hiddenJobs: Job[] = [
  {
    company: 'ABC Consolidated Pvt. Ltd',
    companySubtitle: '(ffolio and KILOL)',
    role: 'Assistant Store Manager',
    period: 'Dec 2011 – Oct 2012',
    initials: 'ff',
    badgeClass: 'bg-white text-[#0d0d0d]',
  },
  {
    company: 'Direm Marketing Services Pvt. Ltd',
    role: 'Assistant Account Manager',
    period: 'Aug 2010 – Nov 2011',
    logo: image11,
    badgeClass: 'bg-white p-2',
  },
  {
    company: 'Brand House Retails Ltd.',
    companySubtitle: '(S. Kumars Nationwide Ltd.)',
    role: 'Assistant Store Manager',
    period: 'May 2008 – Aug 2010',
    logo: image9,
  },
  {
    company: 'Indus League Clothing Limited',
    role: 'Assistant Store Manager',
    period: 'Dec 2005 – Mar 2008',
    logo: image10,
  },
  {
    company: 'Intrepid Online Retail Pvt. Ltd.',
    companySubtitle: '(STYLETAG.com)',
    role: 'Senior Manager, Customer Experience',
    period: 'Oct 2012 – Aug 2017',
    initials: 'ST',
    badgeClass: 'bg-white text-[#0d0d0d]',
  },
];

export type Skill = {
  title: string;
  description: string;
};

export const skills: Skill[] = [
  {
    title: 'Business Operations & Process Design',
    description:
      "Building the systems and SOPs a company doesn't know it needs until it's too late to build them calmly.",
  },
  {
    title: 'Executive & Founder Support',
    description:
      'Being the operational fallback so leadership can stay entirely on clients, technology, and growth.',
  },
  {
    title: 'Legal & Contract Review',
    description:
      'MSAs, SOWs and vendor agreements reviewed before signature. Non-standard clauses and commercial risk flagged early, resolved with external counsel.',
  },
  {
    title: 'Forex & Banking',
    description:
      'Inward international remittances under RBI governance, bank relationship management, and currency conversion optimised to protect the value of every client payment.',
  },
  {
    title: 'Finance, Payroll & Statutory Compliance',
    description:
      'End-to-end payroll, GST, PF, ESI, TDS, professional tax, export compliance. Audit-ready, always.',
  },
  {
    title: 'Culture & Engagement',
    description:
      'Town halls, outings, wellness programmes — the deliberate work of keeping a company feeling like one through every growth phase.',
  },
  {
    title: 'HR, Onboarding & Employee Welfare',
    description: 'Owning the entire employee experience until there was a dedicated HR function to hand it to.',
  },
  {
    title: 'Procurement & Vendor Management',
    description: 'Laptops to office supplies to insurance. Negotiated, consolidated, managed.',
  },
];

export const skillTags: string[] = [
  'Business Operations & Process Design',
  'Executive & Founder Support',
  'Finance, Payroll & Statutory Compliance',
  'Forex & Banking Management',
  'Legal & Contract Review',
  'HR, Onboarding & Employee Welfare',
  'Procurement & Vendor Management',
  'Office & Facilities Administration',
  'Stakeholder Management',
  'Travel & Logistics Coordination',
  'Employee Engagement',
  'Sales Management & Revenue Growth',
  'Inventory Management',
];

export type Achievement = {
  title: string;
  description: string;
};

export const achievementsLeft: Achievement[] = [
  {
    title: "Built a company's operations before the company existed.",
    description: 'A founding-level contribution to AntStack that no standard hire could replicate.',
  },
  {
    title: 'Ran the work of four to six specialists, simultaneously.',
    description:
      'Finance, legal, HR, banking, compliance, facilities and executive support — held together by one person.',
  },
  {
    title: 'Set up Forex banking infrastructure from scratch.',
    description: 'Seamless inward international remittances with full RBI governance compliance.',
  },
];

export const achievementsRight: Achievement[] = [
  {
    title: 'Created a contracts and legal review function where there was none.',
    description: 'Protecting commercial interests across every client and vendor engagement.',
  },
  {
    title: 'Migrated live payment infrastructure with zero downtime.',
    description: 'PayU to BillDesk and EBS at STYLETAG.com, without disrupting a single transaction.',
  },
  {
    title: '₹1 crore in 35 days.',
    description:
      'First assistant store manager in Karnataka to hit the mark during an End of Season Sale at Indus League Clothing.',
  },
];
