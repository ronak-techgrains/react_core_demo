import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import { DarkModeContext } from "../context/DarkModeContext";

const Settings: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { t, i18n } = useTranslation();

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
    { value: "ar", label: "العربية" },
    { value: "gu", label: "ગુજરાતી" },
  ];

  // Ensure direction is set when language changes
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language]);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("i18nextLng", selectedLang);
  };

  return (
    <>
      <h1>{t("settings") || "Settings"}</h1>
      <p className="read-the-docs">
        {darkMode
          ? t("darkMode") || "Dark Mode"
          : t("lightMode") || "Light Mode"}
      </p>

      <button onClick={toggleDarkMode}>
        {t("toggleTheme") || "Toggle Mode"}
      </button>

      <div style={{ marginTop: "1rem" }}>
        <label htmlFor="language-select" style={{ marginRight: "0.5rem" }}>
          {t("language") || "Language"}:
        </label>
        <select
          id="language-select"
          value={i18n.language}
          onChange={handleLanguageChange}
        >
          {languageOptions.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Settings;
