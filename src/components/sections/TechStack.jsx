import { techStackLogos } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";

const loop = [...techStackLogos, ...techStackLogos];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* =====================================================
          SECTION HEADING
      ====================================================== */}
      <div className="section-container">
        <SectionHeading
          eyebrow="STACK"
          title="Technologies I Work With"
          subtitle="Tools and technologies I use to build modern, scalable web applications."
        />
      </div>

      {/* =====================================================
          TECHNOLOGY MARQUEE
      ====================================================== */}
      <div className="relative mt-10 sm:mt-12">

        {/* Left Fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            w-12
            sm:w-20
            lg:w-28
            bg-gradient-to-r
            from-bg
            to-transparent
            z-10
          "
        />

        {/* Right Fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            w-12
            sm:w-20
            lg:w-28
            bg-gradient-to-l
            from-bg
            to-transparent
            z-10
          "
        />

        {/* Marquee */}
        <div
          className="
            flex
            w-max
            animate-marquee
            gap-3
            sm:gap-4
            lg:gap-6
          "
        >
          {loop.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              data-cursor-hover
              className="
                group
                flex
                flex-col
                items-center
                justify-center
                gap-2
                sm:gap-2.5
                lg:gap-3

                w-[88px]
                h-[88px]

                sm:w-[105px]
                sm:h-[105px]

                lg:w-32
                lg:h-32

                shrink-0
                rounded-xl
                sm:rounded-2xl

                glass

                border
                border-white/[0.07]

                hover:border-primary/40
                hover:-translate-y-1

                transition-all
                duration-300
              "
            >

              {/* Technology Icon */}
              <Icon
                name={tech.icon}
                size={22}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110

                  sm:[&]:!text-[25px]
                  lg:[&]:!text-[30px]
                "
                style={{
                  color: tech.color,
                }}
              />

              {/* Technology Name */}
              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  lg:text-xs
                  text-white/55
                  group-hover:text-white/80
                  transition-colors
                  duration-300
                  text-center
                  px-1
                  leading-tight
                "
              >
                {tech.name}
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}