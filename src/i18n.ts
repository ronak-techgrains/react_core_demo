// src/i18n.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Load translations via HTTP
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true, // optional: shows debug info in console
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/translation/{{lng}}.json', // 👈 path to load
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
