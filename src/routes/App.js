import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import SingIn from '../pages/SingIn';
import MyProducts from '../pages/MyProducts';



function App () {
    return(
      <BrowserRouter>
       <Switch>
         <Route  path="/iniciosesion" component={SingIn} />
        <Layout>
         <Route exact path="/" component={Home} />
         <Route  path="/misproductos" component={MyProducts} />
        </Layout>
       </Switch>
      </BrowserRouter>
    )
}


export default App;