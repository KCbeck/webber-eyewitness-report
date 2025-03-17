import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import ReportHeader from './ReportHeader';
import ReportRow from './ReportRow';
import ReportSignatures from './ReportSignatures';
import './Report.css';
import translateToEnglish from './translateToEnglish';

const Report = ({ data, language }) => {
  const [isTranslated, setIsTranslated] = useState(language === 'es');

  const handleBackToHome = () => {
    window.location.reload(); // Reload the page to go back to the form
  };

  const handlePrint = () => {
    document.body.classList.add('print-mode'); // Add print mode class
    window.print(); // Print the page
    document.body.classList.remove('print-mode'); // Remove print mode class after printing
  };

  const handleEmail = () => {
    const subject = 'Eyewitness Report';
    const body = `
      Eyewitness Report\n
      Date: ${data.date}\n
      Project Name: ${data.projectName}\n
      Injured Party Name: ${data.injuredPartyName}\n
      Eyewitness Full Name: ${data.eyewitness}\n
      Address: ${data.address}\n
      Phone Number: ${data.phoneNumber}\n
      Company Name: ${data.companyName}\n
      Position: ${data.position}\n
      Incident Type: ${data.incidentType.accident ? 'Accident ' : ''}${data.incidentType.injury ? 'Injury ' : ''}${data.incidentType.propertyDamage ? 'Property Damage' : ''}\n
      Date of Incident: ${data.incidentDate}\n
      Time of Incident: ${data.incidentTime}\n
      Conditions: ${data.conditions}\n
      Cause and Events: ${data.causeAndEvents}\n
    `;
    window.location.href = `mailto:webber@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleTranslate = () => {
    const causeAndEventsElement = document.querySelector("#causeAndEvents");
    if (!isTranslated && causeAndEventsElement) {
      causeAndEventsElement.textContent = translateToEnglish({ causeAndEvents: causeAndEventsElement.textContent }).causeAndEvents;
      setIsTranslated(true);
    } else if (causeAndEventsElement) {
      causeAndEventsElement.textContent = data.causeAndEvents;
      setIsTranslated(false);
    }
  };

  const handleDetectAndTranslate = () => {
    const causeAndEventsElement = document.querySelector("#causeAndEvents");
    if (causeAndEventsElement) {
      const text = causeAndEventsElement.textContent;
      const isSpanish = /[áéíóúñü]/i.test(text); // Simple check for Spanish characters
      if (isSpanish) {
        const translatedText = translateToEnglish({ causeAndEvents: text }).causeAndEvents;
        causeAndEventsElement.textContent = translatedText;
        setIsTranslated(true);
      } else {
        setIsTranslated(false);
      }
    }
  };

  return (
    <>
      <div className="report-container">
        <div className="container report-border">
          <ReportHeader />
          <div className="report-row">
            <ReportRow id="date" label="Date" value={data.date || 'N/A'} isTwoColumn />
            <ReportRow id="projectName" label={language === 'es' ? 'Nombre del Proyecto' : 'Project Name'} value={data.projectName || 'N/A'} align="2" isTwoColumn />
          </div>
          <ReportRow id="injuredPartyName" label="Injured Party Name" value={data.injuredPartyName || 'N/A'} />
          <ReportRow id="eyewitnessFullName" label="Eyewitness Full Name" value={data.eyewitness || 'N/A'} />
          <ReportRow id="address" label="Address" value={data.address || 'N/A'} />
          <ReportRow id="phoneNumber" label="Phone Number" value={data.phoneNumber || 'N/A'} />
          <div className="report-row">
            <ReportRow id="companyName" label="Company Name" value={data.companyName || 'N/A'} isTwoColumn />
            <ReportRow id="position" label="Position" value={data.position || 'N/A'} align="2" isTwoColumn />
          </div>
          <ReportRow id="incidentType" label="Incident Type" value={`${data.incidentType.accident ? 'Accident ' : ''}${data.incidentType.injury ? 'Injury ' : ''}${data.incidentType.propertyDamage ? 'Property Damage' : ''}`} />
          <div className="report-row">
            <ReportRow id="incidentDate" label="Date of Incident" value={data.incidentDate || 'N/A'} isTwoColumn />
            <ReportRow id="incidentTime" label="Time of Incident" value={data.incidentTime || 'N/A'} align="2" isTwoColumn />
          </div>
          <ReportRow id="conditions" label="Conditions" value={data.conditions || 'N/A'} />
          <ReportRow id="causeAndEvents" label="Cause and Events" value={data.causeAndEvents || 'N/A'} />
          <ReportSignatures id="eyewitnessSignature" label="Eyewitness Signature" signature={data.eyewitnessSignature} />
          <ReportSignatures id="representativeSignature" label="Webber Waterworks Representative Signature" signature={data.representativeSignature} />
        </div>
      </div>
      <div className="print-buttons" style={{ textAlign: 'center', marginTop: '5%' , marginBottom: "3%",  width: '100%' }}>
        <MDBBtn onClick={handlePrint}>Print</MDBBtn>
        <MDBBtn onClick={handleEmail}>Email</MDBBtn>
        <MDBBtn onClick={handleBackToHome}>Back to Home</MDBBtn>
        <MDBBtn onClick={handleTranslate}>{isTranslated ? 'Show Original' : 'Translate'}</MDBBtn>
        <MDBBtn onClick={handleDetectAndTranslate}>Detect and Translate</MDBBtn>
      </div>
    </>
  );
};

export default Report;