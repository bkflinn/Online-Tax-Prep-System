// LanguageToggleButton.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
//import { Select } from '@trussworks/react-uswds';

//supports 5 languages, but only 2 enabled
const LanguageToggleButton = (): React.ReactElement => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (newLanguage: string): void => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <div className='text-base-lightest'>
          <span style={{ cursor: 'pointer' }} onClick={() => handleLanguageChange('en')}>
              English
          </span>{" | "}
          <span style={{ cursor: 'pointer' }} onClick={() => handleLanguageChange('es')}>
              Español
          </span>
      </div>
    
    </>
  );
};

export default LanguageToggleButton;
