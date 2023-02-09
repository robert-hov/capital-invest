import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";


import translationARM from './locales/arm/translation.json';
import translationRU from './locales/rus/translation.json';
import translationEN from './locales/en/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  rus: {
    translation: translationRU
  },
  arm: {
    translation: translationARM
  }
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // use en if detected lng is not available
  });

export default i18n;