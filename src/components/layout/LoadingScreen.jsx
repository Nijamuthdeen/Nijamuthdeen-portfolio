import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.span
              className="font-heading text-4xl font-extrabold text-gradient"
              initial={{ letterSpacing: "0.1em", opacity: 0.4 }}
              animate={{ letterSpacing: "0.02em", opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              NJ
            </motion.span>
            <div className="h-[2px] w-40 bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-red-gradient"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
