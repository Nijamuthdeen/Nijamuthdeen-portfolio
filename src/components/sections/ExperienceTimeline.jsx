import { motion } from "framer-motion";

import { experienceTimeline } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative py-20 sm:py-24 overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-20
            -translate-x-1/2
            w-[450px]
            h-[250px]
            rounded-full
            bg-primary/[0.05]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-40
            bottom-0
            w-[300px]
            h-[300px]
            rounded-full
            bg-primary/[0.04]
            blur-[100px]
          "
        />

      </div>

      <div className="relative section-container">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}
        <SectionHeading
          eyebrow="JOURNEY"
          title="Experience & Journey"
          subtitle="A timeline of my learning, development experience, and the projects that shaped my journey."
        />

        {/* =====================================================
            TIMELINE
        ====================================================== */}
        <div className="relative max-w-5xl mx-auto mt-12">

          {/* Central Timeline Line */}
          <div
            className="
              absolute
              left-[9px]
              sm:left-1/2
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-primary/70
              via-primary/20
              to-transparent
              sm:-translate-x-1/2
            "
          />

          <div className="flex flex-col gap-8 sm:gap-12">

            {experienceTimeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.title}-${item.year}`}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05,
                  }}
                  className="
                    relative
                    pl-8
                    sm:pl-0
                    sm:grid
                    sm:grid-cols-2
                    sm:gap-10
                  "
                >

                  {/* =================================================
                      TIMELINE DOT
                  ================================================== */}
                  <div
                    className="
                      absolute
                      left-0
                      sm:left-1/2
                      top-6
                      w-[18px]
                      h-[18px]
                      rounded-full
                      bg-black
                      border
                      border-primary/50
                      sm:-translate-x-1/2
                      z-10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-primary
                        shadow-[0_0_12px_rgba(255,30,70,0.8)]
                      "
                    />
                  </div>

                  {/* =================================================
                      LEFT SIDE
                  ================================================== */}
                  {isLeft ? (
                    <>
                      <div className="sm:text-right">
                        <TimelineCard
                          item={item}
                          align="left"
                        />
                      </div>

                      <div className="hidden sm:block" />
                    </>
                  ) : (

                    /* =================================================
                        RIGHT SIDE
                    ================================================== */
                    <>
                      <div className="hidden sm:block" />

                      <div>
                        <TimelineCard
                          item={item}
                          align="right"
                        />
                      </div>
                    </>
                  )}

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}


/* =============================================================
   TIMELINE CARD
============================================================= */

function TimelineCard({ item, align }) {
  return (
    <GlassCard
      className={`
        relative
        group
        p-5
        sm:p-6
        w-full
        overflow-hidden
        border
        border-white/[0.08]
        hover:border-primary/30
        transition-all
        duration-300
        ${
          align === "left"
            ? "sm:ml-auto"
            : "sm:mr-auto"
        }
      `}
    >

      {/* Hover Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          w-32
          h-32
          rounded-full
          bg-primary/[0.08]
          blur-[55px]
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      {/* =========================================================
          TOP META
      ========================================================== */}
      <div
        className={`
          relative
          flex
          items-center
          gap-2
          ${
            align === "left"
              ? "sm:justify-end"
              : "sm:justify-start"
          }
        `}
      >

        <span
          className="
            inline-flex
            items-center
            px-2.5
            py-1
            rounded-full
            bg-primary/[0.08]
            border
            border-primary/15
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-primary
          "
        >
          {item.type}
        </span>

        <span className="text-white/20 text-[10px]">
          •
        </span>

        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-wider
            text-white/35
          "
        >
          {item.year}
        </span>

      </div>

      {/* =========================================================
          TITLE
      ========================================================== */}
      <h3
        className={`
          relative
          mt-4
          font-heading
          font-bold
          text-lg
          text-white
          group-hover:text-primary
          transition-colors
          duration-300
          ${
            align === "left"
              ? "sm:text-right"
              : "sm:text-left"
          }
        `}
      >
        {item.title}
      </h3>

      {/* =========================================================
          ORGANIZATION
      ========================================================== */}
      <p
        className={`
          relative
          mt-1
          text-xs
          font-medium
          text-white/35
          ${
            align === "left"
              ? "sm:text-right"
              : "sm:text-left"
          }
        `}
      >
        {item.org}
      </p>

      {/* =========================================================
          DESCRIPTION
      ========================================================== */}
      <p
        className={`
          relative
          mt-4
          text-sm
          text-white/50
          leading-6
          ${
            align === "left"
              ? "sm:text-right"
              : "sm:text-left"
          }
        `}
      >
        {item.description}
      </p>

    </GlassCard>
  );
}