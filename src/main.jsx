import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AnimationWrapper from "./AnimationWrapper";

import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <Layout>
          <AnimationWrapper />
        </Layout>
      </AuthProvider>
    </Router>
  </StrictMode>
);
