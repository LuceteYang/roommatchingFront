import React, { Component } from 'react';

var App = React.createClass({

    render : function(){
      return (
        <div>
               {this.props.children}
           </div>
      );
    }
});



export default App;
