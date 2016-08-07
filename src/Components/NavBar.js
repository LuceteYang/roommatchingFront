import React, { Component } from 'react';
import { Link } from 'react-router';

var NavBar = React.createClass({
    render : function(){

        return (

            <div data-role="navbar">
               <ul>
                  <li><Link to="home">Home</Link></li>
                  <li><Link to="pagetwo">Page Two</Link></li>
                  <li><Link to="search">Search</Link></li>
              </ul>
           </div>
        );
    }
});

export default NavBar;
