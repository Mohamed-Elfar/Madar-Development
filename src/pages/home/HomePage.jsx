import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
const HeroSection = lazy(() =>
  import("../../components/homeComponents/HeroSection")
);
const IntegratedSolutions = lazy(() =>
  import("../../components/IntegratedSolutions/IntegratedSolutions")
);
const VisionMission = lazy(() =>
  import("../../components/VisionMission/VisionMission")
);
const StatsSection = lazy(() =>
  import("../../components/StatsSection/StatsSection")
);
const EmpowerSection = lazy(() =>
  import("../../components/EmpowerSection/EmpowerSection")
);
const Services = lazy(() => import("../../components/OurServices/OurServices"));

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t("home.pageTitle", "Home")} | {t("brandName")}
        </title>
        <meta
          name="description"
          content="ConsulRain drives business growth through expert consulting and targeted training in management, finance, and operations."
        />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <HeroSection />
          <IntegratedSolutions />
          <VisionMission />
          <StatsSection />
          <EmpowerSection />
          <Services />
        </div>
      </Suspense>
    </>
  );
}
