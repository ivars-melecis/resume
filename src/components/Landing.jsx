import React, { useContext, useEffect } from 'react';
import VerticalMenu from './VerticalMenu';
import Logo from './Logo';
import CurriculumVitae from './CurriculumVitae';
import ExploreMore from './ExploreMore';
import { HomeContext } from '../contexts/HomeContext';
import scrollToElement from 'scroll-to-element';
import TypeEffect from '../utils/TypeEffect';

const Landing = () => {
  const { data } = useContext(HomeContext);
  const scrollTarget = `.${data.sections[1]}-section`;

  useEffect(() => {
    new TypeEffect({
      target: '#type',
      text: 'Curriculum Vitae'
    });
  }, []);

  const handleClick = e => {
    const target = e.currentTarget.dataset.target;
    scrollToElement('.' + target + '-section', {
      offset: 0,
      duration: 500,
      ease: 'linear'
    });
  };

  return (
    <header className='landing home-section'>
      <h1 className='sr-only'>Portfolio</h1>
      <VerticalMenu sections={data.sections} activeClass='vmi-active' interval={900} handleClick={handleClick} />
      <CurriculumVitae />
      <Logo />
      <div className='responsive-header-title responsive-only'>
        <p>{data.siteName}</p>
        <p>{data.profession}</p>
      </div>
      <ExploreMore scrollTarget={scrollTarget} />
    </header>
  );
};

export default Landing;
