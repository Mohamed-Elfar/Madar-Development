import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import RootLayout from "../layout/RootLayout";

import {
  HomePage,
  SplashPage,
  About,
  TrainingPage,
  ContactUs,
  ConsultationPage,
  GrantOpportunities,
  ProjectsDivision,
  CaseStudies,
  InstitutionalDevelopment,
} from "../pages";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Splash Page - No Layout */}
      <Route path="/" element={<SplashPage />} />

      {/* Main App Routes with Layout */}
      <Route path="/home" element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="training" element={<RootLayout />}>
        <Route index element={<TrainingPage />} />
      </Route>
      <Route path="consultation" element={<RootLayout />}>
        <Route index element={<ConsultationPage />} />
      </Route>
      <Route path="institutional-development" element={<RootLayout />}>
        <Route index element={<InstitutionalDevelopment />} />
      </Route>
      <Route path="grant-opportunities" element={<RootLayout />}>
        <Route index element={<GrantOpportunities />} />
      </Route>
      <Route path="case-studies" element={<RootLayout />}>
        <Route index element={<CaseStudies />} />
      </Route>
      <Route path="projects-division" element={<RootLayout />}>
        <Route index element={<ProjectsDivision />} />
      </Route>
      {/* redirect old path to new path */}
      {/* <Route path="feasibility-study" element={<RootLayout />}>
        <Route index element={<Navigate to="/grant-opportunities" replace />} />
      </Route> */}

      {/* Catch-all route for 404 */}

      <Route path="/about" element={<RootLayout />}>
        <Route index element={<About />} />
      </Route>
      <Route path="/contact" element={<RootLayout />}>
        <Route index element={<ContactUs />} />
      </Route>
      <Route path="/privacy-policy" element={<RootLayout />}>
        <Route index element={<PrivacyPolicy />} />
      </Route>
    </>
  )
);

export default router;
