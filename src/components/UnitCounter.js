import React, { useState } from 'react';


const UnitCounter = () => {
  const [text, setText] = useState('');
  const [inputting, setInputting] = useState('');

  const handleCheck = (event) => {
    
    return event.target.checked ? setText(text.replace(gsmCharacterSet, '#')) : null;

  }


  // dynamic height adjustment of text area
  const handleTextChange = (event) => {
    setText(event.target.value);
    
    const element = event.target;
    element.style.height = "1px";
    element.style.height = (25 + element.scrollHeight) + "px";
    if (element.value  === "") {
        element.style.height = "100px";
    }
  };

  // define GSM character pattern

  const gsmCharacterSet = /[^\x0a\x0d\x20-\x5F\x61-\x7E¡£¤¥§¿ÄÅÆÇÉÑÖØÜßàäåæèéìñòöøùüΓΔΘΛΞΠΣΦΨΩ€]/g;

  // check the text area for GSM characters.
  // returns true if it is all GSM. The text is clean
  // returns false if there is a non GSM character

  const checkNonGSMCharacters = () => {

    // check for the pattern in the text area

    return !gsmCharacterSet.test(text);
  };

  let isGSM = checkNonGSMCharacters();

  

  const unitCalculator = () => {
    if (checkNonGSMCharacters()) {
        return text.length > 160 ? Math.ceil(text.length/153) : Math.ceil(text.length/160);
      
    } else {
      return text.length > 70 ? Math.ceil(text.length/67) : Math.ceil(text.length/70);
    }
  }



  const characterCap = () => {
    return isGSM ? 1530 : 670;
  }

  const smsUnits = unitCalculator();

  const cap = characterCap();

  

  

  return (
    <div>
      <input type="checkbox" onChange={handleCheck}></input><b>Replace Unicode Characters</b>
      <div style={{
        border: inputting ? '5px solid rgb(122,189,242,0.2)' : '5px solid rgb(122,189,242,0)',
        'border-radius': '10px',
        transition: 'border 0.3s ease',
    }}>
      <textarea value={text} 
      placeholder = 'Enter your message here'
    
      style={{
      border: inputting ? '1px solid #7ABDF2' : '1px solid #D2D7DD',
      'font-family': '"Open Sans", Arial, sans-serif',
      'letter-spacing': '0.5px',
      position: 'relative',
      width: '100%',
      'min-height': '100px',
      resize: 'none',
      color: '#000000',
      'border-radius': '5px',
      padding: '10px',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',

    }}onChange={handleTextChange} maxLength={cap} onFocus = {() => setInputting(true)}
    onBlur= {() => setInputting(false)}/>
    </div>

    <p><b>Characters</b>: {text.length} / {cap}</p>
    <p><b>SMS Units</b>: {smsUnits}</p>
    </div>
    
    
  );
};

export default UnitCounter;
