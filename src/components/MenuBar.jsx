import React from 'react';

// Components
import SiteName from './SiteName';
import HorizontalMenu from './HorizontalMenu';
import SocialMediaBar from './SocialMediaBar';
import ResumeBtn from './ResumeBtn';

const MenuBar = () => {
  return (
    <section className='menu-bar'>
      <SiteName />
      <HorizontalMenu />
      <SocialMediaBar />
      <ResumeBtn />
    </section>
  );
};

export default MenuBar;
