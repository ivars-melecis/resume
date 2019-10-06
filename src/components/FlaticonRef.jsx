import React, { useState } from 'react';

const FlaticonRef = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <article className='flaticon-ref'>
      <h2 className='sr-only'>FlatIcon references</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        <svg className='expand-icon'>
          <use xlinkHref={isVisible ? '#minus' : '#plus'}></use>
        </svg>
        <span>Website Icon information - click to expand.</span>
      </button>
      {isVisible && (
        <div className='flaticon-modal'>
          <p>Icons made by:</p>
          <ul>
            <li>
              <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
                Freepik
              </a>
            </li>
            <li>
              <a href='https://www.flaticon.com/authors/pixel-perfect' title='Pixel perfect'>
                Pixel perfect
              </a>
            </li>
            <li>
              <a href='https://www.flaticon.com/authors/dave-gandy' title='Dave Gandy'>
                Dave Gandy
              </a>
            </li>
          </ul>
          <p>
            from{' '}
            <a href='https://www.flaticon.com/' title='Flaticon'>
              www.flaticon.com
            </a>
          </p>
        </div>
      )}
    </article>
  );
};

export default FlaticonRef;
