import "aos/dist/aos.css";
import AOS from "aos";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { SEO } from "./components";

// ✅ Import AOS and its CSS globally

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language === "AR" ? "ar" : "en";
    document.documentElement.dir = i18n.language === "AR" ? "rtl" : "ltr";

    // ✅ Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });

    // ✅ Refresh AOS when language or content changes
    AOS.refresh();
  }, [i18n.language]);

  return (
    <>
      <SEO />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
