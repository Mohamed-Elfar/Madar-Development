import React from "react";
import { Helmet } from "react-helmet-async";
import "./PrivacyPolicy.css";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const privacy = t("privacyPolicy", { returnObjects: true });
  const NAVBAR_HEIGHT = 150; // px - offset so headings are visible below fixed navbar
  return (
    <>
      <Helmet>
        <title>Privacy Policy | ConsulRain</title>
        <meta
          name="description"
          content="Read ConsulRain's privacy policy to learn how we protect your data and respect your privacy."
        />
      </Helmet>
      <main
        className="privacy-policy-container animate-fade-in"
        role="main"
        aria-labelledby="privacy-policy-title"
      >
        <div className="privacy-policy-card mt-5 w-100">
          <h1 id="privacy-policy-title" className="privacy-title">
            {privacy.title}
          </h1>
          <div className="privacy-grid">
            <aside
              className="privacy-sidebar"
              aria-label={t("privacyPolicy.navigation", "On-page navigation")}
            >
              <nav>
                <ul>
                  {[
                    {
                      id: "privacy-policy-heading",
                      label: `1- ${
                        privacy.policy ||
                        t("privacyPolicy.privacyPolicy", "Privacy Policy")
                      }`,
                    },
                    {
                      id: "info-collection-heading",
                      label: `2- ${
                        privacy.infoCollection ||
                        t(
                          "privacyPolicy.infoCollection",
                          "Information collection"
                        )
                      }`,
                    },
                    {
                      id: "data-utilization-heading",
                      label: `3- ${
                        privacy.dataUtilization ||
                        t("privacyPolicy.dataUtilization", "Use of information")
                      }`,
                    },
                    {
                      id: "cookies-heading",
                      label: `4- ${
                        privacy.cookies || t("privacyPolicy.cookies", "Cookies")
                      }`,
                    },
                    {
                      id: "data-security-heading",
                      label: `5- ${
                        privacy.dataSecurity ||
                        t("privacyPolicy.dataSecurity", "Data security")
                      }`,
                    },
                    {
                      id: "ip-notice-heading",
                      label: `6- ${
                        privacy.ipNotice ||
                        t(
                          "privacyPolicy.ipNotice",
                          "Intellectual Property Notice"
                        )
                      }`,
                    },
                    {
                      id: "request-permission-heading",
                      label: `7- ${
                        privacy.requestPermission ||
                        t(
                          "privacyPolicy.requestPermission",
                          "Request for Permission"
                        )
                      }`,
                    },
                    {
                      id: "legal-disclaimer-heading",
                      label: `8- ${
                        privacy.legalDisclaimer ||
                        t("privacyPolicy.legalDisclaimer", "Legal Disclaimer")
                      }`,
                    },
                  ].map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(s.id);
                          if (el) {
                            // Compute target Y with navbar offset so the heading is visible
                            const targetY =
                              el.getBoundingClientRect().top +
                              window.scrollY -
                              NAVBAR_HEIGHT;
                            window.scrollTo({
                              top: targetY,
                              behavior: "smooth",
                            });

                            // highlight the enclosing section (so sub-headings highlight the whole section)
                            const section =
                              el.closest(".privacy-section") || el;
                            section.classList.add("privacy-highlight");
                            setTimeout(
                              () =>
                                section.classList.remove("privacy-highlight"),
                              1800
                            );

                            // focus the actual heading for accessibility after a short delay
                            el.setAttribute("tabindex", "-1");
                            setTimeout(
                              () => el.focus({ preventScroll: true }),
                              500
                            );
                          }
                        }}
                        className="privacy-sidebar-link"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <div className="privacy-content">
              <section
                className="privacy-section"
                aria-labelledby="privacy-policy-heading"
              >
                <h2 id="privacy-policy-heading" className="privacy-heading">
                  1- {privacy.policy}
                </h2>
                <p>{privacy.intro}</p>
                <h3 id="info-collection-heading" className="privacy-subheading">
                  {privacy.infoCollection}
                </h3>
                <p aria-labelledby="info-collection-heading">
                  {privacy.infoCollectionDesc}
                </p>
                <h3
                  id="data-utilization-heading"
                  className="privacy-subheading"
                >
                  {privacy.dataUtilization}
                </h3>
                <p aria-labelledby="data-utilization-heading">
                  {privacy.dataUtilizationDesc}
                </p>
                <h3 id="cookies-heading" className="privacy-subheading">
                  {privacy.cookies}
                </h3>
                <p aria-labelledby="cookies-heading">{privacy.cookiesDesc}</p>
                <h3 id="data-security-heading" className="privacy-subheading">
                  {privacy.dataSecurity}
                </h3>
                <p aria-labelledby="data-security-heading">
                  {privacy.dataSecurityDesc}
                </p>
              </section>
              <section
                className="privacy-section"
                aria-labelledby="ip-notice-heading"
              >
                <h2 id="ip-notice-heading" className="privacy-heading">
                  2- {privacy.ipNotice}
                </h2>
                <p>{privacy.ipNoticeDesc}</p>
                <h3 id="prohibited-use-heading" className="privacy-subheading">
                  {privacy.prohibitedUse}
                </h3>
                <ul
                  className="privacy-list"
                  aria-labelledby="prohibited-use-heading"
                >
                  {privacy.prohibitedUseList &&
                    privacy.prohibitedUseList.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                </ul>
                <h3
                  id="request-permission-heading"
                  className="privacy-subheading"
                >
                  {privacy.requestPermission}
                </h3>
                <p>
                  {privacy.requestPermissionDesc}{" "}
                  <a
                    href={`mailto:${privacy.email}`}
                    className="privacy-contact"
                    style={{ textDecoration: "none" }}
                    aria-label={`Email for permission requests at ${privacy.email}`}
                  >
                    {privacy.email}
                  </a>
                  {" | "}
                  <a
                    href={`tel:${privacy.phone.replace(/\s+/g, "")}`}
                    className="privacy-contact"
                    style={{ textDecoration: "none" }}
                    aria-label={`Call for permission requests at ${privacy.phone}`}
                  >
                    {privacy.phone}
                  </a>
                </p>
              </section>
              <section
                className="privacy-section"
                aria-labelledby="legal-disclaimer-heading"
              >
                <h2 id="legal-disclaimer-heading" className="privacy-heading">
                  3- {privacy.legalDisclaimer}
                </h2>
                <p>{privacy.legalDisclaimerDesc}</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
