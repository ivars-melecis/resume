import React from 'react';
import PropTypes from 'prop-types';

const SocialMediaItem = ({ item }) => {
  const { link, icon, title, newTab, classes = null } = item;

  const linkClasses = classes ? `sm-link ${classes}` : 'sm-link';

  return (
    <a className={linkClasses} href={link} target={newTab ? '_blank' : null} rel={newTab ? 'noopener' : null} title={title}>
      <svg className='sm-icon'>
        <use xlinkHref={icon}></use>
      </svg>
    </a>
  );
};

SocialMediaItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default SocialMediaItem;
