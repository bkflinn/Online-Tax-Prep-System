import CreateAccount from "./pages/CreateAccount";
import LoginPage from "./pages/LoginPage";
import PersonalInfo from "./pages/PersonalInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageToggleButton from './languages/LanguageToggleButton'; // Import the LanguageToggleButton
import enTranslations from './languages/en.json';
import esTranslations from './languages/es.json';
import deTranslations from './languages/de.json';
import frTranslations from './languages/fr.json';
import itTranslations from './languages/it.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
    de: {
      translation: deTranslations,
    },
    fr: {
      translation: frTranslations,
    },
    it: {
      translation: itTranslations,
    },
  },
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes values by default
  },
});
export default function App() {
  return (
    <Router>
      <LanguageToggleButton />
    <Routes>
      {/* Default route to LoginPage */}
      <Route path="/" element={<LoginPage />} />

      {/* Other routes */}
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/personal-info" element={<PersonalInfo />} />
    </Routes>
  </Router>
  );
}
