import MySwal from "../../swalConfig";
import ScopeOfServices from "../../components/ScopeOfServices/ScopeOfServices";
import ConsultationHeroImg from "../../../public/images/Consultation.webp";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faChartLine,
  faCheckCircle,
  faEnvelope,
  faPhone,
  faGlobe,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { createEmailTemplate } from "../../components/EmailTemplate/emailTemplate";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "../../emailjsConfig";
import "./Consultation.css";
import { Helmet } from "react-helmet-async";

export default function Consultation() {
  const { t, i18n } = useTranslation();
  const isArabic =
    (i18n && i18n.dir && i18n.dir() === "rtl") ||
    (i18n.language && i18n.language.toLowerCase().startsWith("ar"));
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    referral: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      formType: "Consultation Request",
      ...form,
    };

    const emailBody = createEmailTemplate(templateParams);

    const finalTemplateParams = {
      ...templateParams,
      html_message: emailBody,
    };

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
            title: t("consultation.successTitle"),
            text: t("consultation.successMessage"),
          });
          setForm({
            name: "",
            email: "",
            projectType: "",
            referral: "",
            description: "",
          });
        },
        () => {
          MySwal.fire({
            icon: "error",
            title: t("consultation.errorMessageTitle"),
            text: t("consultation.errorMessageText"),
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>
          {t("consultation.title")} | {t("brandName")}
        </title>
        <meta
          name="description"
          content={`Request expert ${t("consultation.title")} from ${t(
            "brandName"
          )} for management, finance, and operations solutions.`}
        />
      </Helmet>
      {/* Hero Section */}
      <div className="consultation-hero-img-section">
        <div className="consultation-hero-img-wrapper">
          <img
            src={ConsultationHeroImg}
            alt="Consultation Hero"
            className="consultation-hero-img"
            loading="lazy"
          />
          <div className="consultation-hero-overlay" />
          <div className="consultation-hero-text">
            <h1 className="consultation-hero-title">
              {t("consultation.title")}
            </h1>
          </div>
        </div>
      </div>
      {/* Intro + Features Section */}
      <div className="consultation-intro-features-wrapper">
        <div className="consultation-intro-features">
          <div className="consultation-intro-left">
            <h2 className="consultation-intro-highlight">
              {t("scopeOfServices.subtitle")}
            </h2>
            <h1 className="consultation-intro-title">
              {t("consultation.title")}
            </h1>
            <div className="consultation-points-list mt-4">
              <div
                className="consultation-point-item flex items-start mb-4"
                data-aos="fade-up"
              >
                <div className="w-12 h-12 rounded-md bg-green-600 text-white flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
                <div className="flex-1">
                  <p
                    className="font-semibold"
                    style={isArabic ? { margin: "10px" } : undefined}
                  >
                    {t("consultation.points.0")}
                  </p>
                </div>
              </div>
              <div
                className="consultation-point-item flex items-start mb-4"
                data-aos="fade-up"
              >
                <div className="w-12 h-12 rounded-md bg-green-600 text-white flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div className="flex-1">
                  <p
                    className="font-semibold"
                    style={isArabic ? { margin: "10px" } : undefined}
                  >
                    {t("consultation.points.1")}
                  </p>
                </div>
              </div>
              <div
                className="consultation-point-item flex items-start mb-4"
                data-aos="fade-up"
              >
                <div className="w-12 h-12 rounded-md bg-green-600 text-white flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className="flex-1">
                  <p
                    className="font-semibold"
                    style={isArabic ? { margin: "10px" } : undefined}
                  >
                    {t("consultation.points.2")}
                  </p>
                </div>
              </div>
              <div
                className="consultation-point-item flex items-start mb-4"
                data-aos="fade-up"
              >
                <div className="w-12 h-12 rounded-md bg-green-600 text-white flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div className="flex-1">
                  <p
                    className="font-semibold"
                    style={isArabic ? { margin: "10px" } : undefined}
                  >
                    {t("consultation.points.3")}
                  </p>
                </div>
              </div>
              <div
                className="consultation-point-item flex items-start mb-4"
                data-aos="fade-up"
              >
                <div className="w-12 h-12 rounded-md bg-green-600 text-white flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="flex-1">
                  <p
                    className="font-semibold"
                    style={isArabic ? { margin: "10px" } : undefined}
                  >
                    {t("consultation.points.4")}
                  </p>
                </div>
              </div>
            </div>

            
            <div className="consultation-feature-list">
              <div className="consultation-feature-item">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="consultation-feature-icon"
                />
                <div>
                  <h3 className="consultation-feature-title">
                    {t("consultation.features.0.title")}
                  </h3>
                  <p className="consultation-feature-desc">
                    {t("consultation.features.0.desc")}
                  </p>
                </div>
              </div>
              <div className="consultation-feature-item">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="consultation-feature-icon"
                />
                <div>
                  <h3 className="consultation-feature-title">
                    {t("consultation.features.1.title")}
                  </h3>
                  <p className="consultation-feature-desc">
                    {t("consultation.features.1.desc")}
                  </p>
                </div>
              </div>
            </div>
           
          </div>

          {/* Right Side Image */}
          <div className="consultation-intro-right">
            <div className="consultation-intro-imgbox mt-12">
              <img
                src={ConsultationHeroImg}
                alt="Consultation Team"
                className="consultation-intro-img"
                loading="lazy"
              />
              <div className="consultation-intro-img-overlay">
                <div className="consultation-intro-experience">
                  <span className="consultation-intro-years">20+</span>
                  <span className="consultation-intro-years-label">
                    {t("consultation.experience")}
                  </span>
                </div>
                <div className="consultation-intro-experience-divider"></div>
                <ul className="consultation-intro-experience-list">
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} />{" "}
                    {t("consultation.experiencePoints.0")}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} />{" "}
                    {t("consultation.experiencePoints.1")}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} />{" "}
                    {t("consultation.experiencePoints.2")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScopeOfServices hideProjectsDivision={true} />

      {/* Dark Contact Section */}
      <div className="consultation-contact-dark-wrapper">
        <h2 className="consultation-contact-dark-title">
          {t("consultation.contact.title")}{" "}
          <span className="consultation-contact-dark-highlight">
            {t("consultation.title")}
          </span>{" "}
          {t("consultation.contact.subtitle")}
        </h2>
        <div className="consultation-contact-dark-content">
          <form onSubmit={handleSubmit} className="consultation-contact-form">
            <div className="consultation-contact-form-row">
              <div className="consultation-contact-form-group">
                <label htmlFor="name">{t("consultation.form.nameLabel")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("consultation.form.namePlaceholder")}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="consultation-contact-form-group">
                <label htmlFor="email">
                  {t("consultation.form.emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("consultation.form.emailPlaceholder")}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="consultation-contact-form-row">
              <div className="consultation-contact-form-group">
                <label htmlFor="projectType">
                  {t("consultation.form.projectLabel")}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    {t("consultation.form.projectOptions.0")}
                  </option>
                  <option>{t("consultation.form.projectOptions.1")}</option>
                  <option>{t("consultation.form.projectOptions.2")}</option>
                  <option>{t("consultation.form.projectOptions.3")}</option>
                </select>
              </div>
              <div className="consultation-contact-form-group">
                <label htmlFor="referral">
                  {t("consultation.form.referralLabel")}
                </label>
                <select
                  id="referral"
                  name="referral"
                  value={form.referral}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    {t("consultation.form.referralOptions.0")}
                  </option>
                  <option>{t("consultation.form.referralOptions.1")}</option>
                  <option>{t("consultation.form.referralOptions.2")}</option>
                  <option>{t("consultation.form.referralOptions.3")}</option>
                  <option>{t("consultation.form.referralOptions.4")}</option>
                  <option>{t("consultation.form.referralOptions.5")}</option>
                  <option>{t("consultation.form.referralOptions.6")}</option>
                </select>
              </div>
            </div>
            <div className="consultation-contact-form-group-full">
              <label htmlFor="description">
                {t("consultation.form.descLabel")}
              </label>
              <textarea
                id="description"
                name="description"
                placeholder={t("consultation.form.descPlaceholder")}
                rows={3}
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="consultation-contact-form-btn"
            >
              {isSubmitting
                ? t("consultation.form.submitting")
                : t("consultation.form.sendBtn")}
            </button>
          </form>

          {/* Contact Info */}
          <div className="consultation-contact-info">
            <h3>{t("consultation.contact.connect")}</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> info@madardevelopment.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span dir="ltr" style={{ textAlign: "left" }}>
                  +966540478767
                </span>
              </li>
            </ul>
            <h3>{t("consultation.contact.addressTitle")}</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGlobe} />
                {t("consultation.contact.address.0")}
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} />
                {t("consultation.contact.workingHours")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
