import React from "react";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./InstitutionalDevelopment.css";
import { useTranslation } from "react-i18next";
import SubscribeModal from "../../components/SubscribeModal/SubscribeModal";
import { useState } from "react";

export default function InstitutionalDevelopment() {
  const { t } = useTranslation();
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [availableServices, setAvailableServices] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  return (
    <>
      <Helmet>
        <title>
          {t("institutional.title")} | {t("brandName")}
        </title>
        <meta name="description" content={t("institutional.metaDescription")} />
      </Helmet>

      <div className="institutional-hero">
        <div className="institutional-hero-img">
          <img
            src="/images/Institutional-Development-Consulting.webp"
            alt="Institutional Development"
            loading="lazy"
          />
          <div className="institutional-hero-overlay" />
          <div className="institutional-hero-content">
            <h1 className="institutional-hero-title">
              {t("institutional.title")}
            </h1>
          </div>
        </div>
      </div>

      <section className="py-16 bg-primary-50 text-center m-0">
        <SectionHeader
          title={t("institutional.servicesSectionTitle")}
          lineColor="#FFE047"
        />

        <div className="mt-12 max-w-7xl mx-auto px-4">
          {/* Render the three pricing tables: Emerging, Mid-sized, Large */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                key: "scopeOfServices.serviceDetails.ﺧﺪﻣﺎت اﻟﺠﻤﻌﻴﺎت اﻟﻨﺎﺷﺌﺔ",
                title: t(
                  "scopeOfServices.serviceDetails.ﺧﺪﻣﺎت اﻟﺠﻤﻌﻴﺎت اﻟﻨﺎﺷﺌﺔ.title"
                ),
              },
              {
                key: "scopeOfServices.serviceDetails.ﺧﺪﻣﺎت اﻟﺠﻤﻌﻴﺎت اﻟﻤﺘﻮﺳﻄﺔ",
                title: t(
                  "scopeOfServices.serviceDetails.ﺧﺪﻣﺎت اﻟﺠﻤﻌﻴﺎت اﻟﻤﺘﻮﺳﻄﺔ.title"
                ),
              },
              {
                key: "scopeOfServices.serviceDetails.ﺧﺪﻣﺎت اﻟﺠﻤﻌﻴﺎت اﻟﻜﺒﺮى",
                title: t(
                  "scopeOfServices.serviceDetails.ﺧﺪﻣﺎت اﻟﺠﻤﻌﻴﺎت اﻟﻜﺒﺮى.title"
                ),
              },
            ].map((tbl) => {
              const items = t(tbl.key + ".items", { returnObjects: true });
              const isArray = Array.isArray(items) && items.length > 0;
              return (
                <div
                  className="bg-white rounded-md p-6 shadow-sm"
                  key={tbl.key}
                >
                  <h3 className="text-lg font-semibold mb-4">{tbl.title}</h3>
                  <div className="emerging-table-wrap">
                    <table className="emerging-table w-full" role="table">
                      <thead>
                        <tr>
                          <th>{t("scopeOfServices.table.service")}</th>
                          <th>{t("scopeOfServices.table.price")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(isArray ? items : []).map((it, idx) => (
                          <tr key={idx}>
                            <td>{it.title}</td>
                            <td className="pricing-price">{it.price}</td>
                          </tr>
                        ))}
                        {!isArray && (
                          <tr>
                            <td colSpan={2} className="text-gray-500">
                              {t(
                                "scopeOfServices.noPricesAvailable",
                                "Prices not available"
                              )}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      className="bg-primary-500 text-white py-2 px-4 rounded-md"
                      onClick={() => {
                        // prepare service options from items
                        const svcOptions = (isArray ? items : []).map((it) => ({
                          title: it.title,
                          price: it.price,
                        }));
                        setAvailableServices(svcOptions);
                        setModalTitle(tbl.title);
                        setSubscribeOpen(true);
                      }}
                    >
                      {t("register.subscribeButton", "Subscribe to a service")}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <SubscribeModal
        isOpen={subscribeOpen}
        onClose={() => setSubscribeOpen(false)}
        services={availableServices}
        title={modalTitle}
      />
    </>
  );
}
