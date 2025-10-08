import React from "react";
import { Helmet } from "react-helmet-async";
import "./PrivacyPolicy.css";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const privacy = t("privacyPolicy", { returnObjects: true });
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
        <div className="privacy-policy-card mt-5">
          <h1 id="privacy-policy-title" className="privacy-title">
            {privacy.title}
          </h1>
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
            <h3 id="data-utilization-heading" className="privacy-subheading">
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
            <h3 id="request-permission-heading" className="privacy-subheading">
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
      </main>
    </>
  );
}
