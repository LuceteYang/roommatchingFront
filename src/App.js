import React, { Component } from 'react';

import Header from './Components/Header';
import MainButton from './Components/MainButton';

import logo from './logo.svg';
import './App.css';


var mainImageStyle = {
       backgroundImage: 'url(' + './src/public/mainImage.jpg' + ')',
       textAlign : 'center',
       width : '100%',
       height : '500px',
       backgroundSize:'cover',
       backgroundPosition: 'center center',
       paddingTop : '100px',
       paddingBottom : '100px'
    }

var App = React.createClass({
    
    render : function(){
      return (
          <div>
              <div className="container">
              <Header/>
              </div > 
              <div style = {mainImageStyle}>
                  
                      <MainButton/>
                  
              </div>
           </div>
      );
    }
});



export default App;
