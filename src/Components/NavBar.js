import React, { Component } from 'react';

var NavBar = React.createClass({
    render : function(){

        return (

            <div data-role="navbar">
               <ul>
                  <li><a href="#anylink">Home</a></li>
                  <li><a href="#anylink">Page Two</a></li>
                  <li><a href="#anylink">Search</a></li>
              </ul>
           </div>
        );
    }
});

export default NavBar;
