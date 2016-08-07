import React, { Component } from 'react';

var Header = React.createClass({
    render : function(){
        return (
        <div data-role="header" className="row">
              <div className="col-xs-4">
                  <a href="#" className="ui-btn ui-corner-all ui-shadow ui-icon-home ui-btn-icon-left">Home</a>
              </div>
              <div className="col-xs-4">
                  
              </div>
              
              <div className="col-xs-4">
                  <div data-role="collapsible" data-collapsed="true">
                      <h1>Click me - I'm collapsible!</h1>
                      <p>I'm now expanded by default.</p>
                  </div>
              </div>
              
          </div>
        );
    }
});

export default Header;
