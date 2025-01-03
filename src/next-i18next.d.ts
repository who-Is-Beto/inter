// import all namespaces (for the default language, only)
import es from "./locales/es.json";
import en from "./locales/en.json";

type ES = typeof es;
type EN = typeof en;

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: ES;
    };
  }
}

declare interface Langs extends es, en {}
