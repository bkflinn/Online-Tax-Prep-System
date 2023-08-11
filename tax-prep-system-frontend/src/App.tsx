//Pages
//import CreateAccountPage from "./pages/CreateAccountPage";
import DocumentsPage from "./pages/DocumentsPage";
import ReviewPage from "./pages/ReviewPage";
//import LoginPage from "./pages/LoginPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import ResultsPage from "./pages/ResultsPage";
import HomePage from "./pages/HomePage";
import LoginPageSS from "./pages/LoginPageSS";
import CreateAccountPageSS from "./pages/CreateAccountPageSS";


//router
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

//i18n
import { initReactI18next, useTranslation } from 'react-i18next';
import i18n from 'i18next';
import LanguageToggleButton from './languages/LanguageToggleButton'; // Import the LanguageToggleButton
import enTranslations from './languages/en.json';
import esTranslations from './languages/es.json';
import deTranslations from './languages/de.json';
import frTranslations from './languages/fr.json';
import itTranslations from './languages/it.json';
import {Grid, GridContainer, Header, Icon, Title} from "@trussworks/react-uswds";

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
      <Router>
          <Routes>
            {/* Default route to HomePage */}
            <Route path="/" element={<HomePage/>} />

            {/* Other routes */}
            <Route path="/homepage" element = {<HomePage/>} />
            <Route path="/create-account" element={<CreateAccountPageSS />} />
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
