import i18n from "i18next";
import {
  default as Backend,
  default as LanguageDetector,
} from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Russian from "./translations/ru/translation.json";
import Uzbek from "./translations/uz/translation.json";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    detection: {
      cache: ["cookie"],
      order: ["queryString", "cookie"],
    },
    fallbackLng: localStorage.getItem("i18nextLng") || "uz",
    resources: {
      uz: {
        translation: Uzbek,
      },
      ru: {
        translation: Russian,
      },
    },
  });
export default i18n;
