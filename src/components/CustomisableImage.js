import React, { useState } from 'react';

const CustomisableImage = ({ src, alt, width }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      style={{
        border: '2px solid #1582d8',
        'border-radius': '5px',
        boxShadow: hovered ? '0 4px 8px rgba(0, 0, 0, 0.5)' : 'none',
        transition: 'box-shadow 0.3s ease',
        // border: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default CustomisableImage;

/**

import React, { useState } from 'react';

const CustomisableImage = ({ src, alt, width }) => {
  const [enlarged, setEnlarged] = useState(false);

  const handleClick = () => {
    setEnlarged(!enlarged);
  };

  const enlargedWidth = width * 3;

  const imageStyle = {
    boxShadow: enlarged ? '0 4px 8px rgba(0, 0, 0, 0.5)' : 'none',
    transition: 'box-shadow 0.3s ease',
    border: '2px solid #1582d8',
    'border-radius': '5px',
    width: enlarged ? enlargedWidth : width, // Toggle between width and enlargedWidth
  };

  return (
    <img
      src={src}
      alt={alt}
      style={imageStyle}
      onClick={handleClick} // Call handleClick function when clicked
    />
  );
};

export default CustomisableImage;**/



