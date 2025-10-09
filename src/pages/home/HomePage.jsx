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

const Services = lazy(() => import("../../components/OurServices/OurServices"));
const LogosCarousel = lazy(() =>
  import("../../pages/GrantOpportunities/LogosCarousel")
);
const FAQ = lazy(() => import("../../components/FAQ/FAQ"));

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
          content="Madar Development provides consulting, training and institutional capacity-building in operations, finance and leadership for nonprofits, SMEs, government and industry."
        />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <HeroSection />
          <IntegratedSolutions />
          <VisionMission />
          <StatsSection />
          {/* <EmpowerSection /> */}
          <Services />
          <FAQ />
          <LogosCarousel
            images={[
              "/images/charity%20logos/Abdulrahman-bin-Saleh-Al-Rajhi-and-Family-Charitable-Foundation.webp",
              "/images/charity%20logos/Al-Ajimi-and-Family-Charitable-Foundation.webp",
              "/images/charity%20logos/Hamad-Al-Hussaini-and-Family-charity.webp",
              "/images/charity%20logos/Jomaih-charity.webp",
              "/images/charity%20logos/Mohammed-bin-Abdulaziz-Al-Habib-Charitable-Foundation.webp",
              "/images/charity%20logos/Mohammed-bin-Abdullah-Aljomaih-Charitable-Foundation.webp",
              "/images/charity%20logos/Salem-Bin-Ahmed-Balhamer-and-Family-charity.webp",
              "/images/charity%20logos/Salem-Bin-Mahfouz-Charitable-Foundation.webp",
              "/images/charity%20logos/Subaie-charity.webp",
              "/images/charity%20logos/Sulaiman-bin-Abdulaziz-Al-Rajhi-Charitable-Foundation.webp",
            ]}
          />
        </div>
      </Suspense>
    </>
  );
}
