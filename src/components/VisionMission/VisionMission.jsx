import React from "react";
import { Link } from "react-router-dom";
import "./VisionMission.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const VisionMission = () => {
  const { t } = useTranslation();
  const cards = [
    {
      title: t("visionMission.vision.title"),
      subtitle: t("visionMission.vision.subtitle"),
    },
    {
      title: t("visionMission.mission.title"),
      subtitle: t("visionMission.mission.subtitle"),
      isHighlighted: true,
    },
    {
      title: t("visionMission.journey.title"),
      subtitle: t("visionMission.journey.subtitle"),
    },
    {
      title: t("visionMission.values.title"),
      subtitle: t("visionMission.values.subtitle"),
    },
  ];

  return (
    <section
      className="vision-mission-section mx-0"
      aria-labelledby="vision-mission-heading"
    >
      <h2 id="vision-mission-heading" className="sr-only">
        {t("visionMission.sectionTitle")}
      </h2>
      <div className="container">
        <div className="cards-container">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${card.isHighlighted ? "highlighted" : ""}`}
              role="article"
              aria-labelledby={`vision-mission-card-title-${index}`}
              data-aos="fade-up"
              data-aos-delay={index * 150} // adds 150ms delay per card
            >
              <div className="card-content">
                <h3
                  id={`vision-mission-card-title-${index}`}
                  className="!font-extrabold border-b border-solid border-[#b9abab] pb-1"
                >
                  {card.title}
                </h3>
                <p>{card.subtitle}</p>
                <Link to="/about" className="learn-more-btn">
                  {t("visionMission.learnMore")}{" "}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
