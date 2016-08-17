import React from 'react';

import Menu from './Menu';


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
                    <Menu/>

              </div>
              
          </div>
        );
    }
});

export default Header;
