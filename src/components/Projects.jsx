import React, { useContext } from 'react';
import ProjectsSlider from './ProjectsSlider';
import { HomeContext } from '../contexts/HomeContext';

const Projects = () => {
  const { data } = useContext(HomeContext);
  const { title, items, content } = data.projects;

  return (
    <section className='home-content-section projects-section'>
      <div className='home-content-wrap'>
        <h2 className='block-heading secondary-font'>
          <span>&lt; {title} /&gt;</span>
        </h2>
        <div className='projects-content'>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <ProjectsSlider slides={items} />
        <p className='ps-info-text'>
          * Sites are built using either custom company CMS or custom Wordpress
          theme.
        </p>
      </div>
    </section>
  );
};

export default Projects;
