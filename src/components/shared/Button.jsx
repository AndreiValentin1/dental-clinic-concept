import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-ink-900 text-cream-50 shadow-[0_8px_18px_-10px_rgba(14,42,59,0.5)] hover:bg-[#16384B]',
  secondary:
    'border border-ink-900 bg-transparent text-ink-900 hover:bg-ink-900 hover:text-cream-50',
  teal:
    'bg-dental-blue text-white hover:bg-[#2F6F6F]',
  gold:
    'bg-dental-gold text-ink-900 hover:brightness-105',
  ghost:
  'border border-white/30 bg-transparent text-cream-50 hover:bg-white/10 hover:border-white/45',
  light:
    'border border-cream-200 bg-white text-ink-900 hover:border-ink-900',
  whatsapp:
    'bg-whatsapp text-white hover:bg-whatsapp-dark',
};

function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2.5 rounded-full px-[22px] py-3.5 text-[15px] font-medium transition active:translate-y-px',
    variants[variant] || variants.primary,
    className,
  ].join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;