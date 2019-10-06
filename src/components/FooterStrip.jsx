import React, { useContext } from 'react';

import { HomeContext } from '../contexts/HomeContext';

const FooterStrip = () => {
  const { data } = useContext(HomeContext);
  return (
    <footer className='main-footer'>
      <div className='footer-content'>
        <p>Crafted with &#x2764; and React</p>
        <p>
          &copy; {new Date().getFullYear()} {data.siteName}
        </p>
      </div>
    </footer>
  );
};

export default FooterStrip;
