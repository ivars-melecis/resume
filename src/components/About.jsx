import React, { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';
import uuid from 'uuid';

const About = () => {
  const { data } = useContext(HomeContext);
  const { title, content, image } = data.about;

  return (
    <section className='home-content-section about-section'>
      <div className='home-content-wrap'>
        <h2 className='block-heading secondary-font'>
          <span>&lt; {title} /&gt;</span>
        </h2>

        <img className='about-img' src={image.loc} alt={image.alt}></img>
        <div className='about-text'>
          {content.map(paragraph => (
            <p key={uuid()}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
