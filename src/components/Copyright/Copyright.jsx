import React from "react";
import "./Copyright.css";
import { useTranslation } from "react-i18next";

const Copyright = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright-section">
      <div className="container">
        <p>
          &copy; {currentYear} {t("copyright.text")}
        </p>
      </div>
    </div>
  );
};

export default Copyright;
