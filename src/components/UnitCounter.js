import React, { useState } from 'react';


const UnitCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
    const element = event.target;
    element.style.height = "1px";
    element.style.height = (25 + element.scrollHeight) + "px";
    if (element.value  === "") {
        element.style.height = "100px";
    }
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
    if (checkNonGSMCharacters()) {
      if (text.length > 160) {
        return Math.ceil(text.length/153);
      } else {
        return Math.ceil(text.length/160);
      }
      
    } else {
      if (text.length > 70) {
        return Math.ceil(text.length/67);
      } else {
        return Math.ceil(text.length/70);
      }
    }
  }

  const characterCap = () => {
    return isGSM ? 1530 : 670;
  }

  const smsUnits = unitCalculator();

  const cap = characterCap();

  

  

  return (
    <div>
      <p>{isGSM}</p>
      <p>SMS Units: {smsUnits}</p>
    
      <p>Characters: {text.length} / {cap}</p>
      <textarea value={text} 
      placeholder = 'Enter your message here'
    
      style={{
      border: '1px solid #D2D7DD',
      'font-family': '"Open Sans", Arial, sans-serif',
      'letter-spacing': '0.5px',
      position: 'relative',
      width: '100%',
      'min-height': '100px',
      resize: 'none',
      color: '#000000',
      'border-radius': '5px',
      padding: '10px',

    }}onChange={handleTextChange} />
    </div>
  );
};

export default UnitCounter;
