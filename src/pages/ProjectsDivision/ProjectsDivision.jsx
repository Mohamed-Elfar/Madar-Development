import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./ProjectsDivision.css";
import { useTranslation } from "react-i18next";
import ServiceModal from "../../components/ServiceModal/ServiceModal";
import SubscribeModal from "../../components/SubscribeModal/SubscribeModal";
import Illustration from "/images/institutional-illustration-2.svg";

export default function ProjectsDivision() {
  const { t } = useTranslation();
  const pageTitle = t("projectsDivision.sectionTitle", {
    defaultValue: t("scopeOfServices.serviceDetails.projectsDivision.title", {
      defaultValue: t("projectsDivision.title", {
        defaultValue: "Projects Division Services",
      }),
    }),
  });
  const [selectedService, setSelectedService] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [availableServices, setAvailableServices] = useState([]);

  // Fallback items (exact list supplied by user)
  const fallbackItems = [
    { title: "Write and design project proposals for donors", price: "1500" },
    {
      title: "Project management and execution over the project duration",
      price: "depends on project value & duration",
    },
    { title: "Monitoring & evaluation for projects", price: "2500" },
    { title: "Prepare project closure report", price: "2500" },
    {
      title:
        "Create and operate project management units inside the association for one year (for 3 staff)",
      price: "45000",
    },
    {
      title:
        "Design continuity plans for projects after grant end, fundraising & marketing campaigns",
      price: "2500",
    },
    {
      title:
        "Training: preparing, managing and monitoring PMD = project evaluation and developmental projects",
      price: "1150",
    },
  ];

  const formatPrice = (price) => {
    const currency = t("scopeOfServices.currency");
    if (!price && price !== 0) return "";
    const p = String(price).trim();
    const match = p.match(/^(\d+[\d,\s]*)\s*(.*)$/u);
    if (match) {
      const num = match[1].trim();
      const rest = match[2].trim();
      return rest ? `${num} ${currency} ${rest}` : `${num} ${currency}`;
    }
    return `${p} ${currency}`;
  };

  const parseDescriptionToItems = (desc) => {
    if (!desc) return [];
    if (Array.isArray(desc)) return desc;
    const lines = String(desc)
      .split(/\n|\\r\\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    const items = [];
    lines.forEach((line) => {
      const m = line.match(/(\d+[\d,\s]*)\s*(SR|ر\.س|ريال)?/i);
      if (m) {
        const price = m[1].replace(/\s+/g, "");
        const title = line
          .replace(m[0], "")
          .replace(/[—–:\u0600-\u06FF\p{P}]+$/u, "")
          .trim();
        items.push({ title: title || line, price });
      } else {
        items.push({ title: line, price: "" });
      }
    });
    return items;
  };

  const openServiceModal = () => {
    // open the ServiceModal for projectsDivision which will render the same table
    setModalTitle(t("scopeOfServices.serviceDetails.projectsDivision.title"));
    setSelectedService("projectsDivision");
  };

  const handleSubscribe = (itemsArg) => {
    // itemsArg may be passed directly (array) or undefined to read translations
    let items = [];
    if (Array.isArray(itemsArg) && itemsArg.length > 0) {
      items = itemsArg;
    } else {
      const translated = t(
        "scopeOfServices.serviceDetails.projectsDivision.items",
        { returnObjects: true }
      );
      items =
        Array.isArray(translated) && translated.length > 0
          ? translated
          : fallbackItems;
      if (typeof translated === "string") {
        items = parseDescriptionToItems(translated);
      }
    }

    const svcOptions = items.map((it) => ({
      title: it.title || it,
      price: it.price || "",
    }));
    setAvailableServices(svcOptions);
    setSubscribeOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>
          {pageTitle || t("institutional.title")} | {t("brandName")}
        </title>
        <meta
          name="description"
          content={t("projectsDivision.metaDescription", {
            defaultValue:
              "Proposal writing, project management, monitoring & evaluation, project closure and project unit services to support funded programs and ensure sustainable delivery.",
          })}
        />
      </Helmet>

      {/* Hero Section */}
      <div className="projects-hero-img-section w-100">
        <div className="projects-hero-img-wrapper">
          <img
            src="/images/hero/project-management-banner.webp"
            alt="Projects Hero"
            className="projects-hero-img"
            loading="lazy"
          />
          <div className="projects-hero-overlay" />
          <div className="projects-hero-text">
            <h1 className="projects-hero-title">{pageTitle}</h1>
          </div>
        </div>
      </div>

      {/* Inline services table (same data as modal) */}
      <section className="py-8 bg-white">
        <div className="container mx-auto">
          <div className="bg-white rounded-md py-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">{pageTitle}</h3>
            <div className="emerging-table-wrap">
              <table className="emerging-table w-full" role="table">
                <thead>
                  <tr>
                    <th>{t("scopeOfServices.table.service")}</th>
                    <th>{t("scopeOfServices.table.price")}</th>
                  </tr>
                </thead>
                <tbody>
                  {(function () {
                    const translated = t(
                      "scopeOfServices.serviceDetails.projectsDivision.items",
                      { returnObjects: true }
                    );
                    let items = [];
                    if (Array.isArray(translated) && translated.length > 0) {
                      items = translated;
                    } else if (typeof translated === "string") {
                      items = parseDescriptionToItems(translated);
                    } else {
                      items = fallbackItems;
                    }

                    return items.map((it, idx) => (
                      <tr key={idx}>
                        <td>{it.title}</td>
                        <td className="pricing-price">
                          {formatPrice(it.price)}
                        </td>
                      </tr>
                    ));
                  })()}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <button
                className="bg-primary-500 text-white py-2 px-4 rounded-md"
                onClick={() => handleSubscribe(fallbackItems)}
              >
                {t("register.subscribeButton", "Subscribe to a service")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={modalTitle}
          onSubscribe={() => handleSubscribe(selectedService)}
        >
          <div className="emerging-table-wrap">
            <table className="emerging-table" role="table">
              <thead>
                <tr>
                  <th>{t("scopeOfServices.table.service")}</th>
                  <th>{t("scopeOfServices.table.price")}</th>
                </tr>
              </thead>
              <tbody>
                {(function () {
                  const translated = t(
                    "scopeOfServices.serviceDetails.projectsDivision.items",
                    { returnObjects: true }
                  );
                  let items = [];
                  if (Array.isArray(translated) && translated.length > 0) {
                    items = translated;
                  } else if (typeof translated === "string") {
                    items = parseDescriptionToItems(translated);
                  }
                  return items.map((it, idx) => (
                    <tr key={idx}>
                      <td>{it.title}</td>
                      <td className="pricing-price">{formatPrice(it.price)}</td>
                    </tr>
                  ));
                })()}
              </tbody>
            </table>
          </div>
        </ServiceModal>
      )}

      <SubscribeModal
        isOpen={subscribeOpen}
        onClose={() => setSubscribeOpen(false)}
        services={availableServices}
        title={modalTitle}
      />
    </>
  );
}
