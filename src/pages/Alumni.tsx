import { motion } from "framer-motion";

import { useState } from "react";
import AlumniRegistration from "../components/AlumniRegistration";
import "../styles/alumni.scss";

export default function Alumni() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
      className="alumni-section"
    >
      <AlumniRegistration
        isModalOpen={isModalOpen}
        // handleOk={handleOk}
        setIsModalOpen={setIsModalOpen}
        handleCancel={handleCancel}
      />
      <aside className="alumni-hero">
        <button onClick={() => setIsModalOpen(true)}>
          Register as Alumnus
        </button>
        <div className="alumni-hero-text">
          <h1>
            OUR <span>&nbsp;ALUMNI</span>
          </h1>
        </div>
      </aside>
    </motion.section>
  );
}
