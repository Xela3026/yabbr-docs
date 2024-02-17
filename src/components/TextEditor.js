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
        border: inputting ? '5px solid rgb(0,0,255,0.2)' : '5px solid rgb(0,0,255,0)',
        'border-radius': '10px'
    }}>
    <textarea

        placeholder = 'Hello {{client_name}}, would you like to discuss {{case_number}}?'
    
        style={{
        border: inputting ? '1px solid blue' : '1px solid #D2D7DD',
        'font-family': '"Open Sans", Arial, sans-serif',
        'letter-spacing': '0.5px',
        position: 'relative',
        width: '100%',
        'min-height': '100px',
        resize: 'none',
        color: '#000000',
        'border-radius': '5px',
        transition: 'border 0.5s ease',
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
