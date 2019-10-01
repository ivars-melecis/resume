import React, { useEffect, useRef } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const VerticalMenu = ({ sections, interval = 1000, activeClass = 'active', handleClick }) => {
  const menuList = useRef(null);

  useEffect(() => {
    const items = menuList.current.children;
    let currItem = 0;

    const run = setInterval(() => {
      items[currItem].classList.remove(activeClass);
      currItem = (currItem + 1) % items.length;
      items[currItem].classList.add(activeClass);
    }, interval);

    return () => {
      clearInterval(run);
    };
  }, [activeClass, interval]);

  return (
    <nav className='vertical-menu desktop-only'>
      <ul ref={menuList}>
        {sections.map((section, index) => {
          return (
            <li key={uuid()} className={index === 0 ? 'vmi-active' : null}>
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

VerticalMenu.propTypes = {
  sections: PropTypes.array.isRequired,
  interval: PropTypes.number,
  activeClass: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default VerticalMenu;
