import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

// Components
import SocialMediaItem from './SocialMediaItem';

const SocialMediaBar = ({ socialLinks, extraClass }) => {
  const barClasses = extraClass ? `social-media-block ${extraClass}` : 'social-media-block';

  return (
    <article className={barClasses}>
      <h2 className='sr-only'>Social Media Links</h2>
      {socialLinks.map(link => (
        <SocialMediaItem key={uuid()} item={link} />
      ))}
    </article>
  );
};

SocialMediaBar.propTypes = {
  socialLinks: PropTypes.array.isRequired,
  extraClass: PropTypes.string
};

export default SocialMediaBar;
