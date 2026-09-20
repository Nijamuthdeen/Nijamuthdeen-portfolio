import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaBriefcase,
  FaBullseye,
  FaCompass,
  FaCode,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa";

import { about } from "../../data/content";

import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";


/* =============================================================
   ABOUT INFORMATION
============================================================= */

const blocks = [
  {
    icon: FaGraduationCap,
    title: "Education",
    rows: about.education.map((item) => ({
      heading: item.degree,
      sub: `${item.institution} · ${item.period}`,
    })),
  },

  {
    icon: FaBriefcase,
    title: "Experience",
    rows: about.experience.map((item) => ({
      heading: item.role,
      sub: `${item.org} · ${item.period}`,
    })),
  },

  {
    icon: FaCompass,
    title: "Current Focus",
    rows: [
      {
        heading: about.currentFocus,
      },
    ],
  },

  {
    icon: FaBullseye,
    title: "Career Objective",
    rows: [
      {
        heading: about.objective,
      },
    ],
  },
];


/* =============================================================
   HIGHLIGHTS
============================================================= */

const highlights = [
  {
    icon: FaCode,
    title: "Full Stack",
    text: "Java • Spring Boot • React",
  },
  {
    icon: FaLayerGroup,
    title: "Build & Ship",
    text: "Modern, scalable web products",
  },
  {
    icon: FaRocket,
    title: "Founder",
    text: "Stackorax Tech",
  },
];


export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-20
        sm:py-24
        lg:py-28
        overflow-hidden
      "
    >

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -left-40
            top-20
            w-[400px]
            h-[400px]
            rounded-full
            bg-primary/[0.045]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            w-[350px]
            h-[350px]
            rounded-full
            bg-primary/[0.035]
            blur-[110px]
          "
        />

      </div>


      <div className="relative section-container">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <SectionHeading
          eyebrow="ABOUT ME"
          title="The person behind the code"
          subtitle="A little about my background, experience, current focus, and where I'm heading."
        />


        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            grid
            lg:grid-cols-[0.85fr_1.15fr]
            gap-10
            lg:gap-14
            items-start
            mt-10
            sm:mt-12
          "
        >

          {/* =================================================
              LEFT — MY STORY
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              lg:sticky
              lg:top-28
            "
          >

            {/* Label */}

            <div
              className="
                flex
                items-center
                gap-2
                mb-5
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-primary
                  shadow-[0_0_10px_rgba(255,45,85,0.8)]
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-semibold
                  text-primary
                "
              >
                My Story
              </span>
            </div>


            {/* Main Intro */}

            <div className="max-w-xl">

              <h3
                className="
                  font-heading
                  font-bold
                  text-2xl
                  sm:text-3xl
                  lg:text-[34px]
                  leading-[1.2]
                  tracking-[-0.025em]
                  text-white
                "
              >
                Building digital products
                <span className="text-primary"> with purpose.</span>
              </h3>


              <p
                className="
                  mt-5
                  text-[14px]
                  sm:text-[15px]
                  lg:text-[16px]
                  leading-7
                  text-white/55
                  max-w-lg
                "
              >
                {about.intro}
              </p>

            </div>


            {/* =================================================
                HIGHLIGHTS
            ================================================== */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-3
                lg:grid-cols-1
                gap-2.5
                mt-7
                max-w-lg
              "
            >

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      px-3.5
                      py-3
                    "
                  >

                    <div
                      className="
                        w-8
                        h-8
                        rounded-lg
                        bg-primary/[0.08]
                        border
                        border-primary/10
                        flex
                        items-center
                        justify-center
                        text-primary
                        shrink-0
                      "
                    >
                      <Icon size={13} />
                    </div>


                    <div className="min-w-0">

                      <p
                        className="
                          text-xs
                          font-semibold
                          text-white
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          text-[10px]
                          text-white/35
                          mt-0.5
                          truncate
                        "
                      >
                        {item.text}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>


            {/* =================================================
                AVAILABILITY
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-2
                mt-6
                text-xs
                text-white/35
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-green-400
                  shadow-[0_0_10px_rgba(74,222,128,0.7)]
                "
              />

              Currently open to new opportunities

            </div>

          </motion.div>


          {/* =================================================
              RIGHT — INFORMATION CARDS
          ================================================== */}

          <div
            className="
              grid
              sm:grid-cols-2
              gap-4
              sm:gap-5
            "
          >

            {blocks.map((block, index) => {
              const BlockIcon = block.icon;

              return (
                <motion.div
                  key={block.title}
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
                    delay: index * 0.08,
                  }}
                  className="h-full"
                >

                  <GlassCard
                    className="
                      relative
                      h-full
                      p-5
                      sm:p-6
                      overflow-hidden
                      group
                      border
                      border-white/[0.08]
                      hover:border-primary/30
                      transition-all
                      duration-300
                    "
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


                    {/* Icon */}

                    <div
                      className="
                        relative
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <div
                        className="
                          w-10
                          h-10
                          sm:w-11
                          sm:h-11
                          rounded-xl
                          bg-primary/[0.08]
                          border
                          border-primary/15
                          flex
                          items-center
                          justify-center
                          text-primary
                          group-hover:bg-primary/[0.12]
                          group-hover:border-primary/25
                          group-hover:scale-105
                          transition-all
                          duration-300
                        "
                      >
                        <BlockIcon size={16} />
                      </div>


                      <span
                        className="
                          text-[9px]
                          sm:text-[10px]
                          font-semibold
                          tracking-[0.15em]
                          text-white/20
                          group-hover:text-primary/50
                          transition-colors
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>


                    {/* Title */}

                    <h3
                      className="
                        relative
                        mt-5
                        font-heading
                        font-bold
                        text-base
                        sm:text-lg
                        text-white
                        group-hover:text-primary
                        transition-colors
                        duration-300
                      "
                    >
                      {block.title}
                    </h3>


                    {/* Content */}

                    <div className="relative mt-4">

                      {block.rows.map((row, rowIndex) => (
                        <div
                          key={`${block.title}-${rowIndex}`}
                          className={
                            rowIndex > 0
                              ? "mt-4 pt-4 border-t border-white/[0.06]"
                              : ""
                          }
                        >

                          <p
                            className="
                              text-sm
                              text-white/75
                              font-medium
                              leading-6
                            "
                          >
                            {row.heading}
                          </p>


                          {row.sub && (
                            <p
                              className="
                                mt-1.5
                                text-[11px]
                                sm:text-xs
                                text-white/35
                                leading-5
                              "
                            >
                              {row.sub}
                            </p>
                          )}

                        </div>
                      ))}

                    </div>

                  </GlassCard>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}