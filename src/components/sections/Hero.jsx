import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGlobe,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import { profile } from "../../data/content";
import GradientButton from "../ui/GradientButton";

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socials = [
  {
    icon: FaGithub,
    href: profile.socials.github,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: profile.socials.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: profile.socials.instagram,
    label: "Instagram",
  },
  {
    icon: FaGlobe,
    href: profile.socials.stackorax,
    label: "Stackorax",
  },
];

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        pt-24
        pb-14
        sm:pt-28
        sm:pb-20
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="absolute inset-0 bg-radial-glow"
        aria-hidden="true"
      />

      {/* Left Glow */}

      <div
        className="
          pointer-events-none
          absolute
          top-[20%]
          left-[-180px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-primary/10
          blur-[120px]
        "
        aria-hidden="true"
      />

      {/* Right Glow */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[-180px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-primary/5
          blur-[120px]
        "
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          section-container
          relative
          z-10
          grid
          lg:grid-cols-[minmax(0,1fr)_300px]
          xl:grid-cols-[minmax(0,1fr)_330px]
          gap-10
          xl:gap-14
          items-center
        "
      >

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <motion.div
          className="min-w-0"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          {/* =================================================
              AVAILABILITY
          ================================================= */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-3.5
              sm:px-4
              py-1.5
              rounded-full
              glass
              text-[10px]
              sm:text-xs
              font-semibold
              tracking-wide
              text-primary
              mb-5
              sm:mb-6
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-primary
                animate-pulseGlow
              "
            />

            Available for new projects
          </span>

          {/* =================================================
              NAME
          ================================================= */}

          <h1
            className="
              font-heading
              font-extrabold
              whitespace-nowrap
              text-[1.75rem]
              sm:text-4xl
              md:text-5xl
              lg:text-[3.35rem]
              xl:text-[3.8rem]
              leading-none
              tracking-[-0.035em]
            "
          >
            {profile.name}
          </h1>

          {/* =================================================
              TYPING ROLE
          ================================================= */}

          <div
            className="
              mt-5
              h-8
              sm:h-10
              flex
              items-center
              min-w-0
            "
          >
            <TypeAnimation
              sequence={profile.typingRoles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="
                font-heading
                text-lg
                sm:text-2xl
                font-semibold
                text-gradient
                truncate
                max-w-full
              "
            />
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-5
              sm:mt-6
              max-w-xl
              text-sm
              sm:text-base
              lg:text-lg
              text-white/60
              leading-7
              sm:leading-relaxed
            "
          >
            I design and build full-stack products end to end,
            and lead{" "}
            <span className="text-white/90 font-semibold">
              Stackorax Tech
            </span>{" "}
            — delivering client software and data analytics
            training with the same standard.
          </p>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div
            className="
              mt-7
              sm:mt-9
              grid
              grid-cols-1
              sm:flex
              sm:flex-wrap
              gap-3
              sm:gap-4
            "
          >
            {/* Resume */}

            <GradientButton
              href={profile.resumeUrl}
              download
              className="w-full sm:w-auto"
            >
              <FaDownload size={12} />
              Download Resume
            </GradientButton>

            {/* Projects */}

            <GradientButton
              href="#projects"
              variant="outline"
              className="w-full sm:w-auto"
            >
              View Projects
              <FaArrowRight size={12} />
            </GradientButton>

            {/* Contact */}

            <GradientButton
              href="#contact"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Contact Me
            </GradientButton>
          </div>

          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <div
            className="
              mt-8
              sm:mt-10
              flex
              items-center
              gap-3
              sm:gap-4
            "
          >
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  data-cursor-hover
                  className="
                    w-10
                    h-10
                    sm:w-11
                    sm:h-11
                    rounded-full
                    glass
                    flex
                    items-center
                    justify-center
                    text-white/65
                    border
                    border-white/[0.08]
                    hover:text-primary
                    hover:border-primary/40
                    hover:bg-primary/[0.05]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* ===================================================
            PROFILE IMAGE
        =================================================== */}

        <motion.div
          className="
            relative
            mx-auto
            order-first
            lg:order-last
            mb-8
            sm:mb-10
            lg:mb-0
          "
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.15,
          }}
        >

          {/* Outer Red Glow */}

          <div
            className="
              absolute
              inset-0
              rounded-[2rem]
              bg-red-gradient
              opacity-25
              blur-3xl
              scale-90
            "
            aria-hidden="true"
          />

          {/* =================================================
              IMAGE CONTAINER
          ================================================= */}

          <div
            className="
              relative
              w-56
              h-56
              sm:w-72
              sm:h-72
              lg:w-[300px]
              lg:h-[300px]
              xl:w-[330px]
              xl:h-[330px]
              animate-floatY
            "
          >

            {/* Glass Frame */}

            <div
              className="
                relative
                w-full
                h-full
                rounded-[2rem]
                glass-strong
                p-2
                overflow-hidden
                border
                border-white/10
                shadow-glow-sm
              "
            >

              {/* Profile Image */}

              <img
                src="/profile1.jpeg"
                alt={profile.name}
                loading="eager"
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-[1.6rem]
                  transition-transform
                  duration-700
                  hover:scale-105
                "
                onError={(event) => {
                  event.currentTarget.src =
                    "/profile-photo.jpg";
                }}
              />

              {/* Image Gradient */}

              <div
                className="
                  absolute
                  inset-2
                  rounded-[1.6rem]
                  bg-gradient-to-t
                  from-black/50
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />
            </div>

            {/* =================================================
                STATUS BADGE
            ================================================= */}

            <motion.div
              className="
                absolute
                -bottom-4
                left-1/2
                -translate-x-1/2
                px-3
                sm:px-4
                py-2
                rounded-xl
                glass
                border
                border-white/10
                backdrop-blur-xl
                whitespace-nowrap
              "
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.7,
              }}
            >
              <div className="flex items-center gap-2">

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-green-400
                    shadow-[0_0_10px_rgba(74,222,128,0.7)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    font-medium
                    text-white/70
                  "
                >
                  Open to opportunities
                </span>

              </div>
            </motion.div>

            {/* Decorative Circle */}

            <div
              className="
                absolute
                -top-3
                -right-3
                sm:-right-5
                w-8
                h-8
                sm:w-10
                sm:h-10
                rounded-full
                bg-primary/10
                border
                border-primary/20
                backdrop-blur-md
                shadow-glow-sm
              "
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}