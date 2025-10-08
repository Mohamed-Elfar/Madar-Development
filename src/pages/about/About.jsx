import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Hero, Mission, OurJourney, Vision } from "../../components";
import VisionMission from "../../components/VisionMission/VisionMission";
import IntegratedSolutions from "../../components/IntegratedSolutions/IntegratedSolutions";

const About = () => {
  const heroRef = useRef();

  return (
    <>
      <Helmet>
        <title>About | ConsulRain</title>
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
    </>
  );
};

export default About;
