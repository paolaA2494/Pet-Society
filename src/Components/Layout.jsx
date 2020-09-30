import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Layout = (props) => {
    return(
        <>
        <Header 
         companyName="PetSociety"
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
    
         button = "Iniciar Sesión"
        
        />
          {props.children}
        <Footer />

        </>

    )
}


export default Layout;