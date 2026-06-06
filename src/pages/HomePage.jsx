import Button from '../components/shared/Button';
import Container from '../components/shared/Container';
import InfoCard from '../components/shared/InfoCard';
import PhotoPlaceholder from '../components/shared/PhotoPlaceholder';
import SectionHeader from '../components/shared/SectionHeader';
import ServiceCard from '../components/shared/ServiceCard';
import StatPill from '../components/shared/StatPill';
import {
  IconArrowRight,
  IconClock,
  IconMapPin,
  IconPhone,
  IconStar,
} from '../components/shared/Icons';
import {
  featuredServices,
  heroStats,
  processSteps,
  reviews,
  trustItems,
} from '../data/home';
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from '../data/site';

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream-50 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-dental-blue-dark">
              Modern dental care
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              Attentive care for{' '}
              <em className="font-serif italic text-dental-blue-dark">
                your
              </em>{' '}
              smile.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-500">
              At [Brand Name] we offer dental consultations and treatments in a calm,
              modern, and welcoming environment. Our team listens to your needs first,
              then explains your options clearly — no pressure and no unrealistic promises.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/contact">
                Book a consultation
                <IconArrowRight />
              </Button>

              <Button to="/services" variant="secondary">
                View services
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <StatPill
                  key={item.label}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </div>
          </div>

          <PhotoPlaceholder
            label="[ CLINIC PHOTO — reception / treatment room ]"
            className="min-h-120 lg:min-h-150"
          />
        </div>
      </Container>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="bg-cream-50 pb-16">
      <Container>
        <div className="grid overflow-hidden rounded-4xl border border-cream-200 bg-white shadow-sm md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ title, description, Icon }) => (
            <InfoCard
              key={title}
              icon={<Icon />}
              title={title}
              description={description}
              className="rounded-none border-0 border-b md:border-r lg:border-b-0"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-cream-50 py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="mx-auto w-full max-w-107.5 lg:mx-0">
            <PhotoPlaceholder
              label="[ PORTRAIT — lead dentist ]"
              className="aspect-4/5 min-h-0"
            />
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-dental-blue-dark">
              About the clinic
            </p>

            <h2 className="mt-5 max-w-[12ch] font-serif text-[clamp(42px,5vw,68px)] leading-[1.02] tracking-[-0.02em] text-ink-900">
              A calm, step-by-step approach, with you.
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-ink-700 sm:text-lg">
              <p>
                Many people put off the dentist out of fear or past bad experiences.
                With us, the first step is always a conversation: we listen, examine
                gently, and propose a plan that makes sense for you.
              </p>

              <p>
                Dr. [Name] leads the clinic team, with a focus on general dentistry,
                restoration, and cosmetic care. We work with quality materials and
                modern equipment — but we believe the real difference is the time spent
                with each patient.
              </p>
            </div>

            <div className="mt-8">
              <Button to="/about" variant="secondary">
                Meet the team
                <IconArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-cream-100 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="Services"
            title="Everything your smile needs, under one roof."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            From preventive check-ups to cosmetic and prosthetic work — together we
            choose the right solution for your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map(({ title, description, to, Icon }) => (
            <ServiceCard
              key={title}
              title={title}
              description={description}
              to={to}
              icon={<Icon />}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/services">
            View all services
            <IconArrowRight />
          </Button>
        </div>
      </Container>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-cream-50 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="How it works"
            title="From the first message to the final smile."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            A simple process, with no surprises. We tell you clearly at every step
            what comes next and why.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
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

function ReviewsSection() {
  return (
    <section className="bg-dental-green/15 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="What our patients say"
            title="Sample reviews."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            The quotes below are placeholders for this concept — they would be replaced
            with real reviews from Google and Facebook.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.initial}
              className="rounded-3xl border border-cream-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-1 text-dental-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IconStar key={index} />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-ink-700">
                “{review.quote}”
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-dental-blue-dark text-sm font-extrabold text-white">
                  {review.initial}
                </div>
                <div>
                  <strong className="block text-sm font-extrabold text-ink-900">
                    Sample patient
                  </strong>
                  <span className="text-xs font-semibold text-ink-500">
                    Placeholder review
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function LocationSection() {
  const locationRows = [
    {
      icon: <IconMapPin />,
      title: 'Address',
      body: '[Street address placeholder], your city',
    },
    {
      icon: <IconClock />,
      title: 'Hours',
      body: 'Mon–Fri 09–19 · Sat 09–14 · Sun closed',
    },
    {
      icon: <IconPhone />,
      title: 'Phone',
      body: PHONE,
    },
  ];

  return (
    <section className="bg-cream-50 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="Location"
            title="Find us in your city."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            Address, hours, and contact details — all in one place. The map is a
            placeholder and would be replaced with a live map in the final version.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-4xl border border-cream-200 bg-white shadow-sm lg:grid-cols-[1.2fr_0.8fr]">
          <div
            className="min-h-90 bg-[linear-gradient(135deg,rgba(91,142,166,0.18),rgba(111,174,155,0.2)),radial-gradient(circle_at_30%_35%,rgba(255,255,255,0.9),transparent_26%),linear-gradient(90deg,rgba(31,41,51,0.08)_1px,transparent_1px),linear-gradient(rgba(31,41,51,0.08)_1px,transparent_1px)] bg-size-[auto,auto,44px_44px,44px_44px]"
            aria-label="Map showing the clinic location"
          />

          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-extrabold tracking-tight text-ink-900">
              [Brand Name] dental clinic
            </h3>

            <div className="mt-6 space-y-5">
              {locationRows.map((row) => (
                <div key={row.title} className="flex gap-3">
                  <div className="mt-1 grid h-10 w-10 flex-none place-items-center rounded-2xl bg-cream-100 text-dental-blue-dark">
                    {row.icon}
                  </div>

                  <p className="text-sm leading-7 text-ink-500">
                    <strong className="block text-ink-900">{row.title}</strong>
                    {row.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact">Book now</Button>
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

function FinalCTA() {
  return (
    <section className="bg-cream-50 pb-20">
      <Container>
        <div className="grid gap-8 rounded-4xl bg-dental-blue-dark p-8 text-white shadow-lg sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to take the first step for your smile?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              Book an initial consultation. We'll talk with no obligation, no pressure,
              and give you a clear plan.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button to="/contact" variant="gold">
              Book online
            </Button>

            <Button href={PHONE_HREF} variant="ghost">
              Call now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutPreview />
      <ServicesPreview />
      <ProcessSection />
      <ReviewsSection />
      <LocationSection />
      <FinalCTA />
    </>
  );
}

export default HomePage;