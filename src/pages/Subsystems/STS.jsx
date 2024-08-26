import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/susbsystems.scss"
import btn from "../../assets/Forward Button.png"
import STS_subsystem_logo from "../../assets/STS-bg.png";

import { motion } from "framer-motion";

export default function STS() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
    >
    <div style={{height:"100vh",width:"100vw",background:"url("+ STS_subsystem_logo +")",backgroundSize:"cover", backgroundPositionY:"-180px"}}>
        <Link to="/Subsystems" ><img src={btn} alt="" /></Link>
      <h1>STS</h1>
      <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur rem neque suscipit consectetur. Veritatis beatae repudiandae, dolorem ipsa libero amet quae officiis, soluta aut et quos, sint ut consequatur dignissimos facilis quia.
      </div>
    </div>
    </motion.div>
  )
}
