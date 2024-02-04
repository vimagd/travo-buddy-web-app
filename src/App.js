import React from 'react';
import './App.scss';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';

function App() {
  return (
    <div className='main-section'>
      <One/>
      <Two/>
      <Three/>
      <Four/>
    </div>       
  );
}

export default App;
