import HeroSection from "../../components/training/Hero/HeroSection";
import TrainingIntroSection from "../../components/training/TrainingIntroSection/TrainingIntroSection";
import TrainingProcessSection from "../../components/training/TrainingProcessSection/TrainingProcessSection";
import SEO from "../../components/SEO/SEO";
import { useTranslation } from "react-i18next";

export default function TrainingPage() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={`${t("training.heroSection.title", "Training")} | ${t(
          "brandName"
        )}`}
        description={
          "Hands-on programs: Training of Trainers, Project Management, Fundraising and Financial Management — converting learning into measurable organisational impact."
        }
        pathname={"/training"}
      />
      <div>
        <HeroSection />
        <TrainingIntroSection />
        <TrainingProcessSection />
      </div>
    </>
  );
}
