import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./FeasibilityStudies.css";
import { Helmet } from "react-helmet-async";
const services = [
  {
    key: "market",
    icon: "📊",
    title: "Market Feasibility",
    items: [
      "Market demand analysis",
      "Competitive landscape evaluation",
      "Customer segmentation and behavior analysis",
      "Pricing strategy recommendations",
    ],
  },
  {
    key: "technical",
    icon: "🛠️",
    title: "Technical Feasibility",
    items: [
      "Site and location analysis",
      "Technology and infrastructure requirements assessment",
      "Operational workflow design evaluation",
      "Resource availability and logistics assessment",
    ],
  },
  {
    key: "financial",
    icon: "💰",
    title: "Financial Feasibility",
    items: [
      "Capital investment estimation",
      "Revenue and cost projections",
      "Break-even analysis",
      "ROI and NPV calculations",
    ],
  },
  {
    key: "legal",
    icon: "⚖️",
    title: "Legal and Regulatory Feasibility",
    items: [
      "Compliance with local and international regulations",
      "Licensing and permit requirements assessment",
      "Environmental impact assessments",
    ],
  },
  {
    key: "organizational",
    icon: "👥",
    title: "Organizational Feasibility",
    items: [
      "Human resource planning",
      "Management structure evaluation",
      "Strategic alignment with business goals",
    ],
  },
  {
    key: "risk",
    icon: "⚠️",
    title: "Risk Assessment and Mitigation",
    items: [
      "SWOT analysis",
      "Risk identification and prioritization",
      "Contingency planning",
    ],
  },
];

export default function FeasibilityStudies() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Helmet>
        <title>Feasibility Studies | ConsulRain</title>
        <meta
          name="description"
          content="Explore our comprehensive feasibility studies for market, technical, financial, legal, and organizational analysis."
        />
      </Helmet>
      <div className="feasibility-hero animate-fade-in">
        <div className="feasibility-hero-content">
          <h1 className="feasibility-title">{t("feasibility.title")}</h1>
          <div className="feasibility-intro-card">
            <p className="feasibility-desc-short">
              {t("feasibility.intro").slice(0, 180)}...
            </p>
            <button
              className="feasibility-readmore-btn"
              onClick={() => setShowModal(true)}
            >
              {t("feasibility.showIntro") || "Read More"}
            </button>
          </div>
          {showModal && (
            <div
              className="feasibility-modal-overlay"
              onClick={() => setShowModal(false)}
            >
              <div
                className="feasibility-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="feasibility-modal-title">
                  {t("feasibility.title")}
                </h2>
                <p className="feasibility-modal-desc">
                  {t("feasibility.intro")}
                </p>
                <button
                  className="feasibility-modal-close"
                  onClick={() => setShowModal(false)}
                >
                  {t("feasibility.hideIntro") || "Close"}
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="feasibility-cards-container">
          {services.map((service, idx) => (
            <div
              key={service.key}
              className="feasibility-card animate-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="feasibility-card-icon">{service.icon}</div>
              <h2 className="feasibility-card-title">
                {t(`feasibility.services.${service.key}.title`)}
              </h2>
              <ul className="feasibility-card-list">
                {service.items.map((item, i) => (
                  <li key={i}>
                    {t(`feasibility.services.${service.key}.items.${i}`)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
