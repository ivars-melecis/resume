import React from 'react';
import PropTypes from 'prop-types';

const SiteName = ({ siteName = 'My Site' }) => {
  return <h2 className='main-title secondary-font desktop-only'>{siteName}</h2>;
};

SiteName.propTypes = {
  siteName: PropTypes.string
};

export default SiteName;
