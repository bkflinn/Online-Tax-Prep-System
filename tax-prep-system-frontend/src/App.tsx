//Pages
import CreateAccountPage from "./pages/CreateAccountPage";
import DocumentsPage from "./pages/DocumentsPage";
import ReviewPage from "./pages/ReviewPage";
import LoginPage from "./pages/LoginPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import ResultsPage from "./pages/ResultsPage";
import HomePage from "./pages/HomePage";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//i18n
import { initReactI18next, useTranslation } from 'react-i18next';
import i18n from 'i18next';
import LanguageToggleButton from './languages/LanguageToggleButton'; // Import the LanguageToggleButton
import enTranslations from './languages/en.json';
import esTranslations from './languages/es.json';
import deTranslations from './languages/de.json';
import frTranslations from './languages/fr.json';
import itTranslations from './languages/it.json';
import {Grid, GridContainer, Header, Icon, Title } from "@trussworks/react-uswds";
import LoginPageSS from "./pages/LoginPageSS";

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
  const { t } = useTranslation();
  return (
    <>
      <Header extended className='bg-primary'>
          <GridContainer>
              <Grid row={true} className="flex-justify">
                  <Title id="extended-logo" className='text-base-lightest'>
                      <Icon.AccountBalance className="padding-top-1"/> {t("title")} 
                  </Title>
                  <LanguageToggleButton/>
              </Grid>
          </GridContainer>
      </Header>
      <Header extended className='bg-primary-dark'>
                <div className="usa-navbar">
                    <h3 className='margin-0'>
                        <a href="/homepage" title="Home" aria-label="Home" className='text-base-lightest usa-footer__primary-link'>
                            {t("home")}
                        </a>
                    </h3>
                </div>
            </Header>

      <Router>
          <Routes>
            {/* Default route to LoginPage */}
            {/**<Route path="/" element={<LoginPage />} /> */}
            <Route path="/" element={<LoginPageSS />} />

            {/* Other routes */}
            <Route path="/homepage" element = {<HomePage/>} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/login" element={<LoginPageSS />} />
            <Route path="/personal-info" element={<PersonalInfoPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
       </Router>

    
    </>
  );
}
