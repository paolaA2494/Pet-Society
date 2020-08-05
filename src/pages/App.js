import React from 'react';
import Header from '../components/Header';
import Price from  '../components/Price';
import Prices from '../components/Prices';
import Footer from '../components/Footer';

import { data } from '../utils/mocks/data';

function App() {
  return (
    <div className="App">
      <Header 
       companyName="Pet Society"
       navBar={[
        {
          name: "Facebook",
          url: "http://facebook.com"
        },

        {
         name: "Intagram",
         url: "http://instagram.com"
        },

       {
         name: "Twitter",
         url: "http://twitter.com"
       },

       {
         name: "Linkedin",
         url: "http://linkedin.com"
       }

       ]}

       button = "Registrate"
         />
      <Price />
      <Prices datos= { data } />
      <Footer /> 
    </div>
  );
}

export default App;
