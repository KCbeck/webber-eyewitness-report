import React from 'react';
import './AppHeader.css';
import Logo from './Logo';

const AppHeader = ({ language, toggleLanguage }) => {
  return (
    <header className="app-header">
      <Logo />
    </header>
  );
};

export default AppHeader;