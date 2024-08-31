// import { motion } from "framer-motion";

// export default function Achievements() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -100 }}
//       transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
//     >
//       Achievements
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";
import AchievementsComp from '../components/Achievements1';
import "../styles/Achievements.scss"

const Achievements = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
    >
      <AchievementsComp />
      </motion.div>
    </>
  );
};

export default Achievements;
