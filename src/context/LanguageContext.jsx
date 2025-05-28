import { createContext, useEffect, useState } from "react";
import axios from "axios";
import texts from "../data/texts";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [languageData, setLanguageData] = useState(texts[language]);

  const fetchFromAPI = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/workintech", texts[language], {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      setLanguageData(response.data);
      console.log("✅ API response:", response.data);
    } catch (error) {
      console.error("❌ API error:", error);
    }
  };

  useEffect(() => {
    fetchFromAPI();
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, languageData }}>
      {children}
    </LanguageContext.Provider>
  );
}