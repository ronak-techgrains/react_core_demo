import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <nav
          style={{
            width: "220px",
            background: "#1e293b", // dark blue/gray
            padding: "2rem 1rem",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
          }}>
          <h2 style={{ color: "#38bdf8", marginBottom: "2rem" }}>MyApp</h2>

          <Link to="/" style={linkStyle}>
            {t("home")}
          </Link>
          <Link to="/about" style={linkStyle}>
            {t("about")}
          </Link>
          <Link to="/settings" style={linkStyle}>
            {t("settings")}
          </Link>
        </nav>

        {/* Main Content Area */}
        <main
          style={{
            flex: 1,
            padding: "2rem",
            background: "#f9fafb",
            width: "100rem",
          }}>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "0.75rem 1rem",
  marginBottom: "0.5rem",
  borderRadius: "8px",
  transition: "background 0.3s",
  fontWeight: "500",
};

export default App;
