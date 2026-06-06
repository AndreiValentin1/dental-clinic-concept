import {
  IconAlertCircle,
  IconCalendar,
  IconShield,
  IconSmile,
  IconTooth,
} from '../components/shared/Icons';

export const firstVisitSteps = [
  {
    number: '01',
    title: 'Book your appointment',
    description:
      'Call, message us on WhatsApp, or use the contact form. Tell us briefly what bothers you and when you are available.',
  },
  {
    number: '02',
    title: 'Initial consultation',
    description:
      'We review your symptoms, medical history, and dental goals. If needed, we recommend imaging before planning treatment.',
  },
  {
    number: '03',
    title: 'Clear treatment plan',
    description:
      'You receive a written plan with recommended stages, estimated costs, and alternatives where appropriate.',
  },
  {
    number: '04',
    title: 'You decide calmly',
    description:
      'Treatment starts only after you understand the plan and agree with the next step.',
  },
];

export const infoCards = [
  {
    title: 'What to bring',
    description:
      'Any recent dental X-rays, previous treatment notes if available, your ID, and a list of relevant medical conditions or medication.',
    Icon: IconCalendar,
  },
  {
    title: 'Nervous patients',
    description:
      'Tell us if you feel anxious. We can take things slowly, explain each step, and avoid surprises during the visit.',
    Icon: IconSmile,
  },
  {
    title: 'Children',
    description:
      'The first visit should be relaxed and friendly. The goal is to help the child get familiar with the clinic.',
    Icon: IconTooth,
  },
  {
    title: 'Hygiene & safety',
    description:
      'Sterilization, single-use materials where appropriate, and clear hygiene protocols are part of the clinical workflow.',
    Icon: IconShield,
  },
];

export const emergencyItems = [
  {
    title: 'Severe tooth pain',
    description:
      'Pain that does not calm down, wakes you at night, or becomes worse when biting should be checked quickly.',
  },
  {
    title: 'Swelling or infection signs',
    description:
      'Facial swelling, fever, bad taste, or pus can indicate infection and should not be delayed.',
  },
  {
    title: 'Broken tooth or restoration',
    description:
      'A broken tooth, crown, or filling may need temporary protection before definitive treatment.',
  },
  {
    title: 'Dental trauma',
    description:
      'After a hit or fall, especially if a tooth moves, breaks, or comes out, contact a dental clinic as soon as possible.',
  },
];

export const aftercareGuides = [
  {
    title: 'After professional cleaning',
    items: [
      'Avoid strongly colored food or drinks for a few hours if advised.',
      'Mild sensitivity can happen and usually settles.',
      'Continue brushing and flossing as instructed.',
    ],
  },
  {
    title: 'After a filling',
    items: [
      'Avoid chewing hard food until anesthesia wears off.',
      'Call us if the bite feels too high after the numbness disappears.',
      'Mild sensitivity can be normal for a short period.',
    ],
  },
  {
    title: 'After extraction or surgery',
    items: [
      'Follow the written instructions given by the dentist.',
      'Do not smoke or rinse aggressively in the first hours if advised.',
      'Contact us if pain, bleeding, or swelling becomes unusual.',
    ],
  },
];

export const faqItems = [
  {
    question: 'Do I need an X-ray at the first visit?',
    answer:
      'Not always. The dentist decides after examining you. If imaging is needed, we explain why before recommending it.',
  },
  {
    question: 'Can I get a price before consultation?',
    answer:
      'For simple procedures, an approximate range may be possible. For real treatment planning, a consultation is needed.',
  },
  {
    question: 'Do you treat dental emergencies?',
    answer:
      'This concept page includes an emergency contact structure. The real clinic version would show exact availability and phone handling.',
  },
  {
    question: 'Are the results guaranteed?',
    answer:
      'No responsible clinic should guarantee biological outcomes. Good planning improves predictability, but every patient is different.',
  },
  {
    question: 'Can treatment be done in stages?',
    answer:
      'Often, yes. When appropriate, the dentist can prioritize urgent needs first and plan the rest over time.',
  },
];

export const paymentNotes = [
  {
    title: 'Written estimates',
    description:
      'You receive the proposed treatment stages and estimated costs before starting.',
    Icon: IconShield,
  },
  {
    title: 'Phased treatment',
    description:
      'For larger plans, treatment can sometimes be organized in stages.',
    Icon: IconCalendar,
  },
  {
    title: 'No pressure',
    description:
      'You decide after the diagnosis, options, and costs are clear.',
    Icon: IconAlertCircle,
  },
];