import React, { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';

const Homepage = () => {
  const { data, dispatch } = useContext(HomeContext);
  return (
    <div>
      <span>{data.message}</span>
      <button onClick={() => dispatch({ type: 'ADD_MESSAGE', data: 'Hello' })}>Add Message</button>
    </div>
  );
};

export default Homepage;
