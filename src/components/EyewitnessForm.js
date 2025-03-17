import React, { useState, useEffect } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import SignaturePad from './SignaturePad';
import './EyewitnessForm.css';
import translations from './translations';
import translateToEnglish from './translateToEnglish';
import useTextToSpeech from '../hooks/useTextToSpeech';
import useSpeechToText from '../hooks/useSpeechToText';

const EyewitnessForm = ({ onSubmit, language, setLanguage }) => {
  const [formData, setFormData] = useState({
    date: '',
    projectName: '',
    injuredPartyName: '',
    eyewitness: '',
    address: '',
    phoneNumber: '',
    companyName: '',
    position: '',
    incidentType: { accident: false, injury: false, propertyDamage: false },
    incidentDate: '',
    incidentTime: '',
    conditions: '',
    causeAndEvents: '',
    eyewitnessSignature: '',
    representativeSignature: ''
  });
  const [, setIsListening] = useSpeechToText((transcript) => {
    setFormData((prevData) => ({ ...prevData, [currentField]: transcript }));
  });
  const [currentField, setCurrentField] = useState('');

  useEffect(() => {
    setFormData({
      date: '',
      projectName: '',
      injuredPartyName: '',
      eyewitness: '',
      address: '',
      phoneNumber: '',
      companyName: '',
      position: '',
      incidentType: { accident: false, injury: false, propertyDamage: false },
      incidentDate: '',
      incidentTime: '',
      conditions: '',
      causeAndEvents: '',
      eyewitnessSignature: '',
      representativeSignature: ''
    });
  }, [language]);

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
    let dataToSubmit = formData;
    if (language === 'es') {
      dataToSubmit = translateToEnglish(formData);
    }
    onSubmit(dataToSubmit);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  const startListening = (field) => {
    setCurrentField(field);
    setIsListening(true);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  useTextToSpeech(translations[language].date);
  useTextToSpeech(translations[language].projectName);
  useTextToSpeech(translations[language].injuredPartyName);
  useTextToSpeech(translations[language].eyewitnessFullName);
  useTextToSpeech(translations[language].address);
  useTextToSpeech(translations[language].phoneNumber);
  useTextToSpeech(translations[language].companyName);
  useTextToSpeech(translations[language].position);
  useTextToSpeech(translations[language].accident);
  useTextToSpeech(translations[language].injury);
  useTextToSpeech(translations[language].propertyDamage);
  useTextToSpeech(translations[language].dateOfIncident);
  useTextToSpeech(translations[language].timeOfIncident);
  useTextToSpeech(translations[language].conditions);
  useTextToSpeech(translations[language].causeAndEvents);
  useTextToSpeech(translations[language].eyewitnessSignature);
  useTextToSpeech(translations[language].representativeSignature);

  return (
    <form className="eyewitness-form" onSubmit={handleSubmit}>
      <MDBBtn type="button" onClick={toggleLanguage}>
        {language === 'en' ? 'Español' : 'English'}
      </MDBBtn>
      <div className="form-row">
        <label className="form-label">{translations[language].date}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
            onFocus={() => startListening('date')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].projectName}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput
            className="form-control"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            onFocus={() => startListening('projectName')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].injuredPartyName}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput
            className="form-control"
            name="injuredPartyName"
            value={formData.injuredPartyName}
            onChange={handleChange}
            onFocus={() => startListening('injuredPartyName')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].eyewitnessFullName}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput
            className="form-control"
            name="eyewitness"
            value={formData.eyewitness}
            onChange={handleChange}
            onFocus={() => startListening('eyewitness')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].address}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            onFocus={() => startListening('address')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].phoneNumber}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput
            className="form-control"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onFocus={() => startListening('phoneNumber')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].companyName}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput
            className="form-control"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            onFocus={() => startListening('companyName')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].position}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput
            className="form-control"
            name="position"
            value={formData.position}
            onChange={handleChange}
            onFocus={() => startListening('position')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="checkbox-group">
        <MDBCheckbox
          label={translations[language].accident}
          name="accident"
          checked={formData.incidentType.accident}
          onChange={handleChange}
        />
        <MDBCheckbox
          label={translations[language].injury}
          name="injury"
          checked={formData.incidentType.injury}
          onChange={handleChange}
        />
        <MDBCheckbox
          label={translations[language].propertyDamage}
          name="propertyDamage"
          checked={formData.incidentType.propertyDamage}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].dateOfIncident}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput
            className="form-control"
            name="incidentDate"
            value={formData.incidentDate}
            onChange={handleChange}
            onFocus={() => startListening('incidentDate')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].timeOfIncident}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput
            className="form-control"
            name="incidentTime"
            value={formData.incidentTime}
            onChange={handleChange}
            onFocus={() => startListening('incidentTime')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].conditions}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBInput
            className="form-control"
            name="conditions"
            value={formData.conditions}
            onChange={handleChange}
            onFocus={() => startListening('conditions')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].causeAndEvents}</label>
        <div className="printable-form" style={{ width: '100%' }}>
          <MDBTextArea
            className="form-control"
            name="causeAndEvents"
            value={formData.causeAndEvents}
            onChange={handleChange}
            onFocus={() => startListening('causeAndEvents')}
            onBlur={stopListening}
          />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].eyewitnessSignature}</label>
        <SignaturePad onEnd={handleEyewitnessSignature} />
      </div>
      <div className="form-row">
        <label className="form-label">{translations[language].representativeSignature}</label>
        <SignaturePad onEnd={handleRepresentativeSignature} />
      </div>
      <div className="form-row">
        <MDBBtn type="submit">{translations[language].submit}</MDBBtn>
      </div>
    </form>
  );
};

export default EyewitnessForm;