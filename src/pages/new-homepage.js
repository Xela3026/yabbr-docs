import React from 'react';
import '../css/custom.css';
import ThreeDBackground from './three-d-background.js';

const newHomepage = () => {
  return (
    
    

    
    <div class="outer-container" id="outerContainer" style={{'overflowX': 'hidden', 'overflowY': 'hidden'}}>
      
      <div className="homepage">
      <div className="homepage-container">
          <span className="subtext">Welcome to the</span>
          <img className="logo-img" src="/img/yabbr.svg" alt="Yabbr Logo" width="400"/>
          <span className="subtext">Documentation</span>
          <a href="../docs/category/members"><button className="btn-primary">Enter</button></a>
              
      </div>
      </div>
      
      
          
       
        
        
      
    </div>
  );
};

export default newHomepage;

