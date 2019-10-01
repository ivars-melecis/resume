import React, { Fragment, useRef } from 'react';

// Components
import Landing from './Landing';
import MenuBar from './MenuBar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import SvgSprite from './SVGSprite';
import Sticky from '../components/Sticky';

const Homepage = () => {
  const stickyRef = useRef(null);

  return (
    <Fragment>
      <SvgSprite />
      <Landing />
      <div className='menu-bar-wrap' ref={stickyRef}>
        <Sticky item={stickyRef}>
          <MenuBar />
        </Sticky>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default Homepage;
