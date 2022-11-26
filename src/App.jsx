import React from 'react';
import { FlexContent } from './components';
import Hero from './components/Hero';
import Sales from './components/Sales';
import {heroapi,popularsales,toprateslaes,highlight, sneaker,} from './data/data.js'
const App = () => {
  return (
    <div>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />

      </main>
    </div>
  );
};

export default App;