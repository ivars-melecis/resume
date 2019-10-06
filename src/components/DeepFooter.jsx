import React, { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';
import FlaticonRef from './FlaticonRef';
import Logo from './Logo';

const DeepFooter = () => {
  const { data } = useContext(HomeContext);
  const { siteName, contacts, socialLinks, cvFile } = data;
  const cvString = process.env.PUBLIC_URL + '/' + cvFile;

  const renderContactItem = (item, key) => {
    const typeString = item.type === 'phone' ? 'tel:' : 'mailto:';
    return (
      <li key={key}>
        <a href={`${typeString + item.content}`}>{item.content}</a>
      </li>
    );
  };

  const renderSocialLink = (item, key) => {
    return (
      <li key={key}>
        <a href={item.link} target={item.newTab ? '_blank' : null} rel={item.newTab ? 'noopener noreferrer' : null}>
          {item.title}
        </a>
      </li>
    );
  };

  return (
    <section className='deep-footer'>
      <h2 className='sr-only'>Contact Information</h2>
      <div className='home-content-wrap'>
        <div className='df-section df-left'>
          <Logo />
          <p className='df-title'>{siteName}</p>
        </div>
        <div className='df-section'>
          <h3 className='secondary-font'>Contact me:</h3>
          <ul>{contacts.map((item, index) => renderContactItem(item, index))}</ul>
        </div>
        <div className='df-section desktop-only'>
          <h3 className='secondary-font'>Find me on:</h3>
          <ul>{socialLinks.map((item, index) => renderSocialLink(item, index))}</ul>
        </div>
        <div className='df-section'>
          <h3 className='secondary-font'>Explore my CV:</h3>
          <ul>
            <li>
              <a href={cvString} target='_blank' rel='noopener noreferrer'>
                <span>View</span>
              </a>
            </li>
            <li>
              <a href={cvString} download>
                <span>Download</span>
              </a>
            </li>
          </ul>
        </div>
        <FlaticonRef />
      </div>
    </section>
  );
};

export default DeepFooter;
