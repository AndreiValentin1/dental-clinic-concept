import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { PHONE_HREF, WHATSAPP_HREF, navLinks } from '../../data/site';

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

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2s-.8.9-.9 1.1c-.2.2-.3.2-.6.1s-1.2-.4-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4 0-.1-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.9.9-3.1-.2-.3C4 14.9 3.5 13.5 3.5 12 3.5 7.3 7.3 3.5 12 3.5S20.5 7.3 20.5 12 16.7 20 12 20z" />
    </svg>
  );
}

function LanguageSwitchMobile() {
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
      className="flex rounded-full border border-cream-200 bg-white p-1 text-xs font-bold"
      role="group"
      aria-label="Language"
    >
      {['en', 'ro'].map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => updateLang(item)}
          className={[
            'rounded-full px-3 py-1.5 uppercase transition',
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

function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-ink-900/45"
        aria-label="Close menu"
        onClick={onClose}
      />

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-cream-50 p-5 shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <LanguageSwitchMobile />

          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full border border-cream-200 bg-white text-ink-900"
            aria-label="Close menu"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  'rounded-2xl px-4 py-4 text-base font-bold transition',
                  isActive
                    ? 'bg-white text-dental-blue-dark shadow-sm'
                    : 'text-ink-700 hover:bg-white/70',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-dental-blue-dark px-4 py-3 text-sm font-bold text-white"
          >
            <PhoneIcon />
            Call
          </a>

          <a
            href={WHATSAPP_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-4 py-3 text-sm font-bold text-white"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </aside>
    </div>
  );
}

export default MobileMenu;