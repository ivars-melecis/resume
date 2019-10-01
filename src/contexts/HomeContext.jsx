import React, { createContext, useReducer, useEffect } from 'react';
import { homeReducer } from '../reducers/homeReducer';

export const HomeContext = createContext();

const NavContextProvider = props => {
  const [data, dispatch] = useReducer(homeReducer, []);

  useEffect(() => {
    const data = { message: 'HI' };
    dispatch({ type: 'ADD_MESSAGE', data });
  }, []);

  return <HomeContext.Provider value={{ data, dispatch }}>{props.children}</HomeContext.Provider>;
};

export default NavContextProvider;
