import React, { useContext, Fragment } from 'react';
import { HomeContext } from '../contexts/HomeContext';

// Components
import Landing from './Landing';
import MenuBar from './MenuBar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Homepage = () => {
  const { data, dispatch } = useContext(HomeContext);
  return (
    <Fragment>
      <Landing />
      <MenuBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div>
        <ul>
          {data.sectionNav.map(section => (
            <li>{section}</li>
          ))}
        </ul>
        <span>{data.message}</span>
        <button onClick={() => dispatch({ type: 'ADD_MESSAGE', msg: 'Hello' })}>Add Message</button>
        <button onClick={() => dispatch({ type: 'REMOVE_ALL_DATA' })}>Clear Data</button>
      </div>
    </Fragment>
  );
};

export default Homepage;
