function InfoCard({ icon, title, description, children, className = '' }) {
  return (
    <article
      className={[
        'rounded-3xl border border-cream-200 bg-white p-6 shadow-sm',
        className,
      ].join(' ')}
    >
      {icon && (
        <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cream-100 text-dental-blue-dark">
          {icon}
        </div>
      )}

      <h3 className="text-lg font-extrabold tracking-tight text-ink-900">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-sm leading-7 text-ink-500">{description}</p>
      )}

      {children}
    </article>
  );
}

export default InfoCard;