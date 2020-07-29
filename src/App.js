import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
    <div>
        <table >
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Correo</th>
              <th>Cedula</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>paola hernandez</td>
              <td>cmtecnica09@elpoli.edu.co</td>
              <td>1033300000000</td>
              <td>3043953342</td> 
            </tr>
            <tr>
              <td>1,002</td>
              <td>amet</td>
              <td>consectetur</td>
              <td>adipiscing</td>
              <td>elit</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>Integer</td>
              <td>nec</td>
              <td>odio</td>
              <td>Praesent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
