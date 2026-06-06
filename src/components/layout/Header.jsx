import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { PHONE, PHONE_HREF, navLinks } from '../../data/site';
import BrandMark from './BrandMark';
import MobileMenu from './MobileMenu';

function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LanguageSwitch() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('concept-lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const updateLang = (nextLang) => {
    setLang(nextLang);

    try {
      localStorage.setItem('concept-lang', nextLang);
    } catch {
      // localStorage can fail in strict/privacy contexts
    }
  };

  return (
    <div
      className="hidden rounded-full border border-cream-200 bg-white p-1 text-xs font-bold sm:flex"
      role="group"
      aria-label="Language"
    >
      {['en', 'ro'].map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => updateLang(item)}
          className={[
            'rounded-full px-2.5 py-1 uppercase transition',
            lang === item
              ? 'bg-dental-blue-dark text-white'
              : 'text-ink-500 hover:text-ink-900',
          ].join(' ')}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream-50/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
          <BrandMark />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'rounded-full px-4 py-2 text-sm font-semibold transition',
                    isActive
                      ? 'bg-white text-dental-blue-dark shadow-sm'
                      : 'text-ink-700 hover:bg-white/70 hover:text-dental-blue-dark',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitch />

            <a
              href={PHONE_HREF}
              className="hidden items-center gap-2 rounded-full border border-cream-200 bg-white px-4 py-2 text-sm font-bold text-ink-700 shadow-sm transition hover:border-dental-blue/40 hover:text-dental-blue-dark md:inline-flex"
              aria-label="Call the clinic"
            >
              <PhoneIcon />
              <span>{PHONE}</span>
            </a>

            <NavLink
              to="/contact"
              className="hidden rounded-full bg-dental-blue-dark px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-dental-blue md:inline-flex"
            >
              Book appointment
            </NavLink>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-200 bg-white text-ink-900 shadow-sm lg:hidden"
              aria-label="Open menu"
            >
              <span className="flex flex-col gap-1.5" aria-hidden="true">
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

export default Header;