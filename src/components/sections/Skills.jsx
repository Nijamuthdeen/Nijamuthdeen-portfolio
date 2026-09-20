import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";

import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
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
            -left-40
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
          eyebrow="SKILLS"
          title="Tools I build with"
          subtitle="A practical stack, kept current — chosen for what ships reliably, not what's trendy."
        />

        {/* =====================================================
            SKILL GROUPS
        ====================================================== */}
        <div
          className="
            grid
            sm:grid-cols-2
            xl:grid-cols-3
            gap-4
            sm:gap-5
            lg:gap-6
            mt-10
            sm:mt-12
          "
        >

          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
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
                delay: groupIndex * 0.06,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.02]
                p-4
                sm:p-5
                lg:p-6
                hover:border-primary/25
                transition-all
                duration-300
              "
            >

              {/* =================================================
                  CARD HOVER GLOW
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
                  bg-primary/[0.07]
                  blur-[60px]
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              {/* =================================================
                  CATEGORY HEADER
              ================================================== */}
              <div
                className="
                  relative
                  flex
                  items-center
                  justify-between
                  mb-5
                "
              >

                <div className="flex items-center gap-2.5">

                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-primary
                      shadow-[0_0_10px_rgba(255,45,85,0.7)]
                    "
                  />

                  <h3
                    className="
                      font-heading
                      font-bold
                      text-xs
                      sm:text-sm
                      tracking-[0.15em]
                      uppercase
                      text-primary
                    "
                  >
                    {group.category}
                  </h3>

                </div>

                {/* Skill Count */}
                <span
                  className="
                    text-[9px]
                    sm:text-[10px]
                    text-white/20
                    tracking-wider
                  "
                >
                  {String(group.items.length).padStart(2, "0")}
                </span>

              </div>

              {/* =================================================
                  SKILLS GRID
              ================================================== */}
              <div
                className="
                  relative
                  grid
                  grid-cols-3
                  gap-2
                  sm:gap-2.5
                  lg:gap-3
                "
              >

                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    data-cursor-hover
                    className="
                      group/skill
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-1.5
                      sm:gap-2

                      min-h-[76px]
                      sm:min-h-[82px]
                      lg:min-h-[88px]

                      rounded-xl

                      border
                      border-white/[0.06]

                      bg-white/[0.02]

                      px-1.5
                      sm:px-2
                      py-3

                      hover:border-primary/35
                      hover:bg-primary/[0.05]
                      hover:-translate-y-1

                      transition-all
                      duration-300
                    "
                  >

                    {/* Skill Icon */}
                    <Icon
                      name={skill.icon}
                      size={20}
                      style={{
                        color: skill.color,
                      }}
                      className="
                        opacity-75
                        group-hover/skill:opacity-100
                        group-hover/skill:scale-110
                        transition-all
                        duration-300
                      "
                    />

                    {/* Skill Name */}
                    <span
                      className="
                        text-[9px]
                        sm:text-[10px]
                        lg:text-[11px]
                        text-white/50
                        group-hover/skill:text-white/90
                        text-center
                        leading-tight
                        transition-colors
                        duration-300
                      "
                    >
                      {skill.name}
                    </span>

                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}