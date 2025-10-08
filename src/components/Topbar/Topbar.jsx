import React from "react";
import { useTranslation } from "react-i18next";
import "./topbar.css";

export default function Topbar() {
  const { t } = useTranslation();
  const contactEmail = "info@madardevelopment.com";
  const contactPhone = "+966540478767";
  const socialLinks = [
    {
      iconClass: "fab fa-facebook-f",
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      iconClass: "fab fa-snapchat-ghost",
      url: "https://snapchat.com",
      label: "Snapchat",
    },
    {
      iconClass: "fab fa-linkedin-in",
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      iconClass: "fab fa-tiktok",
      url: "https://tiktok.com",
      label: "TikTok",
    },
    {
      iconClass: "fab fa-instagram",
      url: "https://instagram.com",
      label: "Instagram",
    },
  ];
  return (
    <header
      className="topbar w-full bg-primary-700 text-white flex justify-between items-center px-4 py-2 text-sm"
      style={{ position: "fixed", zIndex: "99" }}
      role="banner"
      aria-label="Top bar with contact information and social media links"
    >
      <div className="flex items-center gap-4 w-full">
        <a
          href={`mailto:${contactEmail}`}
          className="flex items-center gap-1 text-white hover:text-[#4A8B8B] transition-colors duration-200"
          dir="ltr"
          style={{ textAlign: "left" }}
          aria-label={`Email us at ${contactEmail}`}
        >
          <i
            className="fas fa-envelope text-primary-400"
            aria-hidden="true"
          ></i>
          <span className="sr-only">Email:</span> {contactEmail}
        </a>
        <a
          href={`tel:${contactPhone.replace(/[^\d+]/g, "")}`}
          className="flex items-center gap-1 text-white hover:text-[#4A8B8B] transition-colors duration-200"
          dir="ltr"
          style={{ textAlign: "left" }}
          aria-label={`Call us at ${contactPhone}`}
        >
          <i className="fas fa-phone text-primary-400" aria-hidden="true"></i>
          <span className="sr-only">Phone:</span> {contactPhone}
        </a>
      </div>
      {/* Social icons: hidden on mobile, flex on md+ screens */}
      <div className="hidden md:flex items-center gap-2">
        {socialLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(`topbar.social.${item.label.toLowerCase()}`)}
            className="w-8 h-8 flex items-center justify-center rounded-full social-btn"
          >
            <i className={`${item.iconClass} text-lg`} aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </header>
  );
}
