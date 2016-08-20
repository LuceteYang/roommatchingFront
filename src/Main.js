import React, { Component } from 'react';

import Header from './Components/Header';
import Tab from './Components/Tab';

import logo from './logo.svg';
import './App.css';

class Main extends Component {

  render() {
    return (
      
      <div>
         
            <Header/>
             <Tab/>
               {this.props.children}
           
      </div>
    );
  }
}



export default Main;
