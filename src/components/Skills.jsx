import React, { useContext, useState } from 'react';
import SkillsItem from './SkillsItem';
import { HomeContext } from '../contexts/HomeContext';

const Skills = () => {
  const { data } = useContext(HomeContext);
  const [items, setItems] = useState(data.skills);
  const { title, content, data: skills } = data.skills;

  const handleClick = expandedId => {
    const newSkills = items.data.map((item, index) => {
      if (index === expandedId) {
        item.isExpanded = !item.isExpanded;
      } else {
        item.isExpanded = false;
      }
      return item;
    });

    const result = { ...items, data: newSkills };
    setItems(result);
  };

  return (
    <section className='home-content-section skills-section'>
      <div className='home-content-wrap'>
        <h2 className='block-heading secondary-font'>
          <span>&lt; {title} /&gt;</span>
        </h2>
        <div className='skills-intro'>
          {content.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
        <ul className='skills-list'>
          {skills.map((skill, index) => (
            <SkillsItem key={index} skill={skill} handleClick={handleClick} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
