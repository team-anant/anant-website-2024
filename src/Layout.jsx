import React from "react";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

Layout.propTypes = {
  children: React.node,
};

export default function Layout({ children }) {
  const location = useLocation();

  if (location.pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <div style={{ paddingTop: "2rem", width: "100%", height: "100%" }}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
