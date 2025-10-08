import HeroSection from "../../components/training/Hero/HeroSection";
import TrainingIntroSection from "../../components/training/TrainingIntroSection/TrainingIntroSection";
import TrainingProcessSection from "../../components/training/TrainingProcessSection/TrainingProcessSection";
import TrainingBusinessLines from "../../components/TrainingBusinessLines/TrainingBusinessLines";
import ScopeOfServices from "../../components/ScopeOfServices/ScopeOfServices";
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
          content="Discover ConsulRain's training programs, business lines, and our process for empowering your team."
        />
      </Helmet>
      <div>
        <HeroSection />
        <TrainingIntroSection />
        <TrainingProcessSection />
        {/* <TrainingBusinessLines /> */}
      </div>
    </>
  );
}
