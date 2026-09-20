import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursor = useRef(null);

  useEffect(() => {
    const el = cursor.current;

    const move = (e) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const hoverOn = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        el.classList.add("active");
      }
    };

    const hoverOff = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        el.classList.remove("active");
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", hoverOn);
    document.addEventListener("mouseout", hoverOff);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", hoverOn);
      document.removeEventListener("mouseout", hoverOff);
    };
  }, []);

  return (
    <>
      <div ref={cursor} className="portfolio-cursor" />

      <style>{`
        * {
          cursor: none !important;
        }

        .portfolio-cursor {
          position: fixed;
          top: -5px;
          left: -5px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 999999;

          background: #ffffff;

          box-shadow:
            0 0 8px rgba(255,255,255,0.9),
            0 0 20px rgba(255,0,70,0.8),
            0 0 35px rgba(255,0,70,0.35);

          transition:
            width 0.25s ease,
            height 0.25s ease,
            top 0.25s ease,
            left 0.25s ease,
            background 0.25s ease;
        }

        .portfolio-cursor.active {
          top: -10px;
          left: -10px;
          width: 20px;
          height: 20px;

          background: #ff1744;

          box-shadow:
            0 0 12px rgba(255,23,68,1),
            0 0 30px rgba(255,23,68,0.7),
            0 0 55px rgba(255,23,68,0.35);
        }

        @media (max-width: 768px) {
          .portfolio-cursor {
            display: none;
          }

          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}