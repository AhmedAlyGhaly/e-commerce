import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { ar, en } from "./resources";
import { LanguageCode } from "../types/constants";

export const resources = {
  [LanguageCode.ar]: { translation: ar },
  [LanguageCode.en]: { translation: en },
};

i18n

  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: LanguageCode.en,
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    keySeparator: ".",
    nsSeparator: ".",
    resources,
    saveMissing: true,
    saveMissingPlurals: true,
  });

export default i18n;
