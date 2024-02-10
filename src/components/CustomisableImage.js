import React, { useState } from 'react';

const CustomisableImage = ({ src, alt, width }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      style={{
        boxShadow: hovered ? '0 4px 8px rgba(0, 0, 0, 0.5)' : 'none',
        transition: 'box-shadow 0.3s ease',
        border: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default CustomisableImage;
