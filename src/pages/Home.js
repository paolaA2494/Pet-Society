import React from 'react';
import Price from  '../components/Price';
import Prices from '../components/Prices';
import { data } from '../utils/mocks/data';

function Home() {
  return (
    <div className="App">

      <Price />
      <Prices datos= { data } />
 
    </div>
  );
}

export default Home;
