import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
    const { t } = useTranslation();
  return (
    <Router>
      <nav style={{ margin: "1rem" }}>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
