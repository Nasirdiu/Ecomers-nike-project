import React from 'react';
import Hero from './components/Hero';
import Sales from './components/Sales';
import {heroapi,popularsales,toprateslaes} from './data/data.js'
const App = () => {
  return (
    <div>
      <main>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists />

        <Sales endpoint={toprateslaes} />

      </main>
    </div>
  );
};

export default App;