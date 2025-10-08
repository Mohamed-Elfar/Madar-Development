import SectionHeader from "../../SectionHeader/SectionHeader";
import { useTranslation } from "react-i18next";
export default function TrainingIntroSection() {
  const { t } = useTranslation();
  return (
    <section className=" text-gray-800 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeader
          title={t("training.introSection.title")}
          highlightedWord={t("training.introSection.highlightedWord")}
          lineColor="#FFE047"
        />
        <h3 className="text-lg md:text-xl font-medium mb-4">
          {t("training.introSection.text1")}
        </h3>
        <p className="text-lg md:text-xl font-medium mb-4">
          {t("training.introSection.description")}
        </p>
        <p className="text-base md:text-lg text-gray-700">
          {t("training.introSection.text2")}
        </p>
      </div>
    </section>
  );
}
