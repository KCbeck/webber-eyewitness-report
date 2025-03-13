const translateToEnglish = (data) => {
  const translations = {
    'Fecha': 'Date',
    'Nombre del Proyecto': 'Project Name',
    'Nombre de la Parte Lesionada': 'Injured Party Name',
    'Nombre Completo del Testigo': 'Eyewitness Full Name',
    'Dirección': 'Address',
    'Número de Teléfono': 'Phone Number',
    'Nombre de la Empresa': 'Company Name',
    'Posición': 'Position',
    'Accidente': 'Accident',
    'Lesión': 'Injury',
    'Daño a la Propiedad': 'Property Damage',
    'Fecha del Incidente': 'Date of Incident',
    'Hora del Incidente': 'Time of Incident',
    'Condiciones': 'Conditions',
    'Descripción de la causa y eventos de muestra.': 'Cause and Events',
    'Firma del Testigo': 'Eyewitness Signature',
    'Firma del Representante de Webber Waterworks': 'Webber Waterworks Representative Signature'
  };

  const translatedData = { ...data };

  for (const key in data) {
    if (translations[data[key]]) {
      translatedData[key] = translations[data[key]];
    }
  }

  return translatedData;
};

export default translateToEnglish;
