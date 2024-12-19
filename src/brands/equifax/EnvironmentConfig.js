import React from 'react';
import Interpolate from '@docusaurus/Interpolate';

const EnvironmentConfig = ({ type }) => {
  const values = {
    name: 'Equifax Engage', // your brand's name
    email2sms: 'sms.equifaxengage.com', // your brand's email2sms domain
    indefiniteArticle: "an", // the indefinite article that would precede your company name. Eg "*a* Tesla product" or "*an* Amazon product"
  };


  return (
    <Interpolate>
      {values[type]}
    </Interpolate>
  );
}

export default EnvironmentConfig;