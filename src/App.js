import React from 'react';
import Hompage from './components/Homepage';
import HomeContextProvider from './contexts/HomeContext';

function App() {
  return (
    <HomeContextProvider>
      <Hompage />
    </HomeContextProvider>
  );
}

export default App;
