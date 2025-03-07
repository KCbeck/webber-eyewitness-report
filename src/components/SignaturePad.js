// filepath: /src/components/SignaturePad.js
import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = ({ onEnd }) => {
  const sigCanvas = useRef(null);

  const handleEnd = () => {
    if (sigCanvas.current) {
      const signature = sigCanvas.current.getTrimmedCanvas().toDataURL('image/jpeg');
      onEnd(signature);
    }
  };

  return (
    <div>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
        onEnd={handleEnd}
      />
    </div>
  );
};

export default SignaturePad;