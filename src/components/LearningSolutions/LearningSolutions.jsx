import React from "react";
import { useTranslation } from "react-i18next";
import LearningCard from "../LearningCard/LearningCard";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LearningSolutions() {
  const { t } = useTranslation();

  const cards = [
    {
      image: "/images/learners.svg",
      title: t("empower.aiStrategy.title"),
      description: t("empower.aiStrategy.description"),
      buttonText: t("empower.aiStrategy.buttonText"),
    },
    {
      image: "/images/businesses.svg",
      title: t("empower.digitalTransformation.title"),
      description: t("empower.digitalTransformation.description"),
      buttonText: t("empower.digitalTransformation.buttonText"),
    },
    {
      image: "/images/governments.svg",
      title: t("empower.technologySolutions.title"),
      description: t("empower.technologySolutions.description"),
      buttonText: t("empower.technologySolutions.buttonText"),
    },
    {
      image: "/images/governments.svg",
      title: t("empower.technologySolutions.title"),
      description: t("empower.technologySolutions.description"),
      buttonText: t("empower.technologySolutions.buttonText"),
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <SectionHeader
        title={t("empower.title")}
        highlightedWord={t("empower.highlightedWord")}
        lineColor="#FFE047"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {cards.map((card, idx) => (
          <LearningCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}
