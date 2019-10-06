import React, { useContext } from 'react';
import SiteName from './SiteName';
import HorizontalMenu from './HorizontalMenu';
import SocialMediaBar from './SocialMediaBar';
import { HomeContext } from '../contexts/HomeContext';
import scrollToElement from 'scroll-to-element';

const MenuBar = () => {
  const { data } = useContext(HomeContext);
  const { siteName, socialLinks, sections, profession = null } = data;

  const handleClick = e => {
    const target = e.currentTarget.dataset.target;
    scrollToElement('.' + target + '-section', {
      offset: 0,
      duration: 500,
      ease: 'linear'
    });
  };

  return (
    <section className='menu-bar'>
      <SiteName siteName={siteName} profession={profession} />
      <HorizontalMenu sections={sections} handleClick={handleClick} />
      <SocialMediaBar socialLinks={socialLinks} extraClass='left-sm desktop-only' />
      <SocialMediaBar socialLinks={socialLinks} extraClass='right-sm' />
    </section>
  );
};

export default MenuBar;
