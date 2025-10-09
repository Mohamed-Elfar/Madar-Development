import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="relative min-h-[50vh] flex items-center justify-center "
        style={{
          backgroundImage: 'url("/images/hero/aboutHero.webp")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--color-brand-green, #27904f)",
            opacity: 0.5,
          }}
        ></div>
        <h1
          style={{
            zIndex: 1,
            fontSize: "3rem",
            fontWeight: 700,
            color: "white",
          }}
        >
          {t("About.title")}
        </h1>
      </div>
    </>
  );
};

export default Hero;
