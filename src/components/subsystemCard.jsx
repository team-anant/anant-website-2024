import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/susbsystems.scss";
import { Link } from "react-router-dom";

export default function SubsystemCard({ object, header, description }) {
  const [hover, sethover] = useState(false);
  const data = { name: header, object: object, description: description };
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      onHoverStart={() => {
        sethover(true);
      }}
      onHoverEnd={() => {
        sethover(false);
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <div className="work-container">
        <div className="card">
          <div className="text_cont">
            <img
              style={hover ? {} : {}}
              src={object}
              alt="placeholder"
              className="Subsys-Img"
            />

            <div className="subsys_name">{header}</div>
            <div
              style={hover ? { display: "flex" } : {}}
              className="description"
            >
              {description}
            </div>
            <div
              style={hover ? { display: "flex", textDecoration: "none" } : {}}
              className="btn"
            >
              <Link to="/Subsysteminfo" state={data}>
                Click Here to Know More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
