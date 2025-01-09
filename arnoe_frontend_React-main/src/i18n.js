import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';

// Initialisation de i18next

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de }
    },
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr', // langue de secours
    interpolation: {
      escapeValue: false // React se charge de l'échappement
    }
  });

export default i18n;
