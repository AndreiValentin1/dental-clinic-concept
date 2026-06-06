import { Link } from 'react-router-dom';

import { PHONE, PHONE_HREF, WHATSAPP_HREF } from '../../data/site';
import BrandMark from './BrandMark';

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

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12A10 10 0 1 0 10.4 22v-7.1H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4V22A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 pb-24 pt-16 text-white sm:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <BrandMark light />

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              A concept website for a modern dental clinic. Calm, attentive care with clear
              communication and a welcoming space.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <PhoneIcon />
                {PHONE}
              </a>

              <a
                href={WHATSAPP_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-2 text-sm font-bold text-white"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/15"
              >
                <FacebookIcon />
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-extrabold tracking-tight">Clinic</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>
                <Link to="/about" className="transition hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/smile-results" className="transition hover:text-white">
                  Results
                </Link>
              </li>
              <li>
                <Link to="/patient-info" className="transition hover:text-white">
                  Patient info
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold tracking-tight">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>[Street address placeholder]</li>
              <li>Your city</li>
              <li>hello@yourclinic.example</li>
              <li>{PHONE}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold tracking-tight">Hours</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>Monday – Friday · 09:00–19:00</li>
              <li>Saturday · 09:00–14:00</li>
              <li>Sunday · closed</li>
              <li>
                <em>indicative hours</em>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {currentYear} [Brand Name]. Dental clinic concept — demo website with placeholder
            content.
          </span>
          <span>Terms · Privacy · Cookies</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;