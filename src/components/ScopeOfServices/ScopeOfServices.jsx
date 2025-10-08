import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// removed FontAwesome usage - using simple entity icons instead
import Illustration from "/images/institutional-illustration-2.svg";
import ServiceModal from "../ServiceModal/ServiceModal"; // Import the modal
import "./ScopeOfServices.css"; // Import the new CSS

const ScopeOfServices = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const [selectedService, setSelectedService] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);

  const ensureDot = (text) => {
    if (!text && text !== "") return text;
    const t = String(text).trim();
    return t.endsWith(".") ? t : `${t}.`;
  };

  const serviceKeys = ["institutionalDevelopment", "projectsDivision"];

  const handleServiceClick = (key) => {
    setSelectedService(key);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const renderDescription = (description) => {
    return description.split("\n").map((line, index) => {
      if (line.trim().startsWith("•")) {
        return (
          <li key={index} className="service-modal-list-item">
            {line.replace("•", "").trim()}
          </li>
        );
      }
      return <p key={index}>{line}</p>;
    });
  };

  // Data for the 'Services for Emerging Associations' panel (based on attachment)
  const emergingAssociationsDetails = [
    {
      title:
        "نظام إدارة مالية ومحاسبية متكامل (شهري - ربع سنوي - سنوي) وإعداد التقرير المالي الختامي بالإضافة الى المراجعة الخارجية",
      price: "10000",
    },
    { title: "تصميم خطة استراتيجية وتشغيلية", price: "15000" },
    { title: "تصميم دليل السياسات والإجراءات واللوائح", price: "4500" },
    {
      title:
        "البرامج والدورات التدريبية (بمعدل 30 ساعة تدريبية) - قيمة 500 ريال للدورة الواحدة",
      price: "500",
    },
    {
      title:
        "البحث عن سبل المنح المالية وخطة تنمية الموارد المالية وإيجاد مصادر إيرادات",
      price: "2000",
    },
    { title: "نظام جذب وتدوير المتطوعين (6 شهور)", price: "4000" },
    { title: "نماذج تقارير فنية ومالية", price: "2000" },
    {
      title: "نماذج تقارير المتابعة والتقييم لأداء الموظفين - لأعمال الجمعية",
      price: "1500",
    },
    {
      title: "نموذج مخاطبة المتبرعين والمانحين وإدارات المسؤولية الاجتماعية",
      price: "500",
    },
  ];

  const normalize = (s) =>
    String(s)
      .trim()
      .replace(/[.\u0600-\u06FF\p{P}]/gu, "")
      .toLowerCase();

  const formatPrice = (price) => {
    const currency = t("scopeOfServices.currency");
    if (!price && price !== 0) return "";
    const p = String(price).trim();
    // If price starts with number followed by qualifier (e.g., "500 per course"), insert currency after the number
    const match = p.match(/^(\d+[\d,\s]*)\s*(.*)$/u);
    if (match) {
      const num = match[1].trim();
      const rest = match[2].trim();
      return rest ? `${num} ${currency} ${rest}` : `${num} ${currency}`;
    }
    return `${p} ${currency}`;
  };

  const handleSubserviceClick = (svc) => {
    const text = svc.title || svc;
    const norm = normalize(text);
    // If the clicked subservice matches the emerging associations item, open the modal and show prices there
    if (
      norm.includes("services for emerging") ||
      norm.includes("المنظمات الناشئة") ||
      norm.includes("الجمعية")
    ) {
      setModalTitle(text);
      setSelectedService("emergingAssociations");
      return;
    }
    // fallback: open the modal for other subservices (use title text)
    setModalTitle(text);
    setSelectedService(text || svc);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 px-4">
            <div className={`relative ${isRtl ? "pr-6" : "pl-6"}`}>
              <div
                className={`absolute ${
                  isRtl ? "right-0" : "left-0"
                } top-0 h-full w-1`}
                style={{ backgroundColor: "#4A8B8B" }}
              ></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t("scopeOfServices.title")}
              </h2>
            </div>
            {/* subtitle removed as requested */}
            <p className="text-gray-600 mb-6">
              {t("scopeOfServices.description")}
            </p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-4">
              {serviceKeys.map((key, index) => {
                const isInstitutional = key === "institutionalDevelopment";
                // get institutional services array (object with numeric keys in translations)
                const institutionalServices = isInstitutional
                  ? Object.values(
                      t("institutional.services", { returnObjects: true })
                    )
                  : [];

                return (
                  <div key={index} className="service-block">
                    <div
                      className={`flex items-start service-item`}
                      onClick={() => handleServiceClick(key)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleServiceClick(key)
                      }
                    >
                      <span
                        className={`service-icon mr-3 mt-1 arrow ${
                          isRtl ? "rtl" : ""
                        }`}
                        style={{
                          color: "var(--color-brand-green, #189748)",
                          fontSize: 18,
                        }}
                        aria-hidden="true"
                      >
                        ➢
                      </span>
                      <span className="text-gray-700">
                        {ensureDot(t(`scopeOfServices.services.${key}`))}
                      </span>
                    </div>

                    {isInstitutional &&
                      institutionalServices &&
                      institutionalServices.length > 0 && (
                        <ul
                          className={`institutional-subservices m-0 ${
                            isRtl ? "rtl" : ""
                          }`}
                        >
                          {institutionalServices.map((svc, i) => {
                            const svcText = svc.title || svc;
                            return (
                              <li
                                key={i}
                                className="flex items-center text-gray-700 service-subitem"
                                role="button"
                                tabIndex={0}
                                onClick={() => handleSubserviceClick(svc)}
                                onKeyDown={(e) =>
                                  e.key === "Enter" &&
                                  handleSubserviceClick(svc)
                                }
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{
                                    color: "var(--color-brand-green, #189748)",
                                    marginRight: 8,
                                  }}
                                  aria-hidden="true"
                                >
                                  {/* Filled check-in-circle SVG using currentColor */}
                                  <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span>{ensureDot(svcText)}</span>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
            <img
              src={Illustration}
              alt={t("scopeOfServices.imageAlt")}
              className="scope-image"
            />
            {/* pricingPanel was removed in favor of showing prices inside the ServiceModal */}
          </div>
        </div>
      </div>
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={handleCloseModal}
          title={
            selectedService === "emergingAssociations"
              ? ensureDot(
                  modalTitle ||
                    t("scopeOfServices.services.institutionalDevelopment")
                )
              : ensureDot(
                  t(`scopeOfServices.serviceDetails.${selectedService}.title`)
                )
          }
        >
          {selectedService === "emergingAssociations" ? (
            <div className="emerging-table-wrap">
              <table className="emerging-table" role="table">
                <thead>
                  <tr>
                    <th>{t("scopeOfServices.table.service")}</th>
                    <th>{t("scopeOfServices.table.price")}</th>
                  </tr>
                </thead>
                <tbody>
                  {(
                    t(
                      "scopeOfServices.serviceDetails.ﺧﺪﻣﺎت اﻟﺠﻤﻌﻴﺎت اﻟﻨﺎﺷﺌﺔ.items",
                      { returnObjects: true }
                    ) || emergingAssociationsDetails
                  ).map((it, idx) => (
                    <tr key={idx}>
                      <td>{it.title}</td>
                      <td className="pricing-price">{formatPrice(it.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            renderDescription(
              t(`scopeOfServices.serviceDetails.${selectedService}.description`)
            )
          )}
        </ServiceModal>
      )}
    </section>
  );
};

export default ScopeOfServices;
