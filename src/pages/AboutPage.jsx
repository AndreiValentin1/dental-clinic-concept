import { Link } from 'react-router-dom';

import Button from '../components/shared/Button';
import Container from '../components/shared/Container';
import PhotoPlaceholder from '../components/shared/PhotoPlaceholder';
import SectionHeader from '../components/shared/SectionHeader';
import { IconArrowRight } from '../components/shared/Icons';
import { clinicTourPhotos, clinicValues, teamMembers } from '../data/about';

function PageHero() {
  return (
    <section className="bg-cream-50 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
      <Container>
        <nav className="text-sm font-semibold text-ink-500" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-dental-blue-dark">
            Home
          </Link>
          <span className="mx-2 text-ink-500/60">/</span>
          <span className="text-ink-900">About</span>
        </nav>

        <div className="mt-8 max-w-5xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-dental-blue-dark">
            About us
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-6xl">
            A small clinic, built around one simple principle:{' '}
            <em className="font-serif italic text-dental-blue-dark">
              time for every patient.
            </em>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-ink-500">
            We&apos;re a small team of dentists and assistants who believe that
            good dentistry means, above all, listening. Then treating with
            patience, good materials, and without rushing.
          </p>
        </div>
      </Container>
    </section>
  );
}

function StorySection() {
  return (
    <section className="bg-cream-50 py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-dental-blue-dark">
              Our story
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              We started from a common frustration.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-ink-500 sm:text-lg">
              <p>
                Over the years, many patients told us the same thing: that at the
                dentist they feel rushed, that things aren&apos;t explained well
                enough, and that they leave with more questions than they arrived
                with.
              </p>

              <p>
                [Brand Name] is a response to that. We book fewer patients per
                day, so we have time to listen and explain. We invest in materials
                and equipment for durable results — but we believe the real
                difference is the relationship between dentist and patient.
              </p>

              <p>
                We&apos;re a small clinic because we want to be. And that won&apos;t
                change.
              </p>
            </div>
          </div>

          <PhotoPlaceholder
            label="[ PHOTO — reception / waiting area ]"
            className="min-h-120"
          />
        </div>
      </Container>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-cream-100 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="Our values"
            title="Things we don't compromise on."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            These are the principles we apply every day, with every patient —
            not just on the website.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {clinicValues.map((value) => (
            <article
              key={value.number}
              className="rounded-3xl border border-cream-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-dental-gold">
                {value.number}
              </div>

              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-ink-900">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-ink-500">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-cream-50 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="The team"
            title="The people you'll meet."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            Photos and descriptions are placeholders — they would be replaced
            with real photos and short team bios.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={`${member.name}-${member.role}`}
              className="rounded-3xl border border-cream-200 bg-white p-4 shadow-sm"
            >
              <PhotoPlaceholder
                label="[ PORTRAIT ]"
                variant={member.variant}
                className="min-h-70 rounded-3xl"
              />

              <div className="p-2 pt-5">
                <h3 className="text-lg font-extrabold tracking-tight text-ink-900">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-bold text-dental-blue-dark">
                  {member.role}
                </p>

                <p className="mt-3 text-sm leading-7 text-ink-500">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ClinicTourSection() {
  return (
    <section className="bg-dental-green/15 py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="The practice"
            title="A space designed to put you at ease."
          />

          <p className="max-w-2xl text-base leading-8 text-ink-500 lg:justify-self-end">
            Natural light, a calm atmosphere, and a space that feels welcoming.
            The details matter.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4 lg:auto-rows-fr">
          {clinicTourPhotos.map((photo) => (
            <PhotoPlaceholder
              key={photo.label}
              label={photo.label}
              variant={photo.variant}
              className={photo.className}
            />
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
              Want to get to know the clinic before any treatment?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              We invite you to an initial consultation. See the practice, meet
              the team, get a plan, and then decide calmly whether you&apos;d
              like to move forward.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button to="/contact" variant="gold">
              Book a visit
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

function AboutPage() {
  return (
    <>
      <PageHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <ClinicTourSection />
      <FinalCTA />
    </>
  );
}

export default AboutPage;