// LanguageToggleButton.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
//import { Select } from '@trussworks/react-uswds';

const LanguageToggleButton = (): React.ReactElement => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (newLanguage: string): void => {
    i18n.changeLanguage(newLanguage);
  };

  //Selectable English and Spanish buttons to swap language
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
