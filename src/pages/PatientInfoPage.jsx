import { Link } from 'react-router-dom';

import Button from '../components/shared/Button';
import Container from '../components/shared/Container';
import InfoCard from '../components/shared/InfoCard';
import SectionHeader from '../components/shared/SectionHeader';
import {
  IconAlertCircle,
  IconArrowRight,
  IconPhone,
} from '../components/shared/Icons';
import {
  aftercareGuides,
  emergencyItems,
  faqItems,
  firstVisitSteps,
  infoCards,
  paymentNotes,
} from '../data/patientInfo';
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from '../data/site';

function PageHero() {
  return (
    <section className="bg-cream-50 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
      <Container>
        <nav className="text-sm font-semibold text-ink-500" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-dental-blue-dark">
            Home
          </Link>
          <span className="mx-2 text-ink-500/60">/</span>
          <span className="text-ink-900">Patient info</span>
        </nav>

        <div className="mt-8 max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-dental-blue-dark">
            Patient info
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-6xl">
            Everything you need before{' '}
            <em className="font-serif italic text-dental-blue-dark">
              your visit.
            </em>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-ink-500">
            Practical information for new and returning patients: how the first visit
            works, what to bring, when to call urgently, and what to expect after
            treatment.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/contact">
              Book appointment
              <IconArrowRight />
            </Button>

            <Button href={PHONE_HREF} variant="secondary">
              <IconPhone />
              {PHONE}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FirstVisitSection() {
  return (
    <section className="bg-cream-50 pb-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="First visit"
            title="A simple, clear process."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            The first appointment is about understanding the situation, not rushing
            into treatment. You should leave knowing what comes next.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {firstVisitSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-cream-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-dental-gold">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-ink-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-ink-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PracticalInfoSection() {
  return (
    <section className="bg-cream-100 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="Useful details"
            title="Before you arrive."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            These details reduce uncertainty and make the appointment easier for both
            patient and clinic team.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {infoCards.map(({ title, description, Icon }) => (
            <InfoCard
              key={title}
              icon={<Icon />}
              title={title}
              description={description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function EmergencySection() {
  return (
    <section className="bg-cream-50 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Urgent situations"
              title="When should you call quickly?"
            />

            <p className="mt-6 text-base leading-8 text-ink-500">
              This section is not a diagnosis tool. It simply helps patients understand
              which situations should not be delayed.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={PHONE_HREF}>
                Call clinic
              </Button>

              <Button href={WHATSAPP_HREF} variant="secondary">
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {emergencyItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-dental-gold/30 bg-dental-gold/10 p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-dental-gold">
                  <IconAlertCircle />
                </div>

                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-ink-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-ink-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AftercareSection() {
  return (
    <section className="bg-dental-green/15 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="Aftercare"
            title="General guidance after treatment."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            The final clinic version would include downloadable PDFs or treatment-specific
            instructions. These are placeholder examples.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {aftercareGuides.map((guide) => (
            <article
              key={guide.title}
              className="rounded-3xl border border-cream-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-extrabold tracking-tight text-ink-900">
                {guide.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {guide.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-7 text-ink-600">
                    <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-dental-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PaymentSection() {
  return (
    <section className="bg-cream-50 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="Costs & planning"
            title="Clear estimates before treatment."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            Treatment costs depend on diagnosis, materials, complexity, and timing.
            The honest way is to explain options after consultation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {paymentNotes.map(({ title, description, Icon }) => (
            <InfoCard
              key={title}
              icon={<Icon />}
              title={title}
              description={description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-cream-100 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Questions"
            title="Common questions."
            description="A practical FAQ section helps patients self-qualify and reduces repetitive calls."
          />

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-3xl border border-cream-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-lg font-extrabold tracking-tight text-ink-900">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-dental-blue-dark transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-ink-500">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-cream-50 py-20">
      <Container>
        <div className="grid gap-8 rounded-4xl bg-dental-blue-dark p-8 text-white shadow-lg sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Still not sure what kind of appointment you need?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              Send us a short message. We&apos;ll guide you toward the right type
              of visit based on your situation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button to="/contact" variant="gold">
              Contact clinic
              <IconArrowRight />
            </Button>

            <Button to="/services" variant="ghost">
              View services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PatientInfoPage() {
  return (
    <>
      <PageHero />
      <FirstVisitSection />
      <PracticalInfoSection />
      <EmergencySection />
      <AftercareSection />
      <PaymentSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

export default PatientInfoPage;