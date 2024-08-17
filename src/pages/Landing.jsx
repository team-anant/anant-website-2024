import { motion } from "framer-motion";

import anant_logo from "../assets/anant-logo.png";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
      className="landing"
    >
      <img src={anant_logo} alt="placeholder" />
    </motion.div>
  );
}
