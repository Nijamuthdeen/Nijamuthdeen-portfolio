import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const feedback = [
  {
    name: "Stackorax Tech",
    role: "Founder & Developer",
    quote:
      "Built the Stackorax platform from the ground up with a focus on modern UI, responsive experiences, scalable architecture, and full-stack product development.",
  },
  {
    name: "ZareenWear",
    role: "E-Commerce Platform",
    quote:
      "Designed and developed a modern clothing e-commerce experience with product discovery, category-based shopping, authentication, cart management, order processing, and WhatsApp ordering.",
  },
  {
    name: "Rudhra Dental Care",
    role: "Dental Clinic Website",
    quote:
      "Created a modern business website focused on presenting dental services clearly, improving the online experience, and providing a responsive interface for patients.",
  },
  {
    name: "UV India",
    role: "Business Website",
    quote:
      "Redesigned and converted the website into a modern React-based experience with a responsive interface, cleaner presentation, and a more engaging digital presence.",
  },
  {
    name: "Stoic Fitness",
    role: "Fitness Website",
    quote:
      "Designed and developed a modern fitness-focused web experience with responsive layouts, strong visual presentation, and an engaging interface for fitness content.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-20
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
          eyebrow="FEEDBACK"
          title="What people say"
          subtitle="A look at the projects, products, and digital experiences I've worked on."
        />

        {/* Feedback Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">

          {feedback.map((item, index) => (
            <motion.div
              key={item.name}
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
                    -right-16
                    -top-16
                    w-32
                    h-32
                    rounded-full
                    bg-primary/[0.08]
                    blur-[50px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* Quote Icon */}
                <div
                  className="
                    relative
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/[0.08]
                    border
                    border-primary/15
                    mb-5
                  "
                >
                  <FaQuoteLeft
                    className="text-primary/70"
                    size={15}
                  />
                </div>

                {/* Feedback */}
                <p
                  className="
                    relative
                    flex-1
                    text-sm
                    text-white/65
                    leading-6
                  "
                >
                  "{item.quote}"
                </p>

                {/* Project / Client */}
                <div
                  className="
                    relative
                    mt-6
                    pt-4
                    border-t
                    border-white/[0.07]
                  "
                >
                  <p className="text-sm font-semibold text-white">
                    {item.name}
                  </p>

                  <p className="mt-1 text-[11px] text-white/35">
                    {item.role}
                  </p>
                </div>

              </GlassCard>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}