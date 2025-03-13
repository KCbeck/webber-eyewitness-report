import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import debounce from 'lodash.debounce';
import './SignaturePad.css';

const SignaturePad = ({ onEnd }) => {
  const sigCanvas = useRef(null);

  const handleEnd = debounce(() => {
    if (sigCanvas.current) {
      const signature = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
      onEnd(signature);
    }
  }, 300);

  const handleClear = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      onEnd('');
    }
  };

  return (
    <div>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ width: 720, height: 200, className: 'sigCanvas' }} // Adjusted width to be 20% wider
        onEnd={handleEnd}
      />
      <button type="button" onClick={handleClear}>Clear</button>
    </div>
  );
};

export default SignaturePad;