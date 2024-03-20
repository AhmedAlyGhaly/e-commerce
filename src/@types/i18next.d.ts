// import the original type declarations
import "i18next";
import { ar, en } from "../locales/resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      en: typeof en;
      ar: typeof ar;
    };
  }
}
