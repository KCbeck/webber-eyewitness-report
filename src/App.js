import React, { useState } from 'react';
import EyewitnessForm from './components/EyewitnessForm';
import Report from './components/Report';
import AppHeader from './components/AppHeader'; // Corrected import statement

function App() {
  const [reportData, setReportData] = useState(null);
  const [language, setLanguage] = useState('en');

  const handleFormSubmit = (data) => {
    setReportData(data);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <div className="App">
      <AppHeader language={language} toggleLanguage={toggleLanguage} />
      {!reportData ? (
        <>
          <h1 style={{ textAlign: 'center', color: 'white' }}>{language === 'en' ? 'Witness Statement Input' : 'Entrada de Declaración de Testigo'}</h1>
          <EyewitnessForm onSubmit={handleFormSubmit} language={language} setLanguage={setLanguage} />
        </>
      ) : (
        <Report data={reportData} language={language} />
      )}
    </div>
  );
}

export default App;