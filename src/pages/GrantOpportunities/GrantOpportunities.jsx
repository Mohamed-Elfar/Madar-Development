import React from "react";
import { useTranslation } from "react-i18next";
import "./GrantOpportunities.css";
import LogosCarousel from "./LogosCarousel";
import { Helmet } from "react-helmet-async";

export default function GrantOpportunities() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n && i18n.language && i18n.language.startsWith("ar");
  return (
    <>
      <Helmet>
        <title>
          {t("grant.title", "فرص المنح المالية")} | {t("brandName")}
        </title>
        <meta
          name="description"
          content={t(
            "grant.metaDescription",
            "فرص المنح المالية والمتبرعين والداعمين للبرامج المتعلقة بالاستدامة المالية."
          )}
        />
      </Helmet>
      <div className="grant-hero-img-section w-100">
        <div className="grant-hero-img-wrapper">
          <img
            src="/images/hero/pngtree-financial-finance-cartoon-banner-poster-background-image.webp"
            alt="Grant Opportunities Hero"
            className="grant-hero-img"
            loading="lazy"
          />
          <div className="grant-hero-overlay" />
          <div className="grant-hero-text">
            <h1 className="grant-hero-title">{t("grant.title")}</h1>
          </div>
        </div>
      </div>

      <div className="grant-hero animate-fade-in">
        <div className="grant-left">
          <div
            className={`grant-hero-content ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {/* Title and intro intentionally omitted; content focuses on donor list */}

            <div className="grant-list mt-6">
              <h3 className="text-xl font-bold mb-3">
                {t(
                  "grant.sectionTitle",
                  "المؤسسات المانحة في مجال دعم الاستدامة المالية:"
                )}
              </h3>

              <ul className="list-none space-y-2 text-lg">
                {t("grant.donors", { returnObjects: true }).map(
                  (donor, idx) => (
                    <li
                      key={idx}
                      className={`w-full flex items-center ${
                        isRTL
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
                            i18n.language && i18n.language.startsWith("ar")
                              ? 0
                              : 8,
                          marginLeft:
                            i18n.language && i18n.language.startsWith("ar")
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

              <LogosCarousel
                images={[
                  "/images/charity%20logos/Abdulrahman-bin-Saleh-Al-Rajhi-and-Family-Charitable-Foundation.webp",
                  "/images/charity%20logos/Al-Ajimi-and-Family-Charitable-Foundation.webp",
                  "/images/charity%20logos/Hamad-Al-Hussaini-and-Family-charity.webp",
                  "/images/charity%20logos/Jomaih-charity.webp",
                  "/images/charity%20logos/Mohammed-bin-Abdulaziz-Al-Habib-Charitable-Foundation.webp",
                  "/images/charity%20logos/Mohammed-bin-Abdullah-Aljomaih-Charitable-Foundation.webp",
                  "/images/charity%20logos/Salem-Bin-Ahmed-Balhamer-and-Family-charity.webp",
                  "/images/charity%20logos/Salem-Bin-Mahfouz-Charitable-Foundation.webp",
                  "/images/charity%20logos/Subaie-charity.webp",
                  "/images/charity%20logos/Sulaiman-bin-Abdulaziz-Al-Rajhi-Charitable-Foundation.webp",
                ]}
              />
            </div>
          </div>
        </div>

        <div className="grant-right">
          <img className="grant-map" src="/images/map.png" alt="world map" />
        </div>
      </div>
    </>
  );
}
