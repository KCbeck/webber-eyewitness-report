import React, { useState } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import SignaturePad from './SignaturePad';
import './EyewitnessForm.css';

const EyewitnessForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '03/07/2025',
    projectName: 'Sample Project',
    injuredPartyName: 'Doe, John A.',
    eyewitness: 'Smith, Jane B.',
    address: '123 Sample St, Sample City, SC 12345',
    phoneNumber: '123-456-7890',
    companyName: 'Sample Company',
    position: 'Sample Position',
    incidentType: { accident: true, injury: false, propertyDamage: false },
    incidentDate: '03/07/2025',
    incidentTime: '12:00 PM',
    conditions: 'Clear',
    causeAndEvents: 'Sample cause and events description.',
    eyewitnessSignature: '',
    representativeSignature: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        incidentType: { ...formData.incidentType, [name]: checked }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEyewitnessSignature = (signature) => {
    setFormData({ ...formData, eyewitnessSignature: signature });
  };

  const handleRepresentativeSignature = (signature) => {
    setFormData({ ...formData, representativeSignature: signature });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="eyewitness-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-label">Date</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput className="form-control" name="date" value={formData.date} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Project Name</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput className="form-control" name="projectName" value={formData.projectName} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Injured Party Name</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput className="form-control" name="injuredPartyName" value={formData.injuredPartyName} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Eyewitness Full Name</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput className="form-control" name="eyewitness" value={formData.eyewitness} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Address</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput className="form-control" name="address" value={formData.address} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Phone Number</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Company Name</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput className="form-control" name="companyName" value={formData.companyName} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Position</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput className="form-control" name="position" value={formData.position} onChange={handleChange} />
        </div>
      </div>
      <div className="checkbox-group">
        <MDBCheckbox label="Accident" name="accident" checked={formData.incidentType.accident} onChange={handleChange} />
        <MDBCheckbox label="Injury" name="injury" checked={formData.incidentType.injury} onChange={handleChange} />
        <MDBCheckbox label="Property Damage" name="propertyDamage" checked={formData.incidentType.propertyDamage} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label className="form-label">Date of Incident</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput className="form-control" name="incidentDate" value={formData.incidentDate} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Time of Incident</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput className="form-control" name="incidentTime" value={formData.incidentTime} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Conditions</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput className="form-control" name="conditions" value={formData.conditions} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Cause and Events</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBTextArea className="form-control" name="causeAndEvents" value={formData.causeAndEvents} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Eyewitness Signature</label>
        <SignaturePad onEnd={handleEyewitnessSignature} />
      </div>
      <div className="form-row">
        <label className="form-label">Webber Waterworks Representative Signature</label>
        <SignaturePad onEnd={handleRepresentativeSignature} />
      </div>
      <div className="form-row">
        <MDBBtn type="submit">Submit</MDBBtn>
      </div>
    </form>
  );
};

export default EyewitnessForm;