import { useEffect } from 'react';

const useTextToSpeech = (text) => {
  useEffect(() => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  }, [text]);
};

export default useTextToSpeech;
