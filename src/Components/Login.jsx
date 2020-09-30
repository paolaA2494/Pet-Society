import React, { Component } from 'react';
import imagen1 from '../images/perrosgatos.jpg';
import '../styless/Login.css';
import { Link } from 'react-router-dom';

class Login extends Component {

    render() { 
        return (  
        <div className="container text-center mt-5">
            <form className="form-signin">
          <img className="mb-4 rounded" src={imagen1} alt="" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal text-primary">PetSociety</h1>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control mt-3 col-5" placeholder="Email address" required="" autofocus=""/>
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control mt-3 col-5" placeholder="Password" required=""/>
          <div className="checkbox mb-3 mt-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <Link to="/misproductos" className="text-decoration-none">
          <button className="btn btn-lg btn-primary btn-flex" type="submit">Sign in</button>
          </Link>
          <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
        </form>
        
        
        </div>


        );
    }
}
 
export default Login;