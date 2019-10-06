import React from 'react';
import scrollToElement from 'scroll-to-element';
import PropTypes from 'prop-types';

const ExploreMore = ({ scrollTarget }) => {
  const handleClick = () => {
    scrollToElement(scrollTarget, {
      offset: 0,
      duration: 500,
      ease: 'linear'
    });
  };
  return (
    <button className='explore-more desktop-only' onClick={handleClick}>
      <p>Explore More</p>
      <div className='em-anim'></div>
      <span className='chevron chevron-bottom'>&nbsp;</span>
    </button>
  );
};

ExploreMore.propTypes = {
  scrollTarget: PropTypes.string.isRequired
};

export default ExploreMore;
