import React, { useRef } from "react";
import SEO from "../../components/SEO/SEO";
import { useTranslation } from "react-i18next";
import {
  Hero,
  FAQ,
  VisionMission,
  IntegratedSolutions,
} from "../../components";
// Removed LogosCarousel to render static logo tiles instead

const About = () => {
  const heroRef = useRef();
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO
        title={`${t("About.title", "About")} | ${t("brandName")}`}
        description={
          "Learn about MADAR DEVELOPMENT's mission, founders, and integrated consulting and training services that deliver measurable organizational impact."
        }
        pathname={"/about"}
        image={"/images/whoWeAre.webp"}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <IntegratedSolutions />
      <VisionMission />
      {/* Partners section (same layout as grant-hero) */}
      <div className="grant-hero animate-fade-in">
        <div className="grant-left">
          <div
            className={`grant-hero-content ${
              i18n && i18n.language && i18n.language.startsWith("ar")
                ? "text-right"
                : "text-left"
            }`}
          >
            <div className="grant-list mt-6">
              <h3 className="text-xl font-bold mb-3">{t("partners.title")}</h3>

              <ul className="list-none space-y-2 text-lg">
                {t("partners.list", { returnObjects: true }).map(
                  (donor, idx) => (
                    <li
                      key={idx}
                      className={`w-full flex items-center ${
                        i18n && i18n.language && i18n.language.startsWith("ar")
                          ? "flex-row-reverse justify-end"
                          : "flex-row justify-start"
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        style={{
                          color: "var(--color-brand-green, #189748)",
                          marginRight:
                            i18n &&
                            i18n.language &&
                            i18n.language.startsWith("ar")
                              ? 0
                              : 8,
                          marginLeft:
                            i18n &&
                            i18n.language &&
                            i18n.language.startsWith("ar")
                              ? 8
                              : 0,
                        }}
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className={`donor-text`}>{donor}</span>
                    </li>
                  )
                )}
              </ul>

              <div className="logos-swiper-wrapper">
                <div
                  className="logos-swiper !flex-wrap md:!flex-nowrap"
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  {(() => {
                    const partnerNames =
                      t("partners.list", { returnObjects: true }) || [];
                    return [
                      {
                        src: "/images/partners/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B5%D8%AF%D8%B1%D9%8A%D9%86-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D9%8A%D9%86.webp",
                        href: "https://share.google/wxwSOg4P0AOIv0Daz",
                        alt: "جمعية المصدرين الصناعية",
                      },
                      {
                        src: "/images/partners/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D8%A9-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9.webp",
                        href: "https://share.google/MR4P4s8ScxnCW5a0E",
                        alt: "جمعية تكنولوجيا الهندسة الطبية",
                      },
                      {
                        src: "/images/partners/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D9%88%D8%B5%D9%88%D9%84-%D8%B4%D8%B9%D8%A7%D8%B1.webp",
                        href: "https://share.google/PXqn8BcVhcqD3NZU7",
                        alt: "جمعية وصول الخيرية",
                      },
                      {
                        src: "/images/partners/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%AC%D9%88%D8%AF.webp",
                        href: "https://share.google/fsaWBycMbQop6Gxnt",
                        alt: "جمعية جود",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="logo-slide wrap"
                        style={{ width: 170 }}
                      >
                        <div className={`logo-item !h-[150px]`}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={partnerNames[i] || item.alt}
                          >
                            <img
                              src={item.src}
                              alt={partnerNames[i] || item.alt}
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grant-right">
          <img
            className="grant-map"
            src="/images/marked-map.webp"
            alt="world map"
            loading="lazy"
          />
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default About;
