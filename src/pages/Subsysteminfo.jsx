import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import "../styles/susbsystems.scss";
import btn from "../assets/Forward Button.png"

const Subsysteminfo = () => {
    const location = useLocation()
    const name = location.state.name;
    const object = location.state.object;
    const description = location.state.description;
    return ( 
    <div style={{height:"100vh",width:"100vw",background: "url("+ object +")",backgroundSize:"cover", backgroundPositionY:"-180px"}}>
        <Link to="/Subsystems" ><img src={btn} alt="" /></Link>
        <h1>
            {name}

        </h1>
        <div>
            {description}
        </div>

    </div> 
    );
}
 
export default Subsysteminfo;