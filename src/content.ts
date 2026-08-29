import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Vikrant Singh',
  role: 'IPS Officer',
  tagline: 'Upholding law, protecting citizens',
  photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  email: 'off.vikrantsingh@ips',
  phone: '+91 97000 11100',
  location: 'New Delhi, India',
  languages: ['English', 'Hindi', 'Punjabi'],
  socials: [
    { label: 'Gov Portal', href: 'https://example.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Email', href: 'mailto:off.vikrantsingh@ips' },
  ],
  about: [
    'I am an Indian Police Service officer committed to upholding the law and protecting communities. Over 13 years, I have led police operations, crime investigation and community policing with discipline and resolve.',
    'I believe the badge carries a duty to both enforce the law and earn public trust. My leadership focuses on modern policing, forensic rigor, and a visible, accountable presence that reduces crime and builds confidence.',
  ],
  services: [
    { title: 'Law & Order', desc: 'Command and coordination of district policing that keeps public order stable through any event.', icon: '🛡️' },
    { title: 'Crime Investigation', desc: 'Evidence-led investigation with forensic rigour, from FIR to a conviction-ready charge sheet.', icon: '🔍' },
    { title: 'Community Policing', desc: 'Building trust through beats, public meetings and citizen outreach that cut crime at the source.', icon: '🤝' },
    { title: 'Cybercrime', desc: 'Digital forensics, fraud recovery and takedowns of online criminal networks.', icon: '💻' },
    { title: 'Anti-Narcotics', desc: 'Intelligence-led special operations that dismantle smuggling syndicates at scale.', icon: '🚔' },
    { title: 'Crisis Management', desc: 'Incident command for riots, disasters and terror threats with calm, decisive response.', icon: '🚨' },
  ],
  skills: [
    { name: 'Law Enforcement', level: 96, note: 'Operations & command' },
    { name: 'Crisis Management', level: 95, note: 'Law & order' },
    { name: 'Crime Investigation', level: 94, note: 'Forensics & evidence' },
    { name: 'Community Policing', level: 92, note: 'Trust & outreach' },
    { name: 'Cybercrime Forensics', level: 91, note: 'Digital forensics' },
  ],
  skillsIcons: [
    { name: 'Law Enforcement', note: 'Operations & command', icon: '🛡️' },
    { name: 'Crime Investigation', note: 'Forensics & evidence', icon: '🔍' },
    { name: 'Crisis Management', note: 'Law & order, terror', icon: '🚨' },
    { name: 'Public Safety', note: 'Community policing', icon: '🤝' },
  ],
  stats: [
    { label: 'Years in service', value: 13, suffix: '' },
    { label: 'Districts commanded', value: 4, suffix: '' },
    { label: 'Crime rate reduction', value: 20, suffix: '%' },
    { label: 'Cases solved', value: 3000, suffix: '+' },
  ],
  experience: [
    {
      role: 'Superintendent of Police',
      company: 'Navalpura District',
      period: '2021 — Present',
      desc: 'Command district police, driving a 20% reduction in crime through modern surveillance, forensics and community policing.',
    },
    {
      role: 'SP (Cybercrime)',
      company: 'State CID Cell',
      period: '2018 — 2021',
      desc: 'Established a dedicated cybercrime unit, leading hundreds of investigations and digital forensic operations.',
    },
    {
      role: 'Additional SP',
      company: 'Rampur Range',
      period: '2014 — 2018',
      desc: 'Led anti-narcotics and special operations, capturing major networks and dismantling smuggling rings.',
    },
  ],
  education: [
    {
      degree: 'M.A. – Police Administration',
      school: 'University of Madras',
      period: '2011 — 2013',
      desc: 'Advanced study of criminal law, forensic science and police leadership.',
    },
    {
      degree: 'B.Tech – Computer Science',
      school: 'National Institute of Technology',
      period: '2007 — 2011',
      desc: 'Technical grounding that later powered the district cybercrime unit.',
    },
  ],
  certificates: [
    'UPSC Civil Services — IPS (All India Rank 52)',
    'Sardar Vallabhbhai Patel National Police Academy',
    'FBI National Academy (International)',
    'Certified in Cybercrime & Digital Forensics',
  ],
  awards: [
    { title: 'Police Medal for Meritorious Service', detail: 'Central award for exceptional district-level crime control and community outreach.', year: '2023' },
    { title: 'President\'s Police Medal (Gallantry)', detail: 'Recognised for courage during a major coordinated counter-operation.', year: '2021' },
    { title: 'Best District Award', detail: 'State honour for the steepest crime reduction in the year.', year: '2019' },
  ],
  cards: [
    {
      title: 'Crime Reduction Drive',
      desc: 'Reformed patrolling and surveillance across the district, cutting overall crime 20% and property crime 32%.',
      stack: 'Policing Reform',
      metric: '-20% crime',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=400&fit=crop',
    },
    {
      title: 'Cybercrime Unit',
      desc: 'Built a specialist cyber unit, recovering ₹45 Cr in fraud cases and bringing online offenders to justice.',
      stack: 'Cyber Forensics',
      metric: '₹45 Cr recovered',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop',
    },
    {
      title: 'Anti-Narcotics Ops',
      desc: 'Executed a series of coordinated operations dismantling major syndicates and seizing large contraband.',
      stack: 'Special Ops',
      metric: 'Major rings dismantled',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'Citizen Connect Program',
      desc: 'Monthly community durbars and beat-officer systems that doubled public participation in safety.',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=500&fit=crop',
      tags: ['Community', 'Outreach'],
    },
    {
      title: 'Cyber Fraud Recovery Cell',
      desc: 'A rapid-response cell that froze and recovered ₹45 Cr for victims of online fraud.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['Cybercrime', 'Fraud'],
    },
    {
      title: 'District Ops Command Room',
      desc: 'A unified command room linking surveillance, calls and field units for faster response.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop',
      tags: ['Operations', 'Technology'],
    },
  ],
  hobbies: [
    { name: 'Marathon Running', note: 'Two full-marathon finishes', icon: '🏃' },
    { name: 'Chess', note: 'Club-level player', icon: '♟️' },
    { name: 'History Reading', note: 'Militaria & police memoirs', icon: '📖' },
    { name: 'Community Coaching', note: 'Training rural youth in sports', icon: '🏏' },
  ],
  testimonials: [
    {
      quote:
        'A disciplined officer who balances firm law enforcement with genuine community care. The district feels safer.',
      author: 'District Resident',
      role: 'Community',
    },
    {
      quote:
        'His modern cyber unit set a standard for the state. Effective, professional and inspiring to his team.',
      author: 'Senior Official',
      role: 'State Police HQ',
    },
  ],
  footnote: '© Vikrant Singh · React, TypeScript & Framer Motion',
  ticker: ['Law & Order', 'Crime Investigation', 'Community Policing', 'Cybercrime', 'Crisis Management', 'Anti-Narcotics'],

  blogPosts: [
    { title: 'Community Policing in Urban India', excerpt: 'Building trust between police and communities through innovative policing strategies.', date: '2024-01-04', tags: ['Policing', 'Community'], readTime: '10 min' },
    { title: 'Cybercrime Investigation: Modern Challenges', excerpt: 'How law enforcement is adapting to fight digital crimes.', date: '2023-12-20', tags: ['Cybercrime', 'Law Enforcement'], readTime: '9 min' },
  ],

  faqItems: [
    { question: 'What is your policing philosophy?', answer: 'I believe in community-oriented policing that builds trust while maintaining law and order.' },
    { question: 'What specialized units have you led?', answer: 'I have led anti-narcotics, cybercrime, and special operations units with significant success.' },
    { question: 'How do you handle modern security challenges?', answer: 'I combine traditional policing with technology, intelligence-led policing, and inter-agency coordination.' },
    { question: 'What reforms have you implemented?', answer: 'I have introduced community policing programs, digitized case management, and improved police-public relations.' },
  ],

  skillsDetailed: [
    { category: 'Policing', items: [
      { name: 'Law Enforcement', level: 95 },
      { name: 'Criminal Investigation', level: 92 },
      { name: 'Counter-Terrorism', level: 88 },
    ]},
    { category: 'Management', items: [
      { name: 'Crisis Management', level: 90 },
      { name: 'Community Relations', level: 88 },
      { name: 'Intelligence Analysis', level: 85 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'officer@police.gov.in', icon: '📧', href: 'mailto:officer@police.gov.in' },
    { type: 'Emergency', value: '100', icon: '🚨', href: 'tel:100' },
  ],
};