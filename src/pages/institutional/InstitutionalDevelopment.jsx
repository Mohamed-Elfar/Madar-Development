import React from "react";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import TrainingProcessCard from "../../components/training/TrainingProcessCard/TrainingProcessCard";
import "./InstitutionalDevelopment.css";
import { useTranslation } from "react-i18next";

export default function InstitutionalDevelopment() {
  const { t } = useTranslation();

  const services = [
    {
      icon: "/images/association-small.webp",
      title: t("institutional.services.0.title"),
      description: t("institutional.services.0.desc"),
    },
    {
      icon: "/images/association-medium.webp",
      title: t("institutional.services.1.title"),
      description: t("institutional.services.1.desc"),
    },
    {
      icon: "/images/association-large.webp",
      title: t("institutional.services.2.title"),
      description: t("institutional.services.2.desc"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t("institutional.title")} | {t("brandName")}
        </title>
        <meta name="description" content={t("institutional.metaDescription")} />
      </Helmet>

      <div className="institutional-hero">
        <div className="institutional-hero-img">
          <img
            src="/images/Institutional-Development-Consulting.webp"
            alt="Institutional Development"
            loading="lazy"
          />
          <div className="institutional-hero-overlay" />
          <div className="institutional-hero-content">
            <h1 className="institutional-hero-title">
              {t("institutional.title")}
            </h1>
          </div>
        </div>
      </div>

      <section className="py-16 bg-primary-50 text-center">
        <SectionHeader
          title={t("institutional.servicesSectionTitle")}
          lineColor="#FFE047"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto px-4">
          {services.map((s, idx) => (
            <TrainingProcessCard
              key={idx}
              icon={s.icon}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
