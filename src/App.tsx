import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          {t("home")}
        </Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>
          {t("about")}
        </Link>
        <Link to="/settings" style={{ marginRight: "1rem" }}>
          {t("settings")}
        </Link>
      </nav>

      <AppRoutes />
    </Router>
  );
};

export default App;
