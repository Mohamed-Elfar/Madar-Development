import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import i18n from "../i18n";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage when available; otherwise default to Arabic ('AR')
  const getInitialLanguage = () => {
    try {
      const stored = localStorage.getItem("language");
      if (stored && (stored === "AR" || stored === "EN")) return stored;
    } catch {
      // ignore storage errors
    }
    // default to Arabic for first-time visitors
    return "AR";
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    // Apply language to i18n and persist selection
    i18n.changeLanguage(language);
    try {
      localStorage.setItem("language", language);
    } catch {
      // ignore storage errors
    }
    // Set document attributes for language and direction
    document.documentElement.setAttribute("lang", language.toLowerCase());
    if (language.toLowerCase().startsWith("ar")) {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { LanguageContext, LanguageProvider };
export default LanguageProvider;
