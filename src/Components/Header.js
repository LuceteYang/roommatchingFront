import React from 'react';


var FloatingStyle = {
    backgroundColor:"#ee6e73",
    top :"13px",
    right : "24px",
    position: "absolute"
}
var liststyle = {
    color : "#ee6e73"
}

// style="bottom: 45px; right: 24px;"
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.dropdownfunc = this.dropdownfunc.bind(this)
    }
    dropdownfunc(){
        $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: true, // Displays dropdown below the button
          alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
      );
    }
    render(){
        return (
          <nav>
            <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="dropdown2" className="dropdown-content">
                <li><a style={liststyle} href="#!">one<span className="badge">1</span></a></li>
                <li><a style={liststyle} href="#!">two<span className="new badge">1</span></a></li>
                <li><a style={liststyle} href="#!">three</a></li>
            </ul>
            <a style={FloatingStyle} className="btn dropdown-button" href="#!" data-activates="dropdown2">Dropdown<i className="mdi-navigation-arrow-drop-down right"></i></a>
            </div>
        </nav>

        );
    }
};

export default Header;
