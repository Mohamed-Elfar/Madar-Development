import React from "react";
import "./OurServices.css";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <i className="fas fa-chalkboard-teacher" aria-hidden="true"></i>,
      title: t("ourServicesSection.cards.training.title"),
      front: t("ourServicesSection.cards.training.front"),
      backTitle: t("ourServicesSection.cards.training.backTitle"),
      back: t("ourServicesSection.cards.training.back"),
      path: "/training",
    },
    {
      icon: <i className="fas fa-users-cog" aria-hidden="true"></i>,
      title: t("ourServicesSection.cards.consultation.title"),
      front: t("ourServicesSection.cards.consultation.front"),
      backTitle: t("ourServicesSection.cards.consultation.backTitle"),
      back: t("ourServicesSection.cards.consultation.back"),
      path: "/consultation",
    },
    {
      icon: <i className="fas fa-file-signature" aria-hidden="true"></i>,
      title: t("ourServicesSection.cards.feasibilityStudies.title"),
      front: t("ourServicesSection.cards.feasibilityStudies.front"),
      backTitle: t("ourServicesSection.cards.feasibilityStudies.backTitle"),
      back: (
        <ul
          style={{ textAlign: "left", paddingLeft: "1.2em", marginBottom: 0 }}
        >
          <li>{t("ourServicesSection.cards.feasibilityStudies.back.item1")}</li>
          <li>{t("ourServicesSection.cards.feasibilityStudies.back.item2")}</li>
        </ul>
      ),
      path: "/feasibility-study",
    },
  ];

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
                  className="flip-card"
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
                      <h4 className="fs-4 fw-bold">{card.backTitle}</h4>
                      <div>{card.back}</div>
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
