import { Link } from 'react-router-dom';

function ToothIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 4.2c-1.8-1.4-4.2-1.6-5.7-.4C4.6 5.2 4.3 7.6 5 10c.5 1.7.6 3.4.8 5.2.2 1.8.5 4.6 1.7 4.6 1 0 1.1-2 1.5-3.6.3-1.2.6-2.2 3-2.2s2.7 1 3 2.2c.4 1.6.5 3.6 1.5 3.6 1.2 0 1.5-2.8 1.7-4.6.2-1.8.3-3.5.8-5.2.7-2.4.4-4.8-1.3-6.2-1.5-1.2-3.9-1-5.7.4z" />
    </svg>
  );
}

function BrandMark({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span
        className={[
          'grid h-11 w-11 place-items-center rounded-2xl border shadow-sm',
          light
            ? 'border-white/15 bg-white/10 text-white'
            : 'border-cream-200 bg-white text-dental-blue-dark',
        ].join(' ')}
        aria-hidden="true"
      >
        <ToothIcon />
      </span>

      <span className="leading-tight">
        <span
          className={[
            'block text-base font-extrabold tracking-tight',
            light ? 'text-white' : 'text-ink-900',
          ].join(' ')}
        >
          [Brand Name]
        </span>
        <span
          className={[
            'block text-xs font-medium',
            light ? 'text-white/65' : 'text-ink-500',
          ].join(' ')}
        >
          Local Dental Clinic
        </span>
      </span>
    </Link>
  );
}

export default BrandMark;