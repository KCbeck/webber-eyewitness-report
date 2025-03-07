import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Logo from './Logo';
import './Report.css';

const Report = ({ data }) => {
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
      Eyewitness: ${data.eyewitness}\n
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

  return (
    <>
      <div className="report-container">
        <div className="container report-border">
          <div style={{ textAlign: 'center' }}>
            <Logo />
          </div>
          <h2 style={{ textAlign: 'center' }}>Eyewitness Report</h2>
          <div className="report-row" data-form-output="date-project">
            <span className="report-span" data-form-input="date" data-align="1"><strong>Date:</strong> {data.date}</span>
            <span className="report-span" data-form-input="projectName" data-align="2"><strong>Project Name:</strong> {data.projectName}</span>
          </div>
          <div className="report-row" data-form-output="injuredPartyName">
            <span className="report-span" data-form-input="injuredPartyName" data-align="1"><strong>Injured Party Name:</strong> {data.injuredPartyName}</span>
          </div>
          <div className="report-row" data-form-output="eyewitness">
            <span className="report-span" data-form-input="eyewitness" data-align="1"><strong>Eyewitness:</strong> {data.eyewitness}</span>
          </div>
          <div className="report-row" data-form-output="address">
            <span className="report-span" data-form-input="address" data-align="1"><strong>Address:</strong> {data.address}</span>
          </div>
          <div className="report-row" data-form-output="phoneNumber">
            <span className="report-span" data-form-input="phoneNumber" data-align="1"><strong>Phone Number:</strong> {data.phoneNumber}</span>
          </div>
          <div className="report-row" data-form-output="companyName">
            <span className="report-span" data-form-input="companyName" data-align="1"><strong>Company Name:</strong> {data.companyName}</span>
            <span className="report-span" data-form-input="position" data-align="2"><strong>Position:</strong> {data.position}</span>
          </div>
          <div className="report-row" data-form-output="incidentType">
            <span className="report-span" data-form-input="incidentType" data-align="1"><strong>Incident Type:</strong> {data.incidentType.accident ? 'Accident ' : ''}{data.incidentType.injury ? 'Injury ' : ''}{data.incidentType.propertyDamage ? 'Property Damage' : ''}</span>
          </div>
          <div className="report-row" data-form-output="incidentDate-time">
            <span className="report-span" data-form-input="incidentDate" data-align="1"><strong>Date of Incident:</strong> {data.incidentDate}</span>
            <span className="report-span" data-form-input="incidentTime" data-align="2"><strong>Time of Incident:</strong> {data.incidentTime}</span>
          </div>
          <div className="report-row" data-form-output="conditions">
            <span className="report-span" data-form-input="conditions" data-align="1"><strong>Conditions:</strong> {data.conditions}</span>
          </div>
          <div className="report-row" data-form-output="causeAndEvents">
            <span className="report-span" data-form-input="causeAndEvents" data-align="1"><strong>Cause and Events:</strong> {data.causeAndEvents}</span>
          </div>
          <div className="report-row" data-form-output="eyewitnessSignature">
            <div className="signature-box">
              <label>Eyewitness Signature:</label>
              <img src={data.eyewitnessSignature} alt="Eyewitness Signature" data-form-input="eyewitnessSignature" />
            </div>
          </div>
          <div className="report-row" data-form-output="representativeSignature">
            <div className="signature-box">
              <label>Webber Waterworks Representative Signature:</label>
              <img src={data.representativeSignature} alt="Representative Signature" data-form-input="representativeSignature" />
            </div>
          </div>
        </div>
      </div>
      <div className="print-buttons" style={{ textAlign: 'center', marginTop: '20px', width: '100%' }}>
        <MDBBtn onClick={handlePrint}>Print</MDBBtn>
        <MDBBtn onClick={handleEmail}>Email</MDBBtn>
        <MDBBtn onClick={handleBackToHome}>Back to Home</MDBBtn>
      </div>
    </>
  );
};

export default Report;