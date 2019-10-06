import React, { useEffect, useState } from 'react';

import scrollToElement from 'scroll-to-element';
import PropTypes from 'prop-types';

const ScrollTop = ({ pixels = 800, scrollTarget }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      if (window.pageYOffset >= pixels) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    handleVisibility();
    window.addEventListener('scroll', handleVisibility);
    return () => window.removeEventListener('scroll', handleVisibility);
  }, [pixels]);

  const handleClick = () => {
    scrollToElement(scrollTarget, {
      offset: 0,
      duration: 500,
      ease: 'linear'
    });
  };

  return (
    <button className={isVisible ? 'scroll-top visible desktop-only' : 'scroll-top desktop-only'} onClick={handleClick}>
      <span className='chevron chevron-top'>&nbsp;</span>
      <p>top</p>
    </button>
  );
};

ScrollTop.propTypes = {
  pixels: PropTypes.number,
  scrollTarget: PropTypes.string.isRequired
};

export default ScrollTop;
