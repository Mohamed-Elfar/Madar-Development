import React, { useRef } from "react";
import SEO from "../../components/SEO/SEO";
import { useTranslation } from "react-i18next";
import {
  Hero,
  FAQ,
  VisionMission,
  IntegratedSolutions,
} from "../../components";

const About = () => {
  const heroRef = useRef();
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`${t("About.title", "About")} | ${t("brandName")}`}
        description={
          "Learn about MADAR DEVELOPMENT's mission, founders, and integrated consulting and training services that deliver measurable organizational impact."
        }
        pathname={"/about"}
        image={"/images/whoWeAre.webp"}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <IntegratedSolutions />
      <VisionMission />
      <FAQ />
    </>
  );
};

export default About;
