import { motion } from "framer-motion";
import { achievements } from "../../data/content";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function Achievements() {
  return (
    <section className="relative py-20 border-y border-line bg-white/[0.015]">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              className="flex flex-col items-center text-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <AnimatedCounter value={a.value} suffix={a.suffix} />
              <span className="text-xs sm:text-sm text-white/50 tracking-wide">{a.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
