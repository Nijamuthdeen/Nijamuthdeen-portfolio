export default function GradientButton({
  children,
  href,
  onClick,
  variant = "solid",
  type = "button",
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 focus-visible:outline-primary";
  const styles =
    variant === "solid"
      ? "bg-red-gradient text-white shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5"
      : "border border-primary/50 text-white hover:bg-primary/10 hover:border-primary";

  const cls = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  );
}
