import React from "react";
import Navbar from "./components/Navbar";

Layout.propTypes = {
  children: React.node,
};

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
