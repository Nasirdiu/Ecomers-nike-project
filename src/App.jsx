import React from 'react';
import Hero from './components/Hero';
import Sales from './components/Sales';
import {heroapi,popularsales,toprateslaes} from './data/data.js'
const App = () => {
  return (
    <div>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists />

        <Sales endpoint={toprateslaes} />

      </main>
    </div>
  );
};

export default App;