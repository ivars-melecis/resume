import React, { useContext } from 'react';

// Components
import VerticalMenu from './VerticalMenu';
import Logo from './Logo';

// Context
import { HomeContext } from '../contexts/HomeContext';

// Functionality
import scrollToElement from 'scroll-to-element';

const Landing = () => {
  const { data } = useContext(HomeContext);

  const handleClick = e => {
    const target = e.currentTarget.dataset.target;
    scrollToElement('#' + target, {
      offset: 0,
      duration: 500,
      ease: 'linear'
    });
  };

  return (
    <section className='landing'>
      <h1 className='sr-only'>Ivars Melecis</h1>
      <VerticalMenu sections={data.sections} activeClass='vmi-active' interval={900} handleClick={handleClick} />
      <Logo />
    </section>
  );
};

export default Landing;
