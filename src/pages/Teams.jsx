import { motion } from "framer-motion";

export default function Teams() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
    >
      Subsystems
    </motion.div>
  );
}
