import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import { Route, Routes } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import Alumni from "./pages/Alumni";

// Styles
import "./styles/global.scss";
import Subsystems from "./pages/Subsystems";
import Subsysteminfo from "./pages/Subsysteminfo";
import Events from "./pages/Events";
import Archives from "./pages/Archives";
import Teams from "./pages/Teams";
import ADCS from "./pages/Subsystems/ADCS";
import OBC from "./pages/Subsystems/OBC";
import EPS from "./pages/Subsystems/EPS";
import PSD from "./pages/Subsystems/PSD";
import Payload from "./pages/Subsystems/Payload";
import STS from "./pages/Subsystems/STS";
import TTC from "./pages/Subsystems/TTC";
import Achievements from "./pages/Achievements";

export default function AnimationWrapper() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/subsystems" element={<Subsystems />} />
        <Route path="/subsysteminfo" element={<Subsysteminfo />} />
        <Route path="/Subsystems/PSD" element={<PSD />} />
        <Route path="/Subsystems/TTC" element={<TTC />} />
        <Route path="/Subsystems/ADCS" element={<ADCS />} />
        <Route path="/Subsystems/EPS" element={<EPS />} />
        <Route path="/Subsystems/STS" element={<STS />} />
        <Route path="/Subsystems/Payload" element={<Payload />} />
        <Route path="/Subsystems/OBC" element={<OBC />} />
        <Route path="/events" element={<Events />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/team" element={<Teams />} />
      </Routes>
    </AnimatePresence>
  );
}
