import React from 'react';
import Price from  '../Components/Price';
import Prices from '../Components/Prices';
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
