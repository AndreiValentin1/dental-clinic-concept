import {
  IconCalendar,
  IconShield,
  IconSmile,
  IconSparkle,
  IconTooth,
} from '../components/shared/Icons';

export const heroStats = [
  {
    value: '5 / 7 days',
    label: 'Weekly availability',
  },
  {
    value: 'Your city',
    label: 'Central, easy to reach',
  },
  {
    value: 'Online',
    label: 'Book in a few minutes',
  },
];

export const trustItems = [
  {
    title: 'Experienced team',
    description:
      'Dentists and assistants with experience in general and cosmetic dentistry.',
    Icon: IconSmile,
  },
  {
    title: 'Personalized plan',
    description:
      'Treatment adapted to each patient, with options explained step by step.',
    Icon: IconShield,
  },
  {
    title: 'Clear communication',
    description:
      'Diagnosis, options, and estimated costs — explained transparently.',
    Icon: IconCalendar,
  },
  {
    title: 'Convenient location',
    description:
      'Centrally located and easy to reach by public transport.',
    Icon: IconTooth,
  },
];

export const featuredServices = [
  {
    title: 'Check-up & prevention',
    description:
      'Complete examination, professional cleaning, and a personalized prevention plan.',
    to: '/services#consultation',
    Icon: IconCalendar,
  },
  {
    title: 'Cosmetic dentistry',
    description:
      'Professional whitening, veneers, and restoring the shape and color of your teeth.',
    to: '/services#cosmetic',
    Icon: IconSparkle,
  },
  {
    title: 'Restorations & fillings',
    description:
      'Treating cavities with modern, tooth-colored materials built to last.',
    to: '/services#restoration',
    Icon: IconShield,
  },
  {
    title: 'Endodontics',
    description:
      'Root canal treatments with modern protocols and careful technique.',
    to: '/services#endodontics',
    Icon: IconTooth,
  },
  {
    title: 'Prosthetics & crowns',
    description:
      'Crowns, bridges, and fixed or removable prosthetic work, as needed.',
    to: '/services#prosthetics',
    Icon: IconSmile,
  },
  {
    title: 'Implantology',
    description:
      'Replacing missing teeth with durable implants, carefully planned.',
    to: '/services#implants',
    Icon: IconTooth,
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Booking',
    description:
      'Reach us by phone, on WhatsApp, or through the form on this site.',
  },
  {
    number: '02',
    title: 'Consultation',
    description:
      'Examination, X-rays if needed, and a conversation about your goals.',
  },
  {
    number: '03',
    title: 'Treatment plan',
    description:
      'You receive a written plan with stages, durations, and estimated costs.',
  },
  {
    number: '04',
    title: 'Treatment',
    description:
      "We start when you're ready, and follow up afterwards with check-ups.",
  },
];

export const reviews = [
  {
    initial: 'A',
    quote:
      "I came in nervous and left with a clear plan. The dentist explained everything without rushing, and I never felt pressured to accept something I didn't understand.",
  },
  {
    initial: 'B',
    quote:
      'A root canal done patiently. The equipment is modern, but the real difference is the atmosphere — everything puts you at ease.',
  },
  {
    initial: 'C',
    quote:
      "I had veneers done and I'm really happy. The dentist listened to what I wanted, and the result looks natural — exactly what I was hoping for.",
  },
];