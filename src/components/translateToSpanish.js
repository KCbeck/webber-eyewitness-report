const translateToSpanish = (data) => {
  const translations = {
    'Date': 'Fecha',
    'Project Name': 'Nombre del Proyecto',
    'Injured Party Name': 'Nombre de la Parte Lesionada',
    'Eyewitness Full Name': 'Nombre Completo del Testigo',
    'Address': 'Dirección',
    'Phone Number': 'Número de Teléfono',
    'Company Name': 'Nombre de la Empresa',
    'Position': 'Posición',
    'Accident': 'Accidente',
    'Injury': 'Lesión',
    'Property Damage': 'Daño a la Propiedad',
    'Date of Incident': 'Fecha del Incidente',
    'Time of Incident': 'Hora del Incidente',
    'Conditions': 'Condiciones',
    'Cause and Events': 'Descripción de la causa y eventos de muestra.',
    'Eyewitness Signature': 'Firma del Testigo',
    'Webber Waterworks Representative Signature': 'Firma del Representante de Webber Waterworks'
  };

  const translatedData = { ...data };

  for (const key in data) {
    if (translations[data[key]]) {
      translatedData[key] = translations[data[key]];
    }
  }

  return translatedData;
};

export default translateToSpanish;
