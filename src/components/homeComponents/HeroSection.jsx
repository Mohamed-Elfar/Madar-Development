import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="w-full bg-blue-25 bg-cover bg-primary-50 py-4 lg:py-5 flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-36 items-center lg:px-24 xl:px-16 2xl:px-48 mx-0"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Left Text Section */}
      <div className="flex flex-col items-center lg:items-start sm:text-center lg:text-start gap-3 3xl:ms-auto">
        <h1
          id="hero-title"
          className="text-center md:!text-start text-lg md:text-2xl lg:text-4xl xl:text-5xl !text-primary-500 !font-extrabold"
        >
          {t("hero.title")}
        </h1>

        <h2 className="hero_subtitle text-base md:text-lg lg:text-xl xl:text-2xl !text-gray-700 font-semibold max-w-3xl">
          {t("hero.subtitle")}
        </h2>

        <div className="mt-4 flex flex-wrap justify-center lg:justify-start md:text-cente gap-2">
          <a
            href="#offer"
            className="bg-primary-500 text-white px-10 py-3 rounded hover:bg-primary-700 transition font-semibold"
          >
            {t("hero.cta")}
          </a>
        </div>
      </div>

      {/* Right Avatar Section */}
      <div
        dir="ltr"
        className="flex flex-col gap-y-2 mb-11 3xl:me-auto justify-center"
        role="group"
        aria-label="A collage of diverse professionals"
      >
        <div className="flex gap-x-2">
          <div
            className="relative flex pt-7 w-32 h-32 md:w-48 md:h-48 xl:w-56 xl:h-56 mt-4 rounded-tl-[50%] border-8 border-white"
            style={{ backgroundColor: "var(--color-primary-800)" }}
          >
            <img
              className="mx-auto w-auto h-auto"
              width="180"
              height="180"
              loading="lazy"
              src="/images/hero/people1.webp"
              alt={t("hero.alt.person1")}
            />
          </div>
          <div
            className="relative flex pt-7 w-32 h-32 md:w-48 md:h-48 xl:w-56 xl:h-56 rounded-tr-[50%] border-8 border-white"
            style={{ backgroundColor: "var(--color-primary-300)" }}
          >
            <img
              className="mx-auto w-auto h-auto"
              width="180"
              height="180"
              loading="lazy"
              src="/images/hero/people2.webp"
              alt={t("hero.alt.person2")}
            />
          </div>
        </div>
        <div className="flex gap-x-2">
          <div
            className="relative flex pt-7 w-32 h-32 md:w-48 md:h-48 xl:w-56 xl:h-56 rounded-bl-[50%] border-8 border-white"
            style={{ backgroundColor: "var(--color-primary-200)" }}
          >
            <img
              className="mx-auto w-auto h-auto"
              width="180"
              height="180"
              loading="lazy"
              src="/images/hero/people3.webp"
              alt={t("hero.alt.person3")}
            />
          </div>
          <div
            className="relative flex pt-7 w-32 h-32 md:w-48 md:h-48 xl:w-56 xl:h-56 rounded-br-[50%] border-8 border-white"
            style={{ backgroundColor: "var(--color-primary-400)" }}
          >
            <img
              className="mx-auto w-auto h-auto"
              width="180"
              height="180"
              loading="lazy"
              src="/images/hero/people4.webp"
              alt={t("hero.alt.person4")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
