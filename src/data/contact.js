import {
  IconCalendar,
  IconClock,
  IconMapPin,
  IconPhone,
  IconShield,
} from '../components/shared/Icons';

export const contactMethods = [
  {
    title: 'Call us',
    description: 'For appointments, questions, or urgent dental situations.',
    value: '+00 000 000 000',
    href: 'tel:+0000000000',
    Icon: IconPhone,
  },
  {
    title: 'Clinic address',
    description: 'Central location, easy to reach by public transport.',
    value: '[Street address placeholder], your city',
    href: '#location',
    Icon: IconMapPin,
  },
  {
    title: 'Opening hours',
    description: 'Monday–Friday 09:00–19:00 · Saturday 09:00–14:00.',
    value: 'View schedule',
    href: '#hours',
    Icon: IconClock,
  },
];

export const appointmentTypes = [
  'First consultation',
  'Check-up / prevention',
  'Tooth pain',
  'Cosmetic consultation',
  'Implant consultation',
  'Child appointment',
  'Emergency request',
  'Other',
];

export const preferredTimes = [
  'Morning',
  'Afternoon',
  'Evening',
  'First available',
];

export const formTrustItems = [
  {
    title: 'No obligation',
    description:
      'The appointment request does not commit you to treatment.',
    Icon: IconShield,
  },
  {
    title: 'Clear next step',
    description:
      'The clinic would confirm availability before the visit.',
    Icon: IconCalendar,
  },
  {
    title: 'Private message',
    description:
      'Only necessary contact details and appointment notes should be collected.',
    Icon: IconShield,
  },
];

export const openingHours = [
  ['Monday', '09:00 – 19:00'],
  ['Tuesday', '09:00 – 19:00'],
  ['Wednesday', '09:00 – 19:00'],
  ['Thursday', '09:00 – 19:00'],
  ['Friday', '09:00 – 19:00'],
  ['Saturday', '09:00 – 14:00'],
  ['Sunday', 'Closed'],
];