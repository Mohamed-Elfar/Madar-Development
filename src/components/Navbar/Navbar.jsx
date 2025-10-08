import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Menu } from "@headlessui/react";
import TransButton from "../TransButton";
import logo from "/public/images/logo/madar-logo.png";
import Button from "../Button/Button";
import "./Navbar.css";
import "./DropdownPalette.css";

// Lazy load modal components for better performance
const RegisterModal = React.lazy(() =>
  import("../RegisterModal/RegisterModal")
);

const Navbar = memo(() => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const openRegisterModal = useCallback(() => {
    setIsRegisterModalOpen(true);
  }, []);

  const closeAllModals = useCallback(() => {
    setIsRegisterModalOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Focus management for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      const menuButton = menuButtonRef.current;
      const firstFocusableElement =
        mobileMenuRef.current?.querySelector("a, button");
      firstFocusableElement?.focus();

      const handleKeyDown = (e) => {
        if (e.key === "Tab") {
          const focusableElements =
            mobileMenuRef.current?.querySelectorAll("a, button");
          const firstElement = focusableElements?.[0];
          const lastElement = focusableElements?.[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        } else if (e.key === "Escape") {
          toggleMobileMenu();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        menuButton?.focus();
      };
    }
  }, [isMenuOpen, toggleMobileMenu]);

  return (
    <nav
      className="bg-primary-50 w-full py-3 fixed top-0 left-0 z-50 shadow-sm mb-5"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            className="logo flex items-center gap-1"
            to="/home"
            aria-label="MADAR DEVELOPMENT - Go to home page"
          >
            <img
              src={logo}
              alt="MADAR DEVELOPMENT Logo"
              className="h-15"
              width="60"
              height="60"
              loading="eager"
            />
            <div className="company-brand">
              <div className="brand-name" aria-label={t("brandName")}>
                {/* Split brand name so first word can be bold and styled */}
                {(() => {
                  const full = t("brandName");
                  const parts = full.split(" ");
                  const first = parts.shift();
                  const rest = parts.join(" ");
                  return (
                    <>
                      <span className="madar-nav">{first}</span>
                      {rest ? (
                        <span className="development-nav"> {rest}</span>
                      ) : null}
                    </>
                  );
                })()}
              </div>
              <div
                className="brand-tagline"
                aria-label="Consulting and Training services"
              >
                {t("brandTagline")}
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8 h-full">
            <ul className="flex items-center gap-8 m-0">
              <li>
                <NavLink
                  to="/home"
                  className="hover:text-primary-700 font-bold no-underline transition-colors duration-200 text-black"
                  aria-label="home page"
                >
                  {t("navbar.home")}
                </NavLink>
              </li>
              <li className="nav-item relative">
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button
                    className="nav-link dropdown-toggle text-gray-700 hover:text-primary-700 fw-bolder no-underline transition-colors duration-200 bg-transparent border-0"
                    aria-label="Our services menu"
                  >
                    {t("navbar.ourServices")}
                  </Menu.Button>
                  <Menu.Items className="custom-dropdown-menu show">
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          className={`custom-dropdown-item ${
                            active ? "bg-gray-100" : ""
                          }`}
                          to="/training"
                        >
                          {t("navbar.training")}
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          className={`custom-dropdown-item ${
                            active ? "bg-gray-100" : ""
                          }`}
                          to="/consultation"
                        >
                          {t("navbar.consultation")}
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          className={`custom-dropdown-item ${
                            active ? "bg-gray-100" : ""
                          }`}
                          to="/feasibility-study"
                        >
                          {t("navbar.feasibilityStudies")}
                        </NavLink>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-primary-700 font-bold no-underline transition-colors duration-200 text-black"
                  aria-label="About page"
                >
                  {t("navbar.about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-primary-700 font-bold no-underline transition-colors duration-200 text-black"
                  aria-label="Contact Us page"
                >
                  {t("navbar.contact")}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Language & Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <TransButton color="pure-black" />
            <Button
              label={t("navbar.joinUs")}
              onClick={openRegisterModal}
              customClasses="bg-primary-500 text-white hover:bg-primary-700 px-6 py-2"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="lg:hidden hamburger-icon"
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-primary-50`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li>
            <NavLink
              to="/home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              {t("navbar.home")}
            </NavLink>
          </li>
          <li className="nav-item relative">
            <Menu as="div" className="relative w-full text-left">
              <Menu.Button className="nav-link dropdown-toggle w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 bg-transparent border-0">
                {t("navbar.ourServices")}
              </Menu.Button>
              <Menu.Items className="ps-4">
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/training"
                      className={`block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-700 ${
                        active ? "bg-gray-50" : ""
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      {t("navbar.training")}
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/consultation"
                      className={`block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-700 ${
                        active ? "bg-gray-50" : ""
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      {t("navbar.consultation")}
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/feasibility-study"
                      className={`block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-700 ${
                        active ? "bg-gray-50" : ""
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      {t("navbar.feasibilityStudies")}
                    </NavLink>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
          <li>
            <NavLink
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              {t("navbar.about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              {t("navbar.contact")}
            </NavLink>
          </li>
        </ul>
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <TransButton color="black" />
            <Button
              label={t("navbar.joinUs")}
              onClick={() => {
                openRegisterModal();
                toggleMobileMenu();
              }}
              customClasses="bg-primary-500 text-white hover:bg-primary-700 px-6 py-2"
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      {isRegisterModalOpen && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={closeAllModals}
          />
        </React.Suspense>
      )}
    </nav>
  );
});

export default Navbar;
