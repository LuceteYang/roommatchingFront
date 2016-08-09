import React, { Component } from 'react';

import Header from './Components/Header';
import NavBar from './Components/NavBar';

import logo from './logo.svg';
import './App.css';

class Main extends Component {

  render() {
    return (
      
      <div>
          <div className="container">
            <Header/>
             <NavBar/>
               {this.props.children}
           </div> 
      </div>
    );
  }
}



export default Main;
