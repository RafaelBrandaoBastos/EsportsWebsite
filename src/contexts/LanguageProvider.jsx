import { createContext, useState, useEffect } from "react";
import React from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [path, setPath] = useState(String(window.location.pathname));
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    setSelectedLanguage(
      path === "/" ||
        path === "/home" ||
        path === "/eventos" ||
        path === "/parceiros" ||
        path === "/lineups" ||
        path === "/camisas" ||
        path === "/staff" ||
        path === "/organizers"
        ? ""
        : path === "/en" ||
          path === "/home/en" ||
          path === "/eventos/en" ||
          path === "/parceiros/en" ||
          path === "/lineups/en" ||
          path === "/camisas/en" ||
          path === "/staff/en" ||
          path === "/organizers/en"
        ? "/en"
        : "/es"
    );
  }, [path]);

  return (
    <LanguageContext.Provider value={[selectedLanguage, setSelectedLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};
