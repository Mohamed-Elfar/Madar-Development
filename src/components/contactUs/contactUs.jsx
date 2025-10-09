import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import MySwal from "../../swalConfig";
import { createEmailTemplate } from "../EmailTemplate/emailTemplate";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
  EMAILJS_TO_EMAIL,
} from "../../emailjsConfig";
import headerBg from "../../assets/contact-header-bg.webp";
// social icons are provided by SocialFooter
import "./contact.css";

export default function ContactUs() {
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    import("aos")
      .then((AOS) => {
        try {
          AOS.refresh();
        } catch {
          // ignore
        }
      })
      .catch(() => {});
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      formType: "Contact Us Submission",
      name: form.name,
      email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    };

    const emailBody = createEmailTemplate(templateParams);

    const finalTemplateParams = { ...templateParams, html_message: emailBody };
    // include explicit recipient in case template expects a dynamic to_email variable
    finalTemplateParams.to_email = EMAILJS_TO_EMAIL;

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        finalTemplateParams,
        EMAILJS_USER_ID
      )
      .then(
        () => {
          MySwal.fire({
            icon: "success",
            title: t("contact.successTitle"),
            text: t("contact.successMessage"),
          });
          setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        },
        () => {
          MySwal.fire({
            icon: "error",
            title: t("contact.errorMessageTitle"),
            text: t("contact.errorMessageText"),
          });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      <Helmet>
        <title>
          {t("contact.metaTitle", "Contact Us | MADAR DEVELOPMENT")}
        </title>
        <meta
          name="description"
          content={t(
            "contact.metaDescription",
            "Contact MADAR DEVELOPMENT for business inquiries, support, or partnership opportunities."
          )}
        />
      </Helmet>

      {/* Header hero */}
      <div
        className="w-full flex items-center justify-center mb-8 contact-hero"
        style={{
          height: 300,
          position: "relative",
          background: `url(${headerBg}) center/cover no-repeat`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--color-brand-green, #27904f)",
            opacity: 0.55,
            zIndex: 1,
          }}
          aria-hidden="true"
        ></div>
        <h1
          className="contact-hero-title text-white text-3xl md:text-4xl font-bold z-10 text-center"
          style={{ position: "relative" }}
        >
          {t("contact.header", "Contact Us")}
        </h1>
      </div>

      {/* (visibleMeta removed per request) */}

      <section className="contact-us-section pt-0 pb-0">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: contact list */}
          <aside className="p-8">
            {/* Brand title with first word bold */}
            {(() => {
              const title = t("contact.contactTitle", "MADAR DEVELOPMENT");
              const parts = title.split(/\s+(.*)/s); // split into [first, rest]
              return (
                <h3 className="text-3xl font-bold mb-2">
                  <strong>{parts[0]}</strong>
                  {parts[1] ? " " + parts[1] : null}
                </h3>
              );
            })()}

            {/* Subtitle with brand word bolded (first occurrence) */}
            {(() => {
              const subtitle = t(
                "contact.contactSubtitle",
                "ﺷﺮﻛﺔ ﻣﺪاراﻟﺘﻨﻤﻴﺔ اﻻوﱃ اﻟﻤﺘﻜﺎﻣﻞ ﺷﺮﻛﺔ اﺳﺘﺸﺎرﻳﺔ ﺗﻘﺪمﻛﺎﻓﺔ اﻟﺨﺪﻣﺎت"
              );
              // get brand first token from translations (handles Arabic and English)
              const brand = t("brandName", "MADAR DEVELOPMENT").split(/\s+/)[0];
              const idx = subtitle.search(new RegExp(brand, "i"));
              if (idx === -1) {
                return <p className="text-gray-600 mb-6">{subtitle}</p>;
              }
              const before = subtitle.slice(0, idx);
              const match = subtitle.slice(idx, idx + brand.length);
              const after = subtitle.slice(idx + brand.length);
              return (
                <p className="text-gray-600 mb-6">
                  {before}
                  <strong>{match}</strong>
                  {after}
                </p>
              );
            })()}

            <ul className="contact-list">
              <li className="contact-item" data-aos="fade-up">
                <div className="icon-square" aria-hidden="true">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                </div>
                <div className="contact-item-body">
                  <div className="contact-item-title">
                    {t("contact.headOffice", "Head Office")}
                  </div>
                  <div className="contact-item-sub">
                    {t("contact.addressValue", "Riyadh, Saudi Arabia")}
                  </div>
                </div>
              </li>

              <li className="contact-item" data-aos="fade-up">
                <div className="icon-square" aria-hidden="true">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                </div>
                <div className="contact-item-body">
                  <div className="contact-item-title">
                    {t("contact.tel", "Tel.No")}
                  </div>
                  <div className="contact-item-sub">
                    <a
                      className="contact-phone-link"
                      href={`tel:${t("contact.telValue", "+966540478767")}`}
                      dir="ltr"
                      style={{ textAlign: "left", display: "inline-block" }}
                    >
                      {t("contact.telValue", "+966540478767")}
                    </a>
                  </div>
                </div>
              </li>

              <li className="contact-item" data-aos="fade-up">
                <div className="icon-square" aria-hidden="true">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="contact-item-body">
                  <div className="contact-item-title">
                    {t("contact.email", "Email")}
                  </div>
                  <div className="contact-item-sub">
                    <a
                      className="contact-phone-link"
                      href={`mailto:${t(
                        "contact.emailValue",
                        "info@madardevelopment.com"
                      )}`}
                    >
                      {t("contact.emailValue", "info@madardevelopment.com")}
                    </a>
                  </div>
                </div>
              </li>

              <li className="contact-item" data-aos="fade-up">
                <div className="icon-square" aria-hidden="true">
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </div>
                <div className="contact-item-body">
                  <div className="contact-item-title">
                    {t("contact.social", "Social")}
                  </div>
                  <div className="contact-item-sub">
                    {t("contact.socialValue", "@madar")}
                  </div>
                </div>
              </li>
            </ul>

            {/* Small social icons row using the same images/links as Footer */}
            <div className="social-icons compact mt-4">
              {[
                {
                  href: "https://instagram.com/consulrain",
                  icon: "fab fa-instagram",
                  label: "Instagram",
                },
                {
                  href: "https://wa.me/966540478767",
                  icon: "fab fa-whatsapp",
                  label: "WhatsApp",
                },
                {
                  href: "https://twitter.com/",
                  icon: "fab fa-x-twitter",
                  label: "X",
                },
                {
                  href: "https://facebook.com/consulrain",
                  icon: "fab fa-facebook-f",
                  label: "Facebook",
                },
                {
                  href: "https://www.linkedin.com/company/consulrain",
                  icon: "fab fa-linkedin-in",
                  label: "LinkedIn",
                },
                {
                  href: "https://www.youtube.com/",
                  icon: "fab fa-youtube",
                  label: "YouTube",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <i className={`${item.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </aside>

          {/* Right column: form */}
          <div className="p-8">
            <div className="message-card">
              <h2 className="text-2xl font-bold mb-4">
                {t("contact.sendTitle", "Send Us a Message")}
              </h2>
              <hr className="mb-6 border-gray-200" />

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    className="input-box"
                    name="name"
                    placeholder={t("contact.namePlaceholder", "Name")}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="input-box"
                    name="phone"
                    placeholder={t("contact.phonePlaceholder", "Phone")}
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <input
                  className="input-box mb-4"
                  name="email"
                  placeholder={t("contact.emailPlaceholder", "Email")}
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <input
                  className="input-box mb-4"
                  name="subject"
                  placeholder={t("contact.subjectPlaceholder", "Subject")}
                  value={form.subject}
                  onChange={handleChange}
                />

                <textarea
                  className="input-box mb-4"
                  name="message"
                  placeholder={t("contact.messagePlaceholder", "Message")}
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />

                <button
                  className="submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? t("contact.submitting", "Sending...")
                    : t("contact.submitButton", "Send Message")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed map (no horizontal gaps) */}
      <div className="full-bleed-map w-100">
        <iframe
          title="Riyadh Map"
          // Use coordinates so the embed includes a marker/pin at Riyadh
          src="https://maps.google.com/maps?q=24.7136,46.6753&z=12&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
