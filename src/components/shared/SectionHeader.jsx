function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const centered = align === 'center';

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <p
          className={[
            'inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[#2F6F6F]',
            centered ? 'justify-center' : '',
          ].join(' ')}
        >
          <span className="h-px w-5.5 bg-dental-blue" />
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 font-serif text-[clamp(32px,4.4vw,56px)] leading-[1.08] tracking-[-0.015em] text-ink-900">
        {title}
      </h2>

      {description && (
        <p
          className={[
            'mt-5 text-base leading-8 text-ink-700',
            centered ? 'mx-auto max-w-3xl' : 'max-w-3xl',
          ].join(' ')}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;