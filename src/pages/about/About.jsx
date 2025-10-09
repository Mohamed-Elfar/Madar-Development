import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>
          {t("About.title", "About")} | {t("brandName")}
        </title>
        <meta
          name="description"
          content="Learn more about ConsulRain, our mission, vision, and integrated solutions for your business growth."
        />
      </Helmet>
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
