import React, { useContext } from 'react';

// Components
import SiteName from './SiteName';
import HorizontalMenu from './HorizontalMenu';
import SocialMediaBar from './SocialMediaBar';
import ResumeBtn from './ResumeBtn';

// Context
import { HomeContext } from '../contexts/HomeContext';

// Functionality
import scrollToElement from 'scroll-to-element';

const MenuBar = () => {
  const { data } = useContext(HomeContext);
  const { siteName, socialLinks, sections } = data;

  const handleClick = e => {
    const target = e.currentTarget.dataset.target;
    console.log(target);
    scrollToElement('#' + target, {
      offset: 0,
      duration: 500,
      ease: 'linear'
    });
  };

  return (
    <section className='menu-bar'>
      <SiteName siteName={siteName} />
      <HorizontalMenu sections={sections} handleClick={handleClick} />
      <SocialMediaBar socialLinks={socialLinks} extraClass='left-sm desktop-only' />
      <SocialMediaBar socialLinks={socialLinks} extraClass='right-sm' />
      {/* <ResumeBtn /> */}
    </section>
  );
};

export default MenuBar;
