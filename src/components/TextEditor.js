import React, { useState } from 'react';

const TextEditor = () => {
  const [inputting, setInputting] = useState('');
  const adjustHeight = (event) => {
    const element = event.target;
    element.style.height = "1px";
    element.style.height = (25 + element.scrollHeight) + "px";
    if (element.value  === "") {
        element.style.height = "100px";
    }
  }
  


  return (
    <div 
    style={{
        border: inputting ? '5px solid rgb(122,189,242,0.2)' : '5px solid rgb(122,189,242,0)',
        borderRadius: '10px',
        transition: 'border 0.3s ease'
    }}>
    <textarea

        placeholder = 'Hello {{client_name}}, would you like to discuss {{case_number}}?'
    
        style={{
        border: inputting ? '1px solid #7ABDF2' : '1px solid #D2D7DD',
        'font-family': '"Open Sans", Arial, sans-serif',
        'letter-spacing': '0.5px',
        position: 'relative',
        width: '100%',
        'min-height': '100px',
        resize: 'none',
        color: '#000000',
        borderRadius: '5px',
        transition: 'border 0.3s ease',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        padding: '10px',

      }}
    onFocus = {() => setInputting(true)}
    onBlur= {() => setInputting(false)}
    onChange={adjustHeight}
    />
    </div>
    
  );
};

export default TextEditor;
