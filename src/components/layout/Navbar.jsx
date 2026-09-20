import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* =========================================================
     SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU ON RESIZE
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (open && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =========================================================
     MOBILE NAVIGATION
  ========================================================= */

  const handleNavigation = (href) => {
    setOpen(false);

    const element = document.querySelector(href);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed
          top-0
          inset-x-0
          z-[60]
          transition-all
          duration-300
          ${
            scrolled
              ? "glass shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
              : "bg-transparent"
          }
        `}
      >
        <nav
          className="
            section-container
            flex
            items-center
            justify-between
            h-16
            sm:h-[68px]
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="
              relative
              font-heading
              font-extrabold
              text-lg
              sm:text-xl
              tracking-wide
              text-white
              group
            "
          >
            NJ
            <span className="text-primary">.</span>

            {/* Logo Glow */}

            <span
              className="
                absolute
                -bottom-1
                left-0
                w-0
                h-[1.5px]
                bg-red-gradient
                group-hover:w-full
                transition-all
                duration-300
              "
            />
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    relative
                    text-sm
                    text-white/65
                    hover:text-white
                    transition-colors
                    duration-300
                    group
                  "
                >
                  {link.label}

                  {/* Underline */}

                  <span
                    className="
                      absolute
                      -bottom-1.5
                      left-0
                      w-0
                      h-[1.5px]
                      bg-red-gradient
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <a
            href="#contact"
            data-cursor-hover
            className="
              hidden
              md:inline-flex
              items-center
              justify-center
              px-5
              py-2
              rounded-full
              text-sm
              font-semibold
              text-white
              bg-red-gradient
              shadow-glow-sm
              hover:shadow-glow
              hover:scale-[1.02]
              transition-all
              duration-300
            "
          >
            Let's Talk
          </a>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="
              md:hidden
              w-10
              h-10
              rounded-xl
              glass
              border
              border-white/[0.08]
              flex
              items-center
              justify-center
              text-white
              hover:text-primary
              hover:border-primary/30
              transition-all
              duration-300
            "
          >
            {open ? (
              <FaTimes size={18} />
            ) : (
              <FaBars size={18} />
            )}
          </button>
        </nav>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <AnimatePresence>
          {open && (
            <>
              {/* Background Overlay */}

              <motion.div
                className="
                  fixed
                  inset-0
                  top-16
                  bg-black/50
                  backdrop-blur-sm
                  md:hidden
                  -z-10
                "
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                }}
                onClick={() => setOpen(false)}
              />

              {/* Menu Panel */}

              <motion.div
                className="
                  md:hidden
                  mx-3
                  sm:mx-4
                  mt-1
                  rounded-2xl
                  glass-strong
                  border
                  border-white/[0.08]
                  overflow-hidden
                  shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                "
                initial={{
                  opacity: 0,
                  y: -10,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              >

                {/* Menu Header */}

                <div
                  className="
                    px-5
                    pt-4
                    pb-3
                    border-b
                    border-white/[0.06]
                  "
                >
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-primary
                      font-semibold
                    "
                  >
                    Navigation
                  </p>
                </div>

                {/* Links */}

                <ul className="p-3">
                  {links.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.035,
                        duration: 0.2,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={(event) => {
                          event.preventDefault();
                          handleNavigation(link.href);
                        }}
                        className="
                          flex
                          items-center
                          px-3
                          py-3
                          rounded-xl
                          text-sm
                          text-white/70
                          hover:text-white
                          hover:bg-primary/[0.06]
                          transition-all
                          duration-200
                        "
                      >
                        <span
                          className="
                            w-1.5
                            h-1.5
                            rounded-full
                            bg-primary/50
                            mr-3
                            opacity-0
                            group-hover:opacity-100
                          "
                        />

                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}

                <div
                  className="
                    px-4
                    pb-4
                  "
                >
                  <a
                    href="#contact"
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigation("#contact");
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                      w-full
                      py-3
                      rounded-xl
                      bg-red-gradient
                      text-sm
                      font-semibold
                      text-white
                      shadow-glow-sm
                      hover:shadow-glow
                      transition-all
                      duration-300
                    "
                  >
                    Let's Talk
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}