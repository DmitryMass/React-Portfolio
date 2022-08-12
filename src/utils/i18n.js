import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {
  dictionaryEnglish,
  dictionaryUkrainian,
} from '../Components/LangContext/LangNoteBook';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: dictionaryEnglish },
    ua: { translation: dictionaryUkrainian },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
