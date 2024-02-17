import React, { useState } from 'react';

const UnitCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const checkNonGSMCharacters = () => {
    const gsmCharacterSet = "@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞ\x1bÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ`¿abcdefghijklmnopqrstuvwxyzäöñüà";
    let isGSM = 'true';
    for (let i = 0; i < text.length; i++) {
      if (gsmCharacterSet.indexOf(text.charAt(i)) == -1) {
        isGSM = 'false';
      }
    }
    return isGSM;
  };

  const isGSM = checkNonGSMCharacters();

  const unitCalculator = () => {
    const GSM = checkNonGSMCharacters();
    if (GSM) {
      return Math.ceil(text.length/160);
    } else if (!GSM) {
      return Math.ceil(text.length/70);
    }
  }

  const smsUnits = unitCalculator();

  

  return (
    <div>
      <p>{isGSM}</p>
      <p>SMS Units: {smsUnits}</p>
    
      <p>Number of characters: {text.length}</p>
      <textarea value={text} onChange={handleTextChange} />
    </div>
  );
};

export default UnitCounter;
