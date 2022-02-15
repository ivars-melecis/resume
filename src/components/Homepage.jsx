import React, { Fragment, useRef, useContext } from 'react';

import Landing from './Landing';
import MenuBar from './MenuBar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import DeepFooter from './DeepFooter';
import SvgSprite from './SVGSprite';
import Sticky from '../components/Sticky';
import FooterStrip from './FooterStrip';
import ScrollTop from './ScrollTop';
import { HomeContext } from '../contexts/HomeContext';
import Helmet from 'react-helmet';

const Homepage = () => {
  const { data } = useContext(HomeContext);
  const stickyRef = useRef(null);
  const scrollTarget = `.${data.sections[0]}-section`;

  return (
    <Fragment>
      <Helmet>
        <link rel='canonical' href='https://melecis.co.uk/' />
        <meta name='robots' content='index, follow' />
        <title>Ivars Melecis - {data.profession} :: Personal Portfolio"</title>
      </Helmet>
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
      <DeepFooter />
      <FooterStrip />
      <ScrollTop pixels={800} scrollTarget={scrollTarget} />
    </Fragment>
  );
};

export default Homepage;
