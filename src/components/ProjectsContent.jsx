import React, { useState, useEffect } from 'react';

const ProjectsContent = ({ activeIndex, items: data }) => {
  const [items, setItems] = useState(data);

  useEffect(() => {
    const newItems = items.map(item => {
      item.isActive = false;
      if (items.indexOf(item) === activeIndex) item.isActive = true;
      return item;
    });
    setItems(newItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <article className='ps-content'>
      {items.map((item, index) => (
        <div key={index} className={item.isActive ? 'psc-item psc-item-active' : 'psc-item'}>
          <h3>{item.siteName}</h3>
          <div className='ps-intro'>
            {item.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <ul className='ps-highlights desktop-only'>
            {item.highlights.map((item, index) => {
              return (
                <li key={index}>
                  <span className='psh-bullet'>{item.bullet}</span>
                  {item.description && <span className='psh-descr'>{item.description}</span>}
                </li>
              );
            })}
          </ul>
          <a className='psh-link' href={item.link} target='_blank' rel='noopener noreferrer nofollow'>
            Visit Site
          </a>
        </div>
      ))}
    </article>
  );
};

export default ProjectsContent;
