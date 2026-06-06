import { Link } from 'react-router-dom';

import BeforeAfterPlaceholder from '../components/shared/BeforeAfterPlaceholder';
import Button from '../components/shared/Button';
import Container from '../components/shared/Container';
import SectionHeader from '../components/shared/SectionHeader';
import {
  IconAlertCircle,
  IconArrowRight,
  IconSparkle,
} from '../components/shared/Icons';
import {
  resultCases,
  resultCategories,
  resultNotes,
  resultProcess,
} from '../data/results';

function PageHero() {
  return (
    <section className="bg-cream-50 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
      <Container>
        <nav className="text-sm font-semibold text-ink-500" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-dental-blue-dark">
            Home
          </Link>
          <span className="mx-2 text-ink-500/60">/</span>
          <span className="text-ink-900">Smile results</span>
        </nav>

        <div className="mt-8 max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-dental-blue-dark">
            Smile results
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-6xl">
            Example transformations,{' '}
            <em className="font-serif italic text-dental-blue-dark">
              shown responsibly.
            </em>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-ink-500">
            This concept page shows how a clinic can present treatment results
            clearly without overpromising. Real photos would require written patient
            consent and case-specific context.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {resultCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-cream-200 bg-white px-4 py-2 text-sm font-bold text-ink-700 shadow-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DisclaimerBox() {
  return (
    <section className="bg-cream-50 pb-12">
      <Container>
        <div className="flex gap-4 rounded-4xl border border-dental-gold/30 bg-dental-gold/10 p-6 text-ink-700 sm:p-8">
          <div className="mt-1 grid h-11 w-11 flex-none place-items-center rounded-2xl bg-white text-dental-gold">
            <IconAlertCircle />
          </div>

          <div>
            <h2 className="text-lg font-extrabold tracking-tight text-ink-900">
              Important note
            </h2>

            <ul className="mt-3 grid gap-2 text-sm leading-7 text-ink-600 md:grid-cols-2">
              {resultNotes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-dental-gold" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CaseCard({ item }) {
  return (
    <article className="rounded-4xl border border-cream-200 bg-white p-4 shadow-sm">
      <BeforeAfterPlaceholder label={item.category} />

      <div className="p-2 pt-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cream-100 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-dental-blue-dark">
            {item.category}
          </span>

          <span className="rounded-full bg-dental-green/15 px-3 py-1 text-xs font-bold text-ink-500">
            {item.duration}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-extrabold tracking-tight text-ink-900">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-ink-500">
          {item.description}
        </p>

        <div className="mt-5 rounded-2xl bg-cream-50 p-4">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-ink-500">
            Treatment
          </p>

          <p className="mt-1 text-sm font-bold text-ink-900">
            {item.treatment}
          </p>
        </div>
      </div>
    </article>
  );
}

function CasesSection() {
  return (
    <section className="bg-cream-50 pb-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="Cases"
            title="Result gallery structure"
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            The layout is built for real cases later: category, treatment type,
            estimated duration, and before/after visuals with consent.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {resultCases.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-cream-100 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="Planning"
            title="Aesthetic work should start with a realistic plan."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            Smile transformations are not one-size-fits-all. Diagnosis, tooth
            structure, gum health, bite, and expectations all matter.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {resultProcess.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-cream-200 bg-white p-6 shadow-sm"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cream-100 text-dental-blue-dark">
                <IconSparkle />
              </div>

              <div className="mt-5 text-sm font-extrabold uppercase tracking-[0.22em] text-dental-gold">
                {step.number}
              </div>

              <h3 className="mt-4 text-xl font-extrabold tracking-tight text-ink-900">
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

function FinalCTA() {
  return (
    <section className="bg-cream-50 py-20">
      <Container>
        <div className="grid gap-8 rounded-4xl bg-dental-blue-dark p-8 text-white shadow-lg sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Curious what is realistic for your smile?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              Start with a consultation. We&apos;ll explain your options,
              limitations, and expected stages before any treatment decision.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button to="/contact" variant="gold">
              Book consultation
              <IconArrowRight />
            </Button>

            <Button to="/services" variant="ghost">
              View treatments
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SmileResultsPage() {
  return (
    <>
      <PageHero />
      <DisclaimerBox />
      <CasesSection />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}

export default SmileResultsPage;