function PhotoPlaceholder({
  label = 'Clinic photo placeholder',
  className = '',
  variant = 'light',
}) {
  const variants = {
    light: {
      wrapper: 'border-cream-200 bg-cream-100',
      badge: 'border-white/60 bg-white/75 text-ink-700',
      overlay:
        'bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.85),transparent_30%),linear-gradient(135deg,rgba(91,142,166,0.18),rgba(111,174,155,0.16),rgba(200,164,93,0.14))]',
    },
    warm: {
      wrapper: 'border-cream-200 bg-cream-100',
      badge: 'border-white/60 bg-white/75 text-ink-700',
      overlay:
        'bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.8),transparent_30%),linear-gradient(135deg,rgba(200,164,93,0.22),rgba(248,239,227,0.9),rgba(111,174,155,0.12))]',
    },
    dark: {
      wrapper: 'border-white/10 bg-ink-900',
      badge: 'border-white/10 bg-ink-900/50 text-white',
      overlay:
        'bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(135deg,rgba(31,41,51,0.92),rgba(50,101,124,0.75),rgba(31,41,51,0.95))]',
    },
  };

  const styles = variants[variant] || variants.light;

  return (
    <div
      className={[
        'relative min-h-65 overflow-hidden rounded-4xl border',
        styles.wrapper,
        className,
      ].join(' ')}
    >
      <div className={`absolute inset-0 ${styles.overlay}`} />

      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.24),transparent)]" />

      <div
        className={[
          'absolute bottom-6 left-1/2 z-10 max-w-[90%] -translate-x-1/2 rounded-2xl border px-4 py-3 text-center text-sm font-bold shadow-sm backdrop-blur-md',
          styles.badge,
        ].join(' ')}
      >
        {label}
      </div>
    </div>
  );
}

export default PhotoPlaceholder;