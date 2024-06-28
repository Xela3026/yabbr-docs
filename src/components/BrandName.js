import React from 'react';
import Interpolate from '@docusaurus/Interpolate';

const BrandName = ({ type }) => {
  const values = {
    name: 'Yabbr', // your brand's name
    email2sms: 'sms.yabbr.io', // your brand's email2sms domain
  };


  return (
    <Interpolate>
      {values[type]}
    </Interpolate>
  );
}

export default BrandName;