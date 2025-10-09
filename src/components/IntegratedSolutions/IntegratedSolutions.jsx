import React from "react";
import "./IntegratedSolutions.css";
import { useTranslation } from "react-i18next";

const IntegratedSolutions = () => {
  const { t } = useTranslation();

  return (
    <section
      className="integrated-solutions-section mx-0"
      aria-labelledby="integrated-solutions-title"
    >
      <div className="container">
        <div className="grid">
          <div className="left-column" data-aos="fade-up">
            <span className="subtitle">
              {t("integratedSolutions.subtitle")}
            </span>
            <h2 id="integrated-solutions-title">
              {t("integratedSolutions.title")}
            </h2>
            <p>{t("integratedSolutions.description")}</p>
            <div className="cards ">
              <div className="card mx-auto">
                <div className="icon-wrapper">
                  <i className="fas fa-users" aria-hidden="true"></i>
                </div>
                <h3>{t("integratedSolutions.cards.workers.title")}</h3>
                <p>{t("integratedSolutions.cards.workers.description")}</p>
              </div>
              <div className="card mx-auto">
                <div className="icon-wrapper">
                  <i className="fas fa-cogs" aria-hidden="true"></i>
                </div>
                <h3>{t("integratedSolutions.cards.process.title")}</h3>
                <p>{t("integratedSolutions.cards.process.description")}</p>
              </div>
            </div>
          </div>
          <div className="right-column" data-aos="fade-up">
            <div className="image-container">
              <img
                src="/images/whoWeAre.webp"
                alt={t("integratedSolutions.imageAlt")}
                loading="lazy"
              />
              <div className="overlay" aria-hidden="true">
                <div className="experience mx-auto text-center">
                  <h3>20+</h3>
                  <p>{t("integratedSolutions.experience")}</p>
                </div>
                <div className="features">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" aria-hidden="true"></i>
                      {t("integratedSolutions.features.expertise")}
                    </li>
                    <li>
                      <i className="fas fa-check-circle" aria-hidden="true"></i>
                      {t("integratedSolutions.features.approach")}
                    </li>
                    <li>
                      <i className="fas fa-check-circle" aria-hidden="true"></i>
                      {t("integratedSolutions.features.collaboration")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSolutions;
