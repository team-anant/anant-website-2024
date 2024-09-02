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
    <div className="outer-div-overall">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
