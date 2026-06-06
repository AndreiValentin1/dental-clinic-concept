import { Link } from 'react-router-dom';

import AppointmentForm from '../components/forms/AppointmentForm';
import Button from '../components/shared/Button';
import Container from '../components/shared/Container';
import InfoCard from '../components/shared/InfoCard';
import SectionHeader from '../components/shared/SectionHeader';
import {
  IconArrowRight,
  IconClock,
  IconMapPin,
  IconPhone,
} from '../components/shared/Icons';
import {
  contactMethods,
  formTrustItems,
  openingHours,
} from '../data/contact';
import { PHONE_HREF, WHATSAPP_HREF } from '../data/site';

function PageHero() {
  return (
    <section className="bg-cream-50 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
      <Container>
        <nav className="text-sm font-semibold text-ink-500" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-dental-blue-dark">
            Home
          </Link>
          <span className="mx-2 text-ink-500/60">/</span>
          <span className="text-ink-900">Contact</span>
        </nav>

        <div className="mt-8 max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-dental-blue-dark">
            Contact
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-6xl">
            Book a visit or ask{' '}
            <em className="font-serif italic text-dental-blue-dark">
              a question.
            </em>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-ink-500">
            Use the form for a demo appointment request, or contact the clinic directly
            by phone or WhatsApp. In a real version, this page would connect to the
            clinic&apos;s actual booking workflow.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={PHONE_HREF}>
              <IconPhone />
              Call clinic
            </Button>

            <Button href={WHATSAPP_HREF} variant="secondary">
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactMethodsSection() {
  return (
    <section className="bg-cream-50 pb-16">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {contactMethods.map(({ title, description, value, href, Icon }) => (
            <a key={title} href={href} className="block">
              <InfoCard
                icon={<Icon />}
                title={title}
                description={description}
                className="h-full transition hover:-translate-y-1 hover:border-dental-blue/40 hover:shadow-md"
              >
                <p className="mt-5 text-sm font-extrabold text-dental-blue-dark">
                  {value}
                </p>
              </InfoCard>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FormSection() {
  return (
    <section className="bg-cream-100 py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Appointment request"
              title="A form that feels simple, not clinical."
              description="Send a short request and the clinic will contact you to confirm the right type of appointment."
            />

            <div className="mt-10 grid gap-5">
              {formTrustItems.map(({ title, description, Icon }) => (
                <InfoCard
                  key={title}
                  icon={<Icon />}
                  title={title}
                  description={description}
                />
              ))}
            </div>
          </div>

          <AppointmentForm />
        </div>
      </Container>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="location" className="bg-cream-50 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="Location"
            title="Visit the clinic."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            The map area below is a placeholder. A production website would use
            Google Maps, OpenStreetMap, or a static map image depending on privacy
            and performance requirements.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-4xl border border-cream-200 bg-white shadow-sm lg:grid-cols-[1.2fr_0.8fr]">
          <div
            className="min-h-100 bg-[linear-gradient(135deg,rgba(91,142,166,0.18),rgba(111,174,155,0.2)),radial-gradient(circle_at_30%_35%,rgba(255,255,255,0.9),transparent_26%),linear-gradient(90deg,rgba(31,41,51,0.08)_1px,transparent_1px),linear-gradient(rgba(31,41,51,0.08)_1px,transparent_1px)] bg-size-[auto,auto,44px_44px,44px_44px]"
            aria-label="Map placeholder showing clinic location"
          />

          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold tracking-tight text-ink-900">
              [Brand Name]
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <div className="mt-1 grid h-10 w-10 flex-none place-items-center rounded-2xl bg-cream-100 text-dental-blue-dark">
                  <IconMapPin />
                </div>

                <p className="text-sm leading-7 text-ink-500">
                  <strong className="block text-ink-900">Address</strong>
                  [Street address placeholder], your city
                </p>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 grid h-10 w-10 flex-none place-items-center rounded-2xl bg-cream-100 text-dental-blue-dark">
                  <IconPhone />
                </div>

                <p className="text-sm leading-7 text-ink-500">
                  <strong className="block text-ink-900">Phone</strong>
                  +00 000 000 000
                </p>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 grid h-10 w-10 flex-none place-items-center rounded-2xl bg-cream-100 text-dental-blue-dark">
                  <IconClock />
                </div>

                <p className="text-sm leading-7 text-ink-500">
                  <strong className="block text-ink-900">Opening hours</strong>
                  Monday–Friday 09:00–19:00 · Saturday 09:00–14:00
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={PHONE_HREF}>Call</Button>
              <Button href={WHATSAPP_HREF} variant="secondary">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HoursSection() {
  return (
    <section id="hours" className="bg-dental-green/15 py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Schedule"
            title="Opening hours."
            description="In the final clinic version, holiday hours and emergency availability should be handled separately."
          />

          <div className="rounded-4xl border border-cream-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="divide-y divide-cream-200">
              {openingHours.map(([day, hours]) => (
                <div
                  key={day}
                  className="flex items-center justify-between gap-6 py-4 text-sm"
                >
                  <span className="font-extrabold text-ink-900">{day}</span>
                  <span className="font-semibold text-ink-500">{hours}</span>
                </div>
              ))}
            </div>
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
              Prefer to speak directly?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              Call or message the clinic. For urgent issues, direct contact is better
              than waiting for a form reply.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href={PHONE_HREF} variant="gold">
              Call now
              <IconArrowRight />
            </Button>

            <Button href={WHATSAPP_HREF} variant="ghost">
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactMethodsSection />
      <FormSection />
      <LocationSection />
      <HoursSection />
      <FinalCTA />
    </>
  );
}

export default ContactPage;