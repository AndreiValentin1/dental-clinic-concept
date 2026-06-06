function StatPill({ value, label, className = '' }) {
  return (
    <div
      className={[
        'rounded-3xl border border-cream-200 bg-white px-5 py-4 shadow-sm',
        className,
      ].join(' ')}
    >
      <div className="text-2xl font-extrabold tracking-tight text-dental-blue-dark">
        {value}
      </div>
      <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-ink-500">
        {label}
      </div>
    </div>
  );
}

export default StatPill;