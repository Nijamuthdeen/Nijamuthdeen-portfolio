import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignCls = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <motion.div
      className={`flex flex-col ${alignCls} mb-14 gap-3`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-white/60 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
