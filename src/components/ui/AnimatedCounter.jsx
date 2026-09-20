import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({ value, suffix = "", duration = 1600 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-4xl sm:text-5xl text-gradient">
      {count}
      {suffix}
    </span>
  );
}
