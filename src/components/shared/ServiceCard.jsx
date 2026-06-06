import { Link } from 'react-router-dom';

function ServiceCard({ title, description, icon, to = '/services', items = [] }) {
  return (
    <article className="group rounded-3xl border border-cream-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-dental-blue/40 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cream-100 text-dental-blue-dark">
          {icon}
        </div>

        <span className="rounded-full bg-cream-100 px-3 py-1 text-xs font-bold text-ink-500">
          Care
        </span>
      </div>

      <h3 className="mt-6 text-xl font-extrabold tracking-tight text-ink-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-ink-500">{description}</p>

      {items.length > 0 && (
        <ul className="mt-5 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-ink-700">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-dental-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        to={to}
        className="mt-6 inline-flex text-sm font-extrabold text-dental-blue-dark transition group-hover:translate-x-1"
      >
        Learn more →
      </Link>
    </article>
  );
}

export default ServiceCard;