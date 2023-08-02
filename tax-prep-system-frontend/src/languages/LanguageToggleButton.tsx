// LanguageToggleButton.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@trussworks/react-uswds';

const LanguageToggleButton = (): React.ReactElement => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Select id="language-select" name="language-select" value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="de">German</option>
      <option value="fr">French</option>
      <option value="it">Italian</option>
    </Select>
  );
};

export default LanguageToggleButton;
