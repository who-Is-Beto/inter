import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Messages from "./locales/en.json";
import EsMessages from "./locales/es.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: Messages
    },
    es: {
      translation: EsMessages
    }
  }
});

export default i18n;
