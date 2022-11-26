import React from 'react';
import { Cart, FlexContent, Footer, Navbar, Stories } from './components';
import Hero from './components/Hero';
import Sales from './components/Sales';
import {heroapi,popularsales,toprateslaes,highlight, sneaker,story,footerAPI } from './data/data.js'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Cart/>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        
      </main>
      <Footer footerAPI={footerAPI}/>
    </div>
  );
};

export default App;