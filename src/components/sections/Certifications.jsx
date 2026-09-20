import { motion } from "framer-motion";
import {
  FaAward,
  FaExternalLinkAlt,
  FaCertificate,
} from "react-icons/fa";

import { certifications } from "../../data/certifications";

import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";


export default function Certifications() {
  return (
    <section
      id="certifications"
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
            left-1/2
            top-10
            -translate-x-1/2
            w-[500px]
            h-[250px]
            rounded-full
            bg-primary/[0.05]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            w-[300px]
            h-[300px]
            rounded-full
            bg-primary/[0.035]
            blur-[100px]
          "
        />

      </div>


      <div className="relative section-container">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <SectionHeading
          eyebrow="CREDENTIALS"
          title="Certifications & Training"
          subtitle="Professional certifications and training that support my development journey."
        />


        {/* =====================================================
            CERTIFICATION GRID
        ====================================================== */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            lg:gap-6
            mt-10
            sm:mt-12
          "
        >

          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
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
                delay: (index % 3) * 0.08,
              }}
              className="h-full"
            >

              <GlassCard
                className="
                  relative
                  h-full
                  overflow-hidden
                  group
                  border
                  border-white/[0.08]
                  hover:border-primary/30
                  transition-all
                  duration-300
                "
              >

                {/* =================================================
                    HOVER GLOW
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    w-40
                    h-40
                    rounded-full
                    bg-primary/[0.08]
                    blur-[60px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    z-10
                  "
                />


                {/* =================================================
                    CERTIFICATE IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    bg-white/[0.02]
                  "
                >

                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    loading="lazy"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                  />


                  {/* Image Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/50
                      via-transparent
                      to-transparent
                      pointer-events-none
                    "
                  />


                  {/* =================================================
                      VERIFIED BADGE
                  ================================================== */}

                  <div
                    className="
                      absolute
                      top-3
                      right-3
                      z-20
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-black/70
                      backdrop-blur-md
                      border
                      border-primary/25
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-white
                    "
                  >

                    <FaAward
                      className="text-primary"
                      size={10}
                    />

                    Verified

                  </div>


                  {/* Certificate Icon */}

                  <div
                    className="
                      absolute
                      bottom-3
                      left-3
                      z-20
                      w-8
                      h-8
                      rounded-lg
                      bg-black/60
                      backdrop-blur-md
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-primary
                    "
                  >
                    <FaCertificate size={13} />
                  </div>

                </div>


                {/* =================================================
                    CERTIFICATE CONTENT
                ================================================== */}

                <div
                  className="
                    relative
                    p-5
                    sm:p-6
                    flex
                    flex-col
                    flex-1
                  "
                >

                  {/* Title */}

                  <h3
                    className="
                      font-heading
                      font-bold
                      text-base
                      sm:text-lg
                      text-white
                      leading-snug
                      group-hover:text-primary
                      transition-colors
                      duration-300
                    "
                  >
                    {certificate.title}
                  </h3>


                  {/* Issuer */}

                  <p
                    className="
                      mt-2
                      text-xs
                      sm:text-sm
                      text-white/50
                    "
                  >
                    {certificate.issuer}
                  </p>


                  {/* Date */}

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <span
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-primary
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        sm:text-xs
                        font-medium
                        text-primary
                      "
                    >
                      {certificate.date}
                    </span>

                  </div>


                  {/* =================================================
                      VIEW CERTIFICATE BUTTON
                  ================================================== */}

                  <div className="mt-6">

                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="
                        w-full
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.02]
                        px-4
                        py-2.5
                        text-xs
                        sm:text-sm
                        font-semibold
                        text-white/75
                        hover:border-primary/30
                        hover:bg-primary/[0.08]
                        hover:text-primary
                        transition-all
                        duration-300
                      "
                    >

                      View Certificate

                      <FaExternalLinkAlt
                        size={10}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                        "
                      />

                    </a>

                  </div>

                </div>

              </GlassCard>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}