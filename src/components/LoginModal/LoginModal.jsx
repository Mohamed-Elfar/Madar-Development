// src/components/LoginModal/LoginModal.jsx
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    // Handle login logic here
    onClose();
  };

  const handleSocialLogin = () => {
    // Handle social login logic here
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
      ref={modalRef}
    >
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={t("login.close")}
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

        {/* Header */}
        <h2
          id="login-modal-title"
          className="text-2xl font-bold text-gray-800 mb-6 text-center"
        >
          {t("login.title")}
        </h2>

        {/* Social Logins */}
        <div
          className="flex items-center justify-center space-x-4 mb-6"
          role="group"
          aria-label="Social login options"
        >
          <button
            onClick={() => handleSocialLogin("google")}
            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
            aria-label={t("login.google")}
          >
            <i className="fab fa-google mr-2"></i> {t("login.google")}
          </button>
          <button
            onClick={() => handleSocialLogin("github")}
            className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center"
            aria-label={t("login.github")}
          >
            <i className="fab fa-github mr-2"></i> {t("login.github")}
          </button>
          <button
            onClick={() => handleSocialLogin("linkedin")}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            aria-label={t("login.linkedin")}
          >
            <i className="fab fa-linkedin-in mr-2"></i> {t("login.linkedin")}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500 font-medium">
            {t("login.or")}
          </span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {t("login.email")}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={t("login.emailPlaceholder")}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {t("login.password")}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={t("login.passwordPlaceholder")}
              required
            />
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              {t("login.forgotPassword")}
            </a>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              {t("login.loginButton")}
            </button>
          </div>
        </form>

        {/* Switch to Register */}
        <p className="text-center text-gray-500 text-sm mt-6">
          {t("login.noAccount")}{" "}
          <button
            onClick={onSwitchToRegister}
            className="font-bold text-primary-500 hover:text-primary-700"
          >
            {t("login.joinUs")}
          </button>
        </p>
      </div>
    </div>
  );
}
