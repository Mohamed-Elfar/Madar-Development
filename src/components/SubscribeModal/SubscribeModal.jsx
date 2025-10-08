import React, { useState, useRef, useEffect } from "react";
import MySwal from "../../swalConfig";
import emailjs from "@emailjs/browser";
import { createEmailTemplate } from "../EmailTemplate/emailTemplate";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
  EMAILJS_TO_EMAIL,
} from "../../emailjsConfig";
import CustomSelect from "./CustomSelect";
import { useTranslation } from "react-i18next";
import "./SubscribeModal.css";

export default function SubscribeModal({
  isOpen,
  onClose,
  services = [],
  title,
}) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(
    services[0]?.title || ""
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedService(services[0]?.title || "");
      setTimeout(
        () => modalRef.current?.querySelector("input, select")?.focus(),
        50
      );
    }
  }, [isOpen, services]);

  // initialize EmailJS once with the current user id
  useEffect(() => {
    try {
      if (EMAILJS_USER_ID && typeof emailjs?.init === "function") {
        emailjs.init(EMAILJS_USER_ID);
      }
    } catch (err) {
      console.warn("EmailJS init failed:", err);
    }
  }, []);

  // close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    if (!name.trim())
      return t("register.namePlaceholder") || "Name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return t("register.emailPlaceholder") || "Valid email required";
    if (!phone.trim())
      return t("register.phonePlaceholder") || "Phone is required";
    if (!selectedService) return "Select a service";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      MySwal.fire({ icon: "error", title: err });
      return;
    }
    setIsSubmitting(true);

    const templateParams = {
      formType: "Service Subscription",
      name,
      email,
      phone,
      service: selectedService,
      to_email: EMAILJS_TO_EMAIL,
    };

    const emailBody = createEmailTemplate(templateParams);

    const finalTemplateParams = { ...templateParams, html_message: emailBody };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        finalTemplateParams,
        EMAILJS_USER_ID
      )
      .then(
        () => {
          MySwal.fire({ icon: "success", title: t("register.successTitle") });
          setName("");
          setEmail("");
          setPhone("");
          setSelectedService(services[0]?.title || "");
          onClose();
        },
        (err) => {
          console.error("EmailJS error:", err);
          MySwal.fire({ icon: "error", title: t("register.errorTitle") });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => {
        // close when clicking on the overlay (outside the modal)
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg mx-4 relative"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="close-btn"
          aria-label={t("register.close", "Close")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
        <h2 className="text-2xl font-bold text-center mb-4">
          {title || t("register.title")}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              {t("register.name")}
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full input"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              {t("register.email")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full input"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              {t("register.phone")}
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full input"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              {t("register.subjectPlaceholder", "Select Service")}
            </label>
            <CustomSelect
              options={services.map((s) => s.title)}
              value={selectedService}
              onChange={(val) => setSelectedService(val)}
              ariaLabel={t("register.subjectPlaceholder", "Select Service")}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-3 rounded-lg font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("register.submitting")
              : t("register.subscribeButton")}
          </button>
        </form>
      </div>
    </div>
  );
}
