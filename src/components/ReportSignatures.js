import React from 'react';

const ReportSignatures = ({ label, signature }) => (
  <div className="report-row">
    <div className="signature-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '0', width: '100%' }}>
      <label style={{ marginRight: '10px', padding: '0', marginLeft: '5px' }}>{label}:</label>
      <img src={signature} alt={`${label} Signature`} style={{ width: '18%', height: '12%', padding: '0' }} />
    </div>
  </div>
);

export default ReportSignatures;
