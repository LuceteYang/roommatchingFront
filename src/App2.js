import React, { Component } from 'react';

import Header from './Components/Header';
import MainButton from './Components/MainButton';
import MainSection from './Components/MainSection';
import FacebookButton from './Components/FacebookButton';

// //
// import Counter from './Components/Counter';
// import Buttons from './Components/Buttons';
// import Option from './Components/Option';
//////

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

var containerCenter = {
    textAlign : 'center'
}

var App = React.createClass({

    render : function(){
      return (
        <div>
          
               <Header/>
              <div style = {mainImageStyle}>
                      <MainButton/>
              </div>
              <div className="container" style = {containerCenter}>
                    <FacebookButton/>
                  <MainSection/>
                  <MainSection/>
                  <MainSection/>
                  <MainSection/>
                
              </div >
           
       </div>
      );
    }
});

// <div className="container">
//               <Header/>
//               </div >

export default App;
