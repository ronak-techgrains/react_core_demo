import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  return <h1>{t("about")}</h1>;
};

export default About;
