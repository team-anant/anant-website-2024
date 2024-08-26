import { AnimatePresence } from "framer-motion";
import { Navigate, useLocation } from "react-router-dom";

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
import Achievements from "./pages/Achievements";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminPanel from "./pages/AdminPanel";

export default function AnimationWrapper() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/subsystems" element={<Subsystems />} />
        <Route path="/subsysteminfo" element={<Subsysteminfo />} />
        <Route path="/events" element={<Events />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/authorize"
          element={
            <ProtectedRoutes>
              <AdminPanel />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route path="/admin/*" element={<Navigate to={"/admin/login"} />} />
      </Routes>
    </AnimatePresence>
  );
}
