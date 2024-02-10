import React, { useState } from 'react';
import Layout from '@theme/Layout';

const CustomizableImage = ({ alt, width, src }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      style={{
        boxShadow: hovered ? '0 40px 80px rgba(0, 0, 0, 1)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
      <CustomizableImage
        src="/img/chat-filter.png"
        alt="Customizable Image"
        width="200"
      />
    </Layout>
  );
}
