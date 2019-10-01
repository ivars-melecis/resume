import React, { createContext, useReducer, useEffect } from 'react';
import { homeReducer } from '../reducers/homeReducer';

export const HomeContext = createContext();

const HomeContextProvider = props => {
  const [data, dispatch] = useReducer(homeReducer, {
    siteName: 'Ivars Melecis',
    sections: ['home', 'about', 'skills', 'projects', 'contact'],
    socialLinks: [
      {
        link: '//www.linkedin.com/in/ivars-melecis',
        icon: '#linkedin-logo',
        title: 'LinkedIn',
        newTab: true
      },
      {
        link: '//codepen.io/Melecis',
        icon: '#codepen-logo',
        title: 'Codepen',
        classes: 'codepen-link',
        newTab: true
      },
      {
        link: '//github.com/ivars-melecis',
        icon: '#github-logo',
        title: 'Github',
        classes: 'github-link'
      }
    ],
    about: {
      title: 'About',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, molestiae! Quam fuga reiciendis, illum eos veritatis assumenda rerum iure error laborum voluptatem cumque ipsam, officiis molestias praesentium dicta impedit id!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sint at cum architecto magni mollitia odit necessitatibus et itaque soluta facilis repellat aut ratione ipsum velit consectetur, sapiente voluptate facere!'
      ],
      image: {
        alt: 'Ivars Melecis',
        loc: '/im.jpg'
      }
    }
  });

  useEffect(() => {
    dispatch({ type: 'ADD_MESSAGE', msg: 'HI' });
  }, []);

  return <HomeContext.Provider value={{ data, dispatch }}>{props.children}</HomeContext.Provider>;
};

export default HomeContextProvider;
