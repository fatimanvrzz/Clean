import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Lokal fayllar idxalı
import enNavbar from './locales/en/navbar.json';
import enHome from './locales/en/home.json';
import enQuote from './locales/en/quote.json';
import enService from './locales/en/services.json';

import azNavbar from './locales/az/navbar.json';
import azHome from './locales/az/home.json';
import azQuote from './locales/az/quote.json';
import azService from './locales/az/services.json';

import ruNavbar from './locales/ru/navbar.json';
import ruHome from './locales/ru/home.json';
import ruQuote from './locales/ru/quote.json';
import ruService from './locales/ru/services.json';

const resources = {
  en: {
    navbar: enNavbar,
    home: enHome,
    quote: enQuote,
    service: enService,
  },
  az: {
    navbar: azNavbar,
    home: azHome,
    quote: azQuote,
    service: azService,
  },
  ru: {
    navbar: ruNavbar,
    home: ruHome,
    quote: ruQuote,
    service: ruService,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',            // default dil
    fallbackLng: 'en',    // fallback dili
    ns: ['navbar', 'home', 'quote', 'service'], // namespace-lar
    defaultNS: 'navbar',  // default namespace
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
