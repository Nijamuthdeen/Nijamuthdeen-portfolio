export default function GlassCard({ children, className = "", hover = true, ...rest }) {
  return (
    <div
      className={`glass rounded-2xl ${
        hover ? "transition-all duration-300 hover:border-primary/40 hover:shadow-glow-sm hover:-translate-y-1" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
