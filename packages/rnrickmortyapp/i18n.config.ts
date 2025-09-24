import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json";
import pt from "./i18n/pt.json";

const resources = {
  en: { translation: en },
  pt: { translation: pt },
};
i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
});
export default i18n;