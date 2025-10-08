import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
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
const Founders = lazy(() =>
  import("../../components/foundersSection/Founders")
);
const OurPartners = lazy(() =>
  import("../../components/PartnersSection/OurPartners")
);

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>ConsulRain | Home</title>
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
          <Founders />
          <OurPartners />
        </div>
      </Suspense>
    </>
  );
}
