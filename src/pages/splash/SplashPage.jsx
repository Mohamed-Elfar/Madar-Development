import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "/public/images/logo/madar-logo.png";
import { useTranslation } from "react-i18next";
import "./SplashPage.css";

export default function SplashPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const lang =
    (typeof document !== "undefined" && document.documentElement.lang) || "en";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        {/* Spinning Logo */}
        <div className="logo-container">
          <img
            src={logoImage}
            alt="ConsulRain Logo"
            className="spinning-logo"
            loading="lazy"
          />
        </div>

        {/* Company Name */}
        <div className="company-info ">
          <div className="company-text-container">
            <h1
              className="company-main-name"
              dir={lang === "ar" ? "rtl" : "ltr"}
              style={{
                unicodeBidi: "plaintext",
                whiteSpace: "nowrap",
              }}
            >
              {t("brandName")}
            </h1>
            <p className="company-subtitle">{t("brandTagline")}</p>
          </div>

          {/* Loading Animation */}
          <div className="loading-animation m-auto">
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
