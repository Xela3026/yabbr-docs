import React from 'react';
import '../css/custom.css';
import ThreeDBackground from './three-d-background.js';

const homepage = () => {
  return (
    
    

    
    <div class="outer-container" id="outerContainer">
      
        
        <div class="homepage-container">
            <span class="subtext">Welcome to the</span>
            <img className="logo-img" src="/img/yabbr.svg" alt="Yabbr Logo" width="400"/>
            <span class="subtext">Documentation</span>
            <a href="../docs/intro"><button class="btn-primary">Enter</button></a>
            
        </div>
        <ThreeDBackground class="background"/>
        
        
      
    </div>
  );
};

export default homepage;

