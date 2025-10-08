import { useTranslation } from "react-i18next";
import SectionHeader from "../../SectionHeader/SectionHeader";
import TrainingProcessCard from "../TrainingProcessCard/TrainingProcessCard";

export default function TrainingProcessSection() {
  const { t } = useTranslation();

  const trainingCards = [
    {
      icon: "/images/diagnosis.webp",
      title: t("training.trainingProcess.steps.1.title"),
      description: t("training.trainingProcess.steps.1.description"),
      note: t("training.trainingProcess.steps.1.note"),
    },
    {
      icon: "/images/custom-training.webp",
      title: t("training.trainingProcess.steps.2.title"),
      description: t("training.trainingProcess.steps.2.description"),
    },
    {
      icon: "/images/evaluation.webp",
      title: t("training.trainingProcess.steps.3.title"),
      description: t("training.trainingProcess.steps.3.description"),
      note: t("training.trainingProcess.steps.3.note"),
    },
  ];

  return (
    <section className="py-16 bg-primary-50 text-center">
      <SectionHeader
        title={t("training.trainingProcess.title")}
        // highlightedWord={t("training.trainingProcess.highlightedWord")}
        lineColor="#FFE047"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto px-4">
        {trainingCards.map((card, idx) => (
          <TrainingProcessCard
            key={idx}
            icon={card.icon}
            title={card.title}
            description={card.description}
            note={card.note}
          />
        ))}
      </div>
    </section>
  );
}
