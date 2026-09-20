import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

import { profile } from "../../data/content";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "React Development",
  "Java Full Stack",
  "Spring Boot",
  "UI / UX Design",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/[0.08]">

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            w-[700px]
            h-[300px]
            rounded-full
            bg-primary/[0.08]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-40
            bottom-0
            w-[350px]
            h-[250px]
            rounded-full
            bg-primary/[0.04]
            blur-[100px]
          "
        />

        {/* Small decorative dots */}
        <span className="absolute top-24 left-[12%] w-1 h-1 rounded-full bg-primary/60" />
        <span className="absolute top-40 right-[18%] w-1 h-1 rounded-full bg-primary/40" />
        <span className="absolute bottom-28 left-[45%] w-1 h-1 rounded-full bg-primary/50" />

      </div>

      <div className="relative section-container">

        {/* =====================================================
            CTA SECTION
        ====================================================== */}
        <div className="py-16 sm:py-20">

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-6
              py-10
              sm:px-10
              sm:py-12
              lg:px-14
              lg:py-14
            "
          >

            {/* CTA Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-32
                w-80
                h-80
                rounded-full
                bg-primary/[0.12]
                blur-[90px]
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-8
              "
            >

              {/* CTA Text */}
              <div className="max-w-2xl">

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mb-4
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-primary
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_currentColor]" />
                  Let's build something
                </span>

                <h2
                  className="
                    font-heading
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                    leading-tight
                    text-white
                  "
                >
                  Have a project
                  <br className="hidden sm:block" />
                  <span className="text-white/45">
                    {" "}in mind?
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm sm:text-base text-white/50 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas,
                  and opportunities to build something meaningful.
                </p>

              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                data-cursor-hover
                className="
                  group
                  shrink-0
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  py-3.5
                  rounded-full
                  bg-red-gradient
                  text-sm
                  font-semibold
                  text-white
                  shadow-glow-sm
                  hover:shadow-glow
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                "
              >
                Let's Talk

                <FaArrowRight
                  size={12}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <div className="pb-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

            {/* =================================================
                BRAND
            ================================================== */}
            <div className="lg:col-span-1">

              {/* Logo */}
              <a
                href="#"
                data-cursor-hover
                className="inline-block"
              >
                <span
                  className="
                    font-heading
                    text-3xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  NJ<span className="text-primary">.</span>
                </span>
              </a>

              <p className="mt-4 max-w-xs text-sm text-white/45 leading-6">
                Full Stack Developer building modern,
                scalable web applications and digital
                experiences.
              </p>

              {/* Contact */}
              <div className="mt-6 space-y-3">

                <a
                  href={`mailto:${profile.email}`}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-white/50
                    hover:text-white
                    transition-colors
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-8
                      h-8
                      rounded-lg
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      text-primary
                      group-hover:border-primary/30
                      group-hover:bg-primary/[0.06]
                      transition-all
                    "
                  >
                    <FaEnvelope size={12} />
                  </span>

                  <span className="truncate">
                    {profile.email}
                  </span>
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-white/50
                    hover:text-white
                    transition-colors
                  "
                >
                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-8
                      h-8
                      rounded-lg
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      text-primary
                      group-hover:border-primary/30
                      group-hover:bg-primary/[0.06]
                      transition-all
                    "
                  >
                    <FaPhone size={11} />
                  </span>

                  {profile.phone}
                </a>

              </div>

            </div>

            {/* =================================================
                NAVIGATION
            ================================================== */}
            <div>

              <h3
                className="
                  mb-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/35
                "
              >
                Navigation
              </h3>

              <div className="grid grid-cols-2 gap-y-3 gap-x-5">

                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    data-cursor-hover
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-white/50
                      hover:text-white
                      transition-colors
                    "
                  >
                    <span
                      className="
                        w-0
                        h-px
                        bg-primary
                        group-hover:w-3
                        transition-all
                        duration-300
                      "
                    />

                    {item.label}
                  </a>
                ))}

              </div>

            </div>

            {/* =================================================
                SERVICES
            ================================================== */}
            <div>

              <h3
                className="
                  mb-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/35
                "
              >
                Services
              </h3>

              <div className="space-y-3">

                {services.map((service) => (
                  <p
                    key={service}
                    className="
                      text-sm
                      text-white/50
                      hover:text-white
                      transition-colors
                      cursor-default
                    "
                  >
                    {service}
                  </p>
                ))}

              </div>

            </div>

            {/* =================================================
                CONNECT
            ================================================== */}
            <div>

              <h3
                className="
                  mb-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/35
                "
              >
                Connect
              </h3>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-3">

                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  aria-label="GitHub"
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    text-white/60
                    hover:text-white
                    hover:border-primary/40
                    hover:bg-primary/[0.08]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub size={15} />
                </a>

                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  aria-label="LinkedIn"
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    text-white/60
                    hover:text-white
                    hover:border-primary/40
                    hover:bg-primary/[0.08]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedin size={15} />
                </a>

                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  aria-label="Instagram"
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    text-white/60
                    hover:text-white
                    hover:border-primary/40
                    hover:bg-primary/[0.08]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaInstagram size={15} />
                </a>

                <a
                  href={profile.socials.stackorax}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  aria-label="Stackorax"
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.02]
                    text-white/60
                    hover:text-white
                    hover:border-primary/40
                    hover:bg-primary/[0.08]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaGlobe size={15} />
                </a>

              </div>

              {/* Availability */}
              <div className="mt-6 flex items-center gap-2">

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-green-400
                    shadow-[0_0_10px_rgba(74,222,128,0.7)]
                  "
                />

                <span className="text-xs text-white/45">
                  Available for freelance work
                </span>

              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="border-t border-white/[0.08]">

          <div
            className="
              py-5
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-4
            "
          >

            <p className="text-xs text-white/35 text-center sm:text-left">
              © {new Date().getFullYear()} Nijamuthdeen J. All rights reserved.
            </p>

            <div className="flex items-center gap-5">

              <p className="text-xs text-white/30 hidden sm:block">
                React • Vite • Tailwind CSS
              </p>

              {/* Back To Top */}
              <button
                onClick={scrollToTop}
                data-cursor-hover
                aria-label="Back to top"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  w-9
                  h-9
                  rounded-full
                  border
                  border-white/[0.1]
                  bg-white/[0.02]
                  text-white/50
                  hover:text-white
                  hover:border-primary/50
                  hover:bg-primary/[0.08]
                  transition-all
                  duration-300
                "
              >
                <FaArrowUp
                  size={11}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />
              </button>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}