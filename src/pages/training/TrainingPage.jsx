import HeroSection from "../../components/training/Hero/HeroSection";
import TrainingIntroSection from "../../components/training/TrainingIntroSection/TrainingIntroSection";
import TrainingProcessSection from "../../components/training/TrainingProcessSection/TrainingProcessSection";
import TrainingBusinessLines from "../../components/TrainingBusinessLines/TrainingBusinessLines";
import ScopeOfServices from "../../components/ScopeOfServices/ScopeOfServices";
import { Helmet } from "react-helmet-async";
export default function TrainingPage() {
  return (<>
      <Helmet>
        <title>Training | ConsulRain</title>
        <meta name="description" content="Discover ConsulRain's training programs, business lines, and our process for empowering your team." />
      </Helmet>
      <div>
        <HeroSection />
        <TrainingIntroSection />
        <ScopeOfServices />
        <TrainingProcessSection />
      <TrainingBusinessLines />
    </div></>
  );
}
