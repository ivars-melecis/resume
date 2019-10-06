import React, { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';

const CurriculumVitae = () => {
  const { data } = useContext(HomeContext);
  const cvString = process.env.PUBLIC_URL + '/' + data.cvFile;

  return (
    <article className='cv-section desktop-only'>
      <h2 className='secondary-font' id="type">Curriculum Vitae</h2>
      <ul className='cv-list'>
        <li>
          <a href={cvString} target='_blank' rel='noopener noreferrer'>
            <svg className='cv-icon'>
              <use xlinkHref='#view'></use>
            </svg>
            <span>View</span>
          </a>
        </li>
        <li>
          <a href={cvString} download>
            <svg className='cv-icon'>
              <use xlinkHref='#download'></use>
            </svg>
            <span>Download</span>
          </a>
        </li>
      </ul>
    </article>
  );
};

export default CurriculumVitae;
