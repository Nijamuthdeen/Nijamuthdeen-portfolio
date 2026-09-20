import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";

import { projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

/* =========================================================
   PROJECT IMAGES
   Unsplash images selected according to project category
========================================================= */

const projectImages = {
  Stackorax:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85",

  ZareenWear:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",

  "UV India":
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",

  "Stoic Fitness":
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",

  "Rudhra Dental Care":
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85",

  "More Coming Soon":
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
};

/* =========================================================
   PROJECT DATA
   This overrides the old project data so Student Management
   System does not appear even if it still exists in projects.js.
========================================================= */

const portfolioProjects = [
  {
    title: "Stackorax",
    description:
      "A modern technology platform and digital presence built for Stackorax Tech, focused on showcasing services, products, and scalable full-stack solutions.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    features: [
      "Modern responsive SaaS-style interface",
      "Full-stack application architecture",
      "Responsive and scalable UI",
    ],
    github: "https://github.com/Nijamuthdeen",
    demo: "https://stackorax.in/",
  },

  {
    title: "ZareenWear",
    description:
      "A modern clothing e-commerce platform featuring product discovery, category-based shopping, authentication, cart management, order processing, and WhatsApp ordering.",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "JavaScript"],
    features: [
      "Responsive fashion e-commerce experience",
      "Authentication, cart and order management",
      "WhatsApp ordering integration",
    ],
    github: "https://github.com/Nijamuthdeen",
    demo: "https://zareenwear.in",
  },

  {
  title: "UV India",
  description:
    "Premium business showcase website for an interior design and construction company. Portfolio gallery, service pages, and SEO-optimized lead capture.",
  tech: ["React", "Tailwind CSS", "SEO"],
  features: [
    "Premium interior & construction showcase",
    "Portfolio gallery and service pages",
    "SEO-focused lead generation",
  ],
  github: "",
  demo: "https://uv-india.vercel.app/",
},

{
  title: "Stoic Fitness",
  description:
    "A premium fitness platform designed for modern gyms and personal trainers. Features workout programs, trainer profiles, transformation galleries, membership plans, BMI calculator, and responsive user experience.",
  tech: ["React", "CSS3", "Framer Motion", "Responsive Design"],
  features: [
    "Modern fitness platform with engaging user experience",
    "Workout programs and trainer profiles",
    "BMI calculator and transformation gallery",
  ],
  github: "",
  demo: "https://stoic-fitness.vercel.app/",
},

{
  title: "Rudhra Dental Care",
  description:
    "A modern concept redesign for a dental clinic featuring premium UI/UX, responsive design, appointment booking interface, smooth animations, and SEO-ready architecture.",
  tech: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "Spring Boot",
    "MySQL",
  ],
  features: [
    "Healthcare website concept",
    "Responsive appointment booking interface",
    "Smooth animations and SEO-ready architecture",
  ],
  github: "",
  demo: "https://rudhradental.vercel.app/",
},

  {
    title: "More Coming Soon",
    description:
      "New client projects and digital products are currently in progress. More case studies will be added soon.",
    tech: [],
    features: [],
    github: "",
    demo: "",
    comingSoon: true,
  },
];

