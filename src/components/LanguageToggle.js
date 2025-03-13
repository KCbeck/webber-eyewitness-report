import React from 'react';

const LanguageToggle = ({ language, toggleLanguage, className }) => {
  return (
    <button className={className} onClick={toggleLanguage}>
      {language === 'en' ? 'Español' : 'English'}
    </button>
  );
};

export default LanguageToggle;
