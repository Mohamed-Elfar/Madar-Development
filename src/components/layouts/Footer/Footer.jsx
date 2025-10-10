import TransButton from "../../TransButton";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import MySwal from "../../../swalConfig";
import { createEmailTemplate } from "../../EmailTemplate/emailTemplate";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
  EMAILJS_TO_EMAIL,
} from "../../../emailjsConfig";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [footerEmail, setFooterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div>
      {/* Newsletter / CTA above footer */}
      <section
        className="w-full bg-no-repeat bg-center bg-cover m-0 mt-5 h-[332px] md:h-[250px]"
        style={{
          backgroundImage:
            "url('/images/Institutional-Development-Consulting.webp')",
        }}
        aria-label="Stay updated"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/55" aria-hidden></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-16 h-[332px] md:h-[250px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="text-left text-white">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  {t(
                    "footer.newsletter.header",
                    "Stay updated with our latest news, promotions, and tech insights."
                  )}
                </h3>
              </div>

              <div className="flex justify-start md:justify-end">
                <form
                  className="w-full max-w-xl"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    // basic validation
                    if (
                      !footerEmail ||
                      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(footerEmail)
                    ) {
                      MySwal.fire({
                        icon: "error",
                        title:
                          t("footer.newsletter.invalidEmail") ||
                          "Please enter a valid email",
                      });
                      return;
                    }

                    setIsSubmitting(true);

                    const templateParams = {
                      formType: "Newsletter Signup",
                      email: footerEmail,
                      // explicitly route this newsletter to marketing
                      to_email: EMAILJS_TO_EMAIL,
                    };

                    const emailBody = createEmailTemplate(templateParams);
                    const finalTemplateParams = {
                      ...templateParams,
                      html_message: emailBody,
                    };

                    try {
                      await emailjs.send(
                        EMAILJS_SERVICE_ID,
                        EMAILJS_TEMPLATE_ID,
                        finalTemplateParams,
                        EMAILJS_USER_ID
                      );
                      MySwal.fire({
                        icon: "success",
                        title:
                          t("footer.newsletter.successTitle") || "Thank you!",
                        text:
                          t("footer.newsletter.successText") ||
                          "You have been subscribed.",
                      });
                      setFooterEmail("");
                    } catch (err) {
                      console.error("Newsletter send error:", err);
                      MySwal.fire({
                        icon: "error",
                        title: t("footer.newsletter.errorTitle") || "Oops",
                        text:
                          t("footer.newsletter.errorText") ||
                          "Something went wrong. Please try again later.",
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  aria-label="Subscribe to newsletter"
                >
                  <label htmlFor="footer-email" className="sr-only">
                    {t("footer.newsletter.emailLabel", "Your email address")}
                  </label>
                  <div className="flex shadow-sm rounded-md overflow-hidden h-[50px] w-[100%]">
                    <input
                      id="footer-email"
                      type="email"
                      placeholder={t(
                        "footer.newsletter.placeholder",
                        "Your email address"
                      )}
                      value={footerEmail}
                      onChange={(e) => setFooterEmail(e.target.value)}
                      className="w-full px-4 py-3 text-gray-800 bg-white/95 focus:outline-none"
                      required
                      aria-label={
                        t("footer.newsletter.emailLabel") ||
                        "Your email address"
                      }
                    />
                    <button
                      type="submit"
                      className="bg-[#189748] text-white px-6 py-3 font-semibold w-[50%]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? t("footer.newsletter.sending") || "Sending..."
                        : t("footer.newsletter.signUp") || "Sign up"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="bg-[#189748]"
        role="contentinfo"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="h-7"></div>
        {/* company data and links */}
        <div className="flex justify-center">
          <div
            className={`w-full max-w-7xl px-4 sm:px-6 lg:!px-0 ${
              isArabic ? "sm:pe-20" : "sm:ps-20"
            } pb-4 flex gap-6 sm:gap-4 md:gap-16 lg:gap-16 xl:gap-20 items-start md:items-baseline flex-col sm:flex-row content-around justify-between`}
          >
            {/* Brand Section */}
            <div
              className={`footer-brand flex flex-col ${
                isArabic ? "items-end text-right" : "items-start text-left"
              } justify-start min-w-[220px]`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white p-1 rounded-md inline-flex items-center justify-center">
                  <img
                    src="/images/logo/full-logo.png"
                    alt="MADAR DEVELOPMENT Logo"
                    className="w-24 h-16"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-white max-w-xs text-justify hyphens-auto">
                {t("footer.brandDescription")}
              </p>
              {/* Social Media Icons */}
              <div
                className={`flex gap-2 mt-2 ${
                  isArabic ? "justify-end" : "justify-start"
                }`}
              >
                <div className="flex gap-2 mt-2">
                  {[
                    {
                      href: "https://facebook.com",
                      label: "Facebook",
                      icon: "fab fa-facebook-f",
                    },
                    {
                      href: "https://x.com",
                      label: "X",
                      icon: "fab fa-x-twitter",
                    },
                    {
                      href: "https://linkedin.com",
                      label: "LinkedIn",
                      icon: "fab fa-linkedin-in",
                    },
                    {
                      href: "https://tiktok.com",
                      label: "TikTok",
                      icon: "fab fa-tiktok",
                    },
                    {
                      href: "https://instagram.com",
                      label: "Instagram",
                      icon: "fab fa-instagram",
                    },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="social-btn"
                    >
                      <i className={`${s.icon} text-lg`} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div
              className={`our-services-footer ${
                isArabic ? "text-right" : "text-left"
              }`}
              role="navigation"
              aria-labelledby="services-footer-heading"
            >
              <h3
                id="services-footer-heading"
                className={`font-bold text-lg mb-6 ${
                  isArabic ? "pr-6 text-white" : "pl-6 text-white"
                }`}
              >
                {t("footer.ourServices.Our Services")}
              </h3>
              <ul className="cat-dropdown-menu">
                {[
                  { label: t("footer.training.Training"), path: "/training" },
                  { label: t("navbar.consultation"), path: "/consultation" },
                  {
                    label: t("institutional.title"),
                    path: "/institutional-development",
                  },
                  {
                    label: t("navbar.grantOpportunities"),
                    path: "/grant-opportunities",
                  },
                  {
                    label: t("scopeOfServices.services.projectsDivision"),
                    path: "/projects-division",
                  },
                ].map(({ label, path }, index) => (
                  <li key={index} className="footer-li text-white">
                    <NavLink
                      to={path}
                      className="p3 hover:text-white mb-3 block text-white"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div
              className={`our-company-footer ${
                isArabic ? "text-right" : "text-left"
              }`}
              role="navigation"
              aria-labelledby="company-footer-heading"
            >
              <h3
                id="company-footer-heading"
                className={`font-bold text-lg mb-6 ${
                  isArabic ? "pr-6 text-white" : "pl-6 text-white"
                }`}
              >
                {t("footer.company.Company")}
              </h3>
              <ul className="cat-dropdown-menu">
                {[
                  {
                    label: `${t("navbar.caseStudies")}`,
                    href: "/case-studies",
                  },
                  { label: `${t("navbar.about")}`, href: "/about" },
                  {
                    label: `${t("privacyPolicy.privacyPolicy")}`,
                    href: "/privacy-policy",
                  },
                ].map(({ label, href, target }, idx) => (
                  <li key={idx} className="footer-li text-white">
                    <a href={href} target={target || "_self"} rel="noreferrer">
                      <p className="p3 hover:text-white mb-3 text-white">
                        {label}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <address
              className={`contact-us-footer ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <h3
                className={`font-bold text-lg mb-6 ${
                  isArabic ? "pr-6 text-white" : "pl-6 text-white"
                }`}
              >
                {t("footer.contactUs")}
              </h3>
              <ul className="cat-dropdown-menu">
                <li>
                  <p className="p4 leading-4 md:w-32 text-white w-full mb-3">
                    <span className="font-GilroySemiBold">
                      {t("contact.email")}
                    </span>{" "}
                    <a
                      className="footer-linktext-white"
                      href={`mailto:${t("contact.emailValue")}`}
                    >
                      {t("contact.emailValue")}
                    </a>
                  </p>
                </li>

                <li>
                  <p className="p4 leading-4 md:w-44 text-white w-full mb-3">
                    <span className="font-GilroySemiBold block">
                      {t("footer.contact.phone", t("contact.phone"))}
                    </span>
                    <a
                      className="footer-link text-white"
                      href={`tel:${t(
                        "footer.contact.phoneValue",
                        t("contact.phoneValue")
                      )}`}
                      dir="ltr"
                      style={{ textAlign: "left" }}
                    >
                      {t("footer.contact.phoneValue", t("contact.phoneValue"))}
                    </a>
                  </p>
                </li>
              </ul>
              <div className="border-b-1 border-b-gray-600 h-2"></div>
              <div className="border-1 border-primary-50 rounded-lg mt-4">
                <TransButton color="white" />
              </div>
            </address>
          </div>
        </div>

        <div className="border-b-1 border-b-gray-600"></div>
        {/* social media links */}
      </footer>
    </div>
  );
}
