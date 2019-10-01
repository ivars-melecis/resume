import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const HorizontalMenu = ({ sections = [], handleClick }) => {
  return (
    <nav className='horizontal-menu'>
      <ul>
        {sections.map(section => {
          return (
            <li key={uuid()}>
              <button onClick={handleClick} data-target={section}>
                <span>{section}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

HorizontalMenu.propTypes = {
  sections: PropTypes.array,
  handleClick: PropTypes.func.isRequired
};

export default HorizontalMenu;
