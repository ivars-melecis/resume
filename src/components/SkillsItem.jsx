import React from 'react';

const SkillsItem = ({ skill, index, handleClick }) => {
  const { title, descr, isExpanded } = skill;

  const renderIcon = isExpanded => {
    if (isExpanded === true) {
      return (
        <svg className='skill-icon'>
          <use xlinkHref='#minus'></use>
        </svg>
      );
    }

    return (
      <svg className='skill-icon'>
        <use xlinkHref='#plus'></use>
      </svg>
    );
  };

  return (
    <li className={`${isExpanded ? 'skills-item active' : 'skills-item'}`}>
      <button onClick={() => handleClick(index)}>
        {renderIcon(isExpanded)}
        <span>{title}</span>
      </button>
      {isExpanded && <p>{descr}</p>}
    </li>
  );
};

export default SkillsItem;
