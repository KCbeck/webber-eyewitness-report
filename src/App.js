import React, { useState } from 'react';
import EyewitnessForm from './components/EyewitnessForm';
import Report from './components/Report';
import AppHeader from './components/AppHeader';

function App() {
  const [reportData, setReportData] = useState(null);

  const handleFormSubmit = (data) => {
    setReportData(data);
  };

  return (
    <div className="App">
      <AppHeader />
      {!reportData ? (
        <>
          <h1 style={{ textAlign: 'center' }}>Witness Statement Input</h1>
          <EyewitnessForm onSubmit={handleFormSubmit} />
        </>
      ) : (
        <Report data={reportData} />
      )}
    </div>
  );
}

export default App;