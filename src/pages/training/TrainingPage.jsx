import HeroSection from "../../components/training/Hero/HeroSection";
import TrainingIntroSection from "../../components/training/TrainingIntroSection/TrainingIntroSection";
import TrainingProcessSection from "../../components/training/TrainingProcessSection/TrainingProcessSection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function TrainingPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t("training.heroSection.title", "Training")} | {t("brandName")}
        </title>
        <meta
          name="description"
          content="Hands-on training programs: Training of Trainers, Project Management, Fundraising, Financial Management, Technical Reporting — designed for nonprofits, public sector and private organisations."
        />
      </Helmet>
      <div>
        <HeroSection />
        <TrainingIntroSection />
        <TrainingProcessSection />
      </div>
    </>
  );
}
