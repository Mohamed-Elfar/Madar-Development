import MySwal from "../../swalConfig";
import "./RegisterModal.css";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { createEmailTemplate } from "../EmailTemplate/emailTemplate";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "../../emailjsConfig";
import { useTranslation } from "react-i18next";

export default function RegisterModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement?.focus();

      const handleKeyDown = (e) => {
        if (e.key !== "Tab") return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      };

      const modal = modalRef.current;
      modal.addEventListener("keydown", handleKeyDown);

      return () => {
        modal.removeEventListener("keydown", handleKeyDown);
        triggerRef.current?.focus();
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      MySwal.fire({
        icon: "error",
        title: t("register.errorTitle"),
        text: t("register.agreeToTermsError"),
      });
      return;
    }
    setError("");
    setIsSubmitting(true);

    const templateParams = {
      formType: "Join Us Submission",
      name,
      email,
      phone,
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
            title: t("register.successTitle"),
            text: t("register.successMessage"),
          });
          setName("");
          setEmail("");
          setPhone("");
          setAgreeToTerms(false);
          onClose();
        },
        (err) => {
          console.error("EmailJS error:", err);
          MySwal.fire({
            icon: "error",
            title: t("register.errorTitle"),
            text: t("register.errorMessage"),
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-modal-title"
      ref={modalRef}
    >
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={t("register.close")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2
          id="register-modal-title"
          className="text-2xl font-bold text-center mb-6"
        >
          {t("register.title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {t("register.name")}:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent outline-none transition-all"
              placeholder={t("register.namePlaceholder")}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {t("register.email")}:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent outline-none transition-all"
              placeholder={t("register.emailPlaceholder")}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {t("register.phone")}:
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent outline-none transition-all"
              placeholder={t("register.phonePlaceholder")}
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              {t("register.agreeToTerms")}{" "}
              <a
                href="/privacy-policy"
                className="text-primary-600 hover:underline"
              >
                {t("register.termsAndConditions")}
              </a>
            </label>
          </div>
          {error && (
            <p className="text-red-500 text-sm" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? t("register.submitting")
              : t("register.joinUsButton")}
          </button>
        </form>
      </div>
    </div>
  );
}
