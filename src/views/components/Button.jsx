export default function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-body font-medium text-sm transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100'

  const variants = {
    primary: 'bg-accent text-bg hover:bg-accent/85 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]',
    ghost:   'border border-accent/40 text-accent hover:bg-accent/8 hover:border-accent/70',
    muted:   'border border-border text-muted hover:border-border-2 hover:text-primary',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      )
    }
    return <a href={href} className={cls}>{children}</a>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
