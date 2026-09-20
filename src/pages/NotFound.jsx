import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import GradientButton from "../components/ui/GradientButton";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-bg overflow-hidden px-6">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-heading font-extrabold text-8xl sm:text-9xl text-gradient">404</h1>
        <p className="mt-4 text-lg text-white/60">This page wandered off the map.</p>
        <p className="mt-1 text-sm text-white/40">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8">
          <GradientButton href="/">
            <FaHome size={13} /> Back to Home
          </GradientButton>
        </div>
      </motion.div>
    </main>
  );
}
