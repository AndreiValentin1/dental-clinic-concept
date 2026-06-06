function BeforeAfterPlaceholder({ label = 'Placeholder case' }) {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-cream-200 bg-cream-100 sm:grid-cols-2">
      <div className="relative min-h-56 border-b border-cream-200 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.9),transparent_28%),linear-gradient(135deg,rgba(31,41,51,0.08),rgba(91,142,166,0.18),rgba(200,164,93,0.12))] sm:border-b-0 sm:border-r">
        <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-ink-500 shadow-sm backdrop-blur">
          Before
        </div>

        <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/75 px-4 py-3 text-sm font-bold text-ink-700 shadow-sm backdrop-blur">
          {label}
        </div>
      </div>

      <div className="relative min-h-56 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.95),transparent_28%),linear-gradient(135deg,rgba(111,174,155,0.2),rgba(91,142,166,0.2),rgba(255,255,255,0.4))]">
        <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-dental-blue-dark shadow-sm backdrop-blur">
          After
        </div>

        <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/75 px-4 py-3 text-sm font-bold text-ink-700 shadow-sm backdrop-blur">
          Demo visual only
        </div>
      </div>
    </div>
  );
}

export default BeforeAfterPlaceholder;