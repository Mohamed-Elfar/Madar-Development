import React from "react";
import { useTranslation } from "react-i18next";

export default function StatsSection() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: (
        <img
          src="/images/learners.webp"
          alt={t("stats.satisfiedUsers")}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
      ),
      number: "90%",
      label: t("stats.satisfiedUsers"),
    },
    {
      icon: (
        <img
          src="/images/clock.webp"
          alt={t("stats.learningHours")}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
      ),
      number: "20K+",
      label: t("stats.learningHours"),
    },
    {
      icon: (
        <img
          src="/images/world-pin.webp"
          alt={t("stats.employmentRate")}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
      ),
      number: "95%",
      label: t("stats.projectSuccessRate"),
    },
    {
      icon: (
        <img
          src="/images/world.webp"
          alt={t("stats.impactedCountries")}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
      ),
      number: "8+",
      label: t("stats.impactedCountries"),
    },
  ];

  return (
    <section
      className="stats py-16 bg-primary-50 text-center mx-0"
      role="region"
      aria-labelledby="stats-heading"
    >
      <h2 id="stats-heading" className="sr-only">
        {t("stats.sectionTitle")}
      </h2>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="bg-blue-100 imgBg rounded-full flex-shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:font-extrabold md:font-black text-gray-800 leading-tight stateNumber">
                  {stat.number}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium sm:font-semibold text-gray-600 statLabel">
                  {stat.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
