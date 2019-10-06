import React from 'react';
import PropTypes from 'prop-types';

const SiteName = ({ siteName = 'My Site', profession }) => {
  return (
    <h2 className='main-title secondary-font desktop-only'>
      <span>{siteName} - </span>
      {profession && <span className='pt'>{profession}</span>}
    </h2>
  );
};

SiteName.propTypes = {
  siteName: PropTypes.string
};

export default SiteName;
