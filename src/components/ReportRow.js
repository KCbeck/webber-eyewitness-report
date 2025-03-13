import React from 'react';

const ReportRow = ({ id, label, value, align = '1', isTwoColumn = false, ...props }) => (
  <div className="report-row" style={{ width: '100%', justifyContent: 'space-between' }}>
    <span id={id} className={`report-span ${isTwoColumn ? 'two-column' : ''}`} data-align={align} style={{ width: '100%', whiteSpace: 'normal' }} {...props}>
      <strong>{label}:</strong> {value}
    </span>
  </div>
);

export default ReportRow;
