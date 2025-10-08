import React from "react";
import { useTranslation } from "react-i18next";
import "./ServiceModal.css";

const ServiceModal = ({ isOpen, onClose, title, children }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  if (!isOpen) return null;

  return (
    <div
      className="service-modal-overlay"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`service-modal-content ${isArabic ? "is-arabic" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="service-modal-header">
          <h3 className="service-modal-title">{title}</h3>
          <button
            onClick={onClose}
            className="service-modal-close-btn"
            aria-label="Close modal"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="service-modal-body">{children}</div>
      </div>
    </div>
  );
};

export default ServiceModal;
