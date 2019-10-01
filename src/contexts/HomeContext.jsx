import React, { createContext, useReducer, useEffect } from 'react';
import { homeReducer } from '../reducers/homeReducer';

export const HomeContext = createContext();

const HomeContextProvider = props => {
  const [data, dispatch] = useReducer(homeReducer, {
    msg: '',
    sectionNav: ['One', 'Two', 'Three', 'Four']
    
  });

  useEffect(() => {
    dispatch({ type: 'ADD_MESSAGE', msg: 'HI' });
  }, []);

  return <HomeContext.Provider value={{ data, dispatch }}>{props.children}</HomeContext.Provider>;
};

export default HomeContextProvider;