/* =========================================================
   PROJECTS SECTION
========================================================= */

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-20 left-[-180px] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-[-180px] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="section-container relative z-10">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <SectionHeading
          eyebrow="Work"
          title="Selected Projects"
          subtitle="A selection of products, client work, and digital experiences I've built."
        />

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12">
          {portfolioProjects.map((project, index) => {
            const image = projectImages[project.title];

            return (
              <motion.div
                key={project.title}
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
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                }}
                className="h-full"
              >
                <GlassCard
                  className="
                    h-full
                    overflow-hidden
                    flex
                    flex-col
                    group
                    border
                    border-white/[0.08]
                    hover:border-primary/30
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >

                  {/* =================================================
                      PROJECT IMAGE
                  ================================================= */}

                  <div className="relative aspect-[16/9] overflow-hidden bg-black">

                    {project.comingSoon ? (
                      <>
                        <img
                          src={image}
                          alt="Upcoming project workspace"
                          loading="lazy"
                          className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                            opacity-30
                            grayscale
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />

                        <div className="absolute inset-0 bg-black/70" />

                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-5">

                          <div
                            className="
                              w-11
                              h-11
                              rounded-full
                              flex
                              items-center
                              justify-center
                              bg-primary/10
                              border
                              border-primary/20
                              shadow-glow-sm
                              mb-3
                            "
                          >
                            <FaHourglassHalf
                              size={18}
                              className="text-primary"
                            />
                          </div>

                          <p className="text-sm font-semibold text-white">
                            More Coming Soon
                          </p>

                          <p className="text-[11px] text-white/45 mt-1">
                            New projects are currently in progress.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <img
                          src={image}
                          alt={`${project.title} project`}
                          loading="lazy"
                          className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                          onError={(event) => {
                            event.currentTarget.src =
                              "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85";
                          }}
                        />

                        {/* Dark Gradient */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/80
                            via-black/20
                            to-transparent
                            pointer-events-none
                          "
                        />

                        {/* Red Hover Glow */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-primary/10
                            via-transparent
                            to-transparent
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            duration-500
                            pointer-events-none
                          "
                        />

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span
                            className="
                              inline-flex
                              items-center
                              px-2.5
                              py-1
                              rounded-full
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-widest
                              bg-black/60
                              backdrop-blur-md
                              border
                              border-white/10
                              text-white/80
                            "
                          >
                            {project.title === "UV India"
                              ? "Business Website"
                              : project.title === "Stoic Fitness"
                              ? "Fitness Platform"
                              : project.title === "Rudhra Dental Care"
                              ? "Dental Website"
                              : project.title === "ZareenWear"
                              ? "E-Commerce"
                              : "Web Application"}
                          </span>
                        </div>

                        {/* Hover Label */}
                        <div
                          className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            bg-black/25
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            duration-300
                          "
                        >
                          <span
                            className="
                              px-4
                              py-2
                              rounded-full
                              bg-black/70
                              backdrop-blur-md
                              border
                              border-white/10
                              text-xs
                              font-semibold
                              text-white
                            "
                          >
                            View Project
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* =================================================
                      PROJECT CONTENT
                  ================================================= */}

                  <div className="p-4 sm:p-5 flex flex-col flex-1">

                    {/* Title */}
                    <h3
                      className="
                        font-heading
                        font-bold
                        text-base
                        sm:text-lg
                        text-white
                        mb-2
                        group-hover:text-primary
                        transition-colors
                        duration-300
                      "
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        text-xs
                        sm:text-sm
                        text-white/55
                        leading-relaxed
                        line-clamp-4
                        mb-4
                      "
                    >
                      {project.description}
                    </p>

                    {/* =================================================
                        TECH STACK
                    ================================================= */}

                    {project.tech?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((technology) => (
                          <span
                            key={technology}
                            className="
                              text-[9px]
                              sm:text-[10px]
                              px-2
                              sm:px-2.5
                              py-1
                              rounded-full
                              bg-white/[0.03]
                              text-white/60
                              border
                              border-white/10
                              whitespace-nowrap
                            "
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* =================================================
                        KEY FEATURE
                    ================================================= */}

                    {project.features?.length > 0 && (
                      <div className="mb-5">
                        <div
                          className="
                            flex
                            items-start
                            gap-2
                            rounded-xl
                            border
                            border-primary/25
                            bg-primary/[0.06]
                            px-3
                            py-2.5
                          "
                        >
                          <FaCheckCircle
                            className="text-primary mt-[2px] shrink-0"
                            size={11}
                          />

                          <span className="text-[10px] sm:text-[11px] text-white/65 leading-relaxed">
                            {project.features[0]}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* =================================================
                        BUTTONS
                    ================================================= */}

                    {!project.comingSoon &&
                      (project.github || project.demo) && (
                        <div className="mt-auto flex gap-2 pt-1">

                          {/* GitHub */}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor-hover
                              aria-label={`View ${project.title} source code`}
                              className="
                                flex-1
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                py-2.5
                                rounded-full
                                border
                                border-white/10
                                text-[10px]
                                sm:text-[11px]
                                font-semibold
                                text-white/75
                                hover:border-primary/40
                                hover:text-primary
                                hover:bg-primary/[0.04]
                                transition-all
                                duration-300
                              "
                            >
                              <FaGithub size={12} />
                              Code
                            </a>
                          )}

                          {/* Live Demo */}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor-hover
                              aria-label={`Visit ${project.title} live website`}
                              className="
                                flex-1
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                py-2.5
                                rounded-full
                                bg-red-gradient
                                text-[10px]
                                sm:text-[11px]
                                font-semibold
                                text-white
                                shadow-glow-sm
                                hover:shadow-glow
                                hover:scale-[1.02]
                                transition-all
                                duration-300
                              "
                            >
                              Live Demo
                              <FaExternalLinkAlt size={9} />
                            </a>
                          )}
                        </div>
                      )}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}