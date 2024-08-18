import { motion } from "framer-motion";
import "../styles/susbsystems.scss";
import SubsystemCard from "../components/subsystemCard";
import PSD_subsystem_logo from "../assets/PSD-bg.png";
import STS_subsystem_logo from "../assets/STS-bg.png";
import Payload_subsystem_logo from "../assets/Payload-bg.png";
import OBC_subsystem_logo from "../assets/OBC-bg.png";
import TTC_subsystem_logo from "../assets/TTC-bg.png";
import ADCS_subsystem_logo from "../assets/ADCS-bg.png";
import EPS_subsystem_logo from "../assets/EPS-bg.png";




export default function Subsystems() {
  const subsys_list = [{
    'img' : PSD_subsystem_logo,
    'head_text':"PSD",
    'description':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quae aperiam voluptatum vitae corporis voluptas ab."

  },
  {
    'img' : STS_subsystem_logo,
    'head_text':"STS",
    'description':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quae aperiam voluptatum vitae corporis voluptas ab."


  },
  {
    'img' : Payload_subsystem_logo,
    'head_text':"PAYLOAD",
    'description':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quae aperiam voluptatum vitae corporis voluptas ab."

  },
  {
    'img' : OBC_subsystem_logo,
    'head_text':"OBC",
    'description':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quae aperiam voluptatum vitae corporis voluptas ab."

  },
  {
    'img' : TTC_subsystem_logo,
    'head_text':"TTC",
    'description':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quae aperiam voluptatum vitae corporis voluptas ab."

  },
  {
    'img' : ADCS_subsystem_logo,
    'head_text':"ADCS",
    'description':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quae aperiam voluptatum vitae corporis voluptas ab."

  },
  {
    'img' : EPS_subsystem_logo,
    'head_text':"EPS",
    'description':"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quae aperiam voluptatum vitae corporis voluptas ab."

  }]
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
    >
      <h1>SUBSYSTEMS</h1>
      <div className="main-container">
       {subsys_list.map((subsys_list)=>{
        return( <SubsystemCard object={subsys_list.img}
                     header={subsys_list.head_text}
                     description={subsys_list.description}
      /> )})}
        
      </div>

    </motion.div>
  );
}
