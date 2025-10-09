import React from "react";
import { useTranslation } from "react-i18next";
import "./ServiceModal.css";

const ServiceModal = ({ isOpen, onClose, title, children, onSubscribe }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const { t } = useTranslation();

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
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="service-modal-body">{children}</div>
        {onSubscribe && (
          <div className="service-modal-footer">
            <button
              className="service-modal-subscribe-btn"
              onClick={() => {
                // close this modal first, then trigger subscribe flow
                if (typeof onClose === "function") onClose();
                if (typeof onSubscribe === "function") onSubscribe();
              }}
            >
              {t("register.subscribeButton", "Subscribe to a service")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceModal;
