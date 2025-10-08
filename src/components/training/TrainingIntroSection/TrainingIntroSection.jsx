import SectionHeader from "../../SectionHeader/SectionHeader";
import { useTranslation } from "react-i18next";
import "./TrainingIntroSection.css";

export default function TrainingIntroSection() {
  const { t, i18n } = useTranslation();
  const courses =
    t("training.introSection.courses", { returnObjects: true }) || [];
  const isRTL =
    i18n.language === "AR" || document.documentElement.dir === "rtl";

  return (
    <section className="training-intro py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* RIGHT: two stacked images */}
        <div className="training-right grid grid-rows-2 gap-4">
          <img
            src="/public/images/training-heroimage1.webp"
            alt="training hero 1"
            className="training-img rounded-lg"
          />
        </div>
        {/* LEFT: title + description + two-column list */}
        <div className={`training-left ${isRTL ? "text-right" : "text-left"} `}>
          <SectionHeader
            title={t("training.introSection.title")}
            highlightedWord={t("training.introSection.highlightedWord")}
            lineColor="#189748"
          />

          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
            {t("training.introSection.text1")}
          </h3>

          <div className="training-list-grid">
            <ul className="training-courses-col">
              {courses.slice(0, Math.ceil(courses.length / 2)).map((c, i) => (
                <li key={i} className="course-item">
                  <span className="course-icon" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span className="course-text">{c}</span>
                </li>
              ))}
            </ul>
            <ul className="training-courses-col">
              {courses.slice(Math.ceil(courses.length / 2)).map((c, i) => (
                <li key={i} className="course-item">
                  <span className="course-icon" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span className="course-text">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
