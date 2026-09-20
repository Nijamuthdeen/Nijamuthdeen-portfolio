import { motion } from "framer-motion";

import { services } from "../../data/certifications";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Icon from "../ui/Icon";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 overflow-hidden"
    >
      {/* Background Glow */}
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
            bg-primary/[0.04]
            blur-[100px]
          "
        />

      </div>

      <div className="relative section-container">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="WHAT I OFFER"
          title="Services"
          subtitle="From focused features to complete digital products, I build reliable and scalable solutions around your goals."
        />

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                  p-6
                  flex
                  flex-col
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
                    -right-20
                    -top-20
                    w-40
                    h-40
                    rounded-full
                    bg-primary/[0.09]
                    blur-[60px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* Icon + Number */}
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
                      w-11
                      h-11
                      rounded-xl
                      bg-red-gradient
                      flex
                      items-center
                      justify-center
                      shadow-glow-sm
                      group-hover:shadow-glow
                      group-hover:scale-105
                      transition-all
                      duration-300
                    "
                  >
                    <Icon
                      name={service.icon}
                      size={18}
                      className="text-white"
                    />
                  </div>

                  <span
                    className="
                      text-[10px]
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

                {/* Content */}
                <div className="relative mt-6">

                  <h3
                    className="
                      font-heading
                      font-bold
                      text-lg
                      text-white
                      group-hover:text-primary
                      transition-colors
                      duration-300
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      text-white/50
                      leading-6
                    "
                  >
                    {service.description}
                  </p>

                </div>

              </GlassCard>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-2
            text-center
          "
        >
          <span className="text-sm text-white/35">
            Have a project in mind?
          </span>

          <a
            href="#contact"
            data-cursor-hover
            className="
              text-sm
              font-semibold
              text-primary
              hover:text-white
              transition-colors
            "
          >
            Let's talk
          </a>
        </motion.div>

      </div>
    </section>
  );
}