import { Link } from 'react-router-dom';

import Button from '../components/shared/Button';
import Container from '../components/shared/Container';
import SectionHeader from '../components/shared/SectionHeader';
import {
  IconAlertCircle,
  IconArrowRight,
} from '../components/shared/Icons';
import { serviceAnchors, services } from '../data/services';

function PageHero() {
  return (
    <section className="bg-cream-50 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
      <Container>
        <nav className="text-sm font-semibold text-ink-500" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-dental-blue-dark">
            Home
          </Link>
          <span className="mx-2 text-ink-500/60">/</span>
          <span className="text-ink-900">Services</span>
        </nav>

        <div className="mt-8 max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-dental-blue-dark">
            Services
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-6xl">
            Complete dentistry,{' '}
            <em className="font-serif italic text-dental-blue-dark">
              explained in plain language.
            </em>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-ink-500">
            From the first check-up to more complex work, we work with you step by
            step. Below you&apos;ll find our services, what each one involves, and
            who it&apos;s usually recommended for.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {serviceAnchors.map((anchor) => (
            <a
              key={anchor.href}
              href={anchor.href}
              className="rounded-full border border-cream-200 bg-white px-4 py-2 text-sm font-bold text-ink-700 shadow-sm transition hover:border-dental-blue/40 hover:text-dental-blue-dark"
            >
              {anchor.label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceRow({ service }) {
  const Icon = service.Icon;

  return (
    <article
      id={service.id}
      className="grid gap-6 rounded-4xl border border-cream-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.55fr_1.1fr_0.75fr]"
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream-100 text-dental-blue-dark">
            <Icon />
          </span>

          <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-dental-gold">
            {service.number}
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-ink-900">
          {service.title}
        </h2>
      </div>

      <div>
        <div className="space-y-4 text-base leading-8 text-ink-500">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <Button to={service.ctaTo} className="mt-6 px-4 py-2.5 text-sm">
          {service.ctaLabel}
          <IconArrowRight />
        </Button>
      </div>

      <aside className="rounded-3xl bg-cream-50 p-5">
        <h3 className="text-sm font-extrabold tracking-tight text-ink-900">
          {service.metaTitle}
        </h3>

        <ul className="mt-4 space-y-2.5">
          {service.items.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-6 text-ink-700">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-dental-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}

function CostNote() {
  return (
    <section className="bg-cream-50 pb-10">
      <Container>
        <div className="flex gap-4 rounded-4xl border border-dental-gold/30 bg-dental-gold/10 p-6 text-ink-700 sm:p-8">
          <div className="mt-1 grid h-11 w-11 flex-none place-items-center rounded-2xl bg-white text-dental-gold">
            <IconAlertCircle />
          </div>

          <div>
            <h2 className="text-lg font-extrabold tracking-tight text-ink-900">
              About costs
            </h2>

            <p className="mt-2 max-w-4xl text-sm leading-7 text-ink-600">
              We don&apos;t publish a fixed price list online because every situation
              is different. At your consultation, you receive a written estimate with
              treatment options and stages. Longer treatments can be phased when
              appropriate.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-cream-50 pb-20 pt-10">
      <Container>
        <div className="grid gap-8 rounded-4xl bg-dental-blue-dark p-8 text-white shadow-lg sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Not sure exactly what you need?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              Book a consultation. We&apos;ll examine you, explain what we see, and
              give you a written plan — only then do you decide whether to move
              forward.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button to="/contact" variant="gold">
              Book a consultation
            </Button>

            <Button to="/patient-info" variant="ghost">
              Patient information
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero />

      <section className="bg-cream-50 pb-12">
        <Container>
          <div className="mb-10">
            <SectionHeader
              eyebrow="Treatments"
              title="Service overview"
              description="Use this page as a clear overview. The real clinic version would include exact pricing ranges, doctor availability, and treatment-specific appointment flows where appropriate."
            />
          </div>

          <div className="space-y-5">
            {services.map((service) => (
              <ServiceRow key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CostNote />
      <FinalCTA />
    </>
  );
}

export default ServicesPage;