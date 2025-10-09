import React from "react";
import "./OurServices.css";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  const cardKeys = [
    "training",
    "consulting",
    "projectsDivision",
    "grantOpportunities",
    "institutional",
  ];

  const cards = cardKeys.map((k) => ({
    icon:
      k === "training" ? (
        <i className="fas fa-chalkboard-teacher" aria-hidden="true"></i>
      ) : k === "consulting" ? (
        <i className="fas fa-users-cog" aria-hidden="true"></i>
      ) : k === "projectsDivision" ? (
        <i className="fas fa-project-diagram" aria-hidden="true"></i>
      ) : (
        <i className="fas fa-file-signature" aria-hidden="true"></i>
      ),
    title: t(`ourServicesSection.cards.${k}.title`),
    front: t(`ourServicesSection.cards.${k}.front`),
    backDescription: t(`ourServicesSection.cards.${k}.backDescription`),
    path: t(`ourServicesSection.cards.${k}.path`) || `/${k}`,
  }));

  return (
    <section
      id="offer"
      className="offer pt-5 mx-0"
      aria-labelledby="our-services-heading"
    >
      <div className="container">
        <div className="offer__text text-center w-full lg:w-1/2 mx-auto">
          <h2
            id="our-services-heading"
            className="fs-6 text-uppercase text--orange mb-3 fw-bold"
          >
            {t("ourServicesSection.title")}
          </h2>
          <h3 className="fs-1 mb-4 fw-bold">
            {t("ourServicesSection.subtitle")}
          </h3>
          <p className="mb-5 fw-bold pb-0 pb-md-5">
            {t("ourServicesSection.description")}
          </p>
        </div>
        <div className="offer__cards">
          <ul className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4 justify-content-center px-0">
            {cards.map((card, idx) => (
              <li className="cols mb-16" key={idx}>
                <div
                  className={`flip-card card-${idx + 1}`}
                  aria-label={`${card.title} service card`}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="icon" aria-hidden="true">
                        {card.icon}
                      </div>
                      <h4 className="fs-4 fw-bold">{card.title}</h4>
                      <p>{card.front}</p>
                    </div>
                    <div className="flip-card-back">
                      <h4 className="fs-5 fw-bold">{card.title}</h4>
                      <p className="back-desc">{card.backDescription}</p>
                      <a href={card.path} className="learn-more-btn">
                        {t("ourServicesSection.learnMore")}
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
