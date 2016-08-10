import React, { Component } from 'react';

var mainButtonStyle = {
       textAlign : 'center',
       margin : 'auto',
       padding : '125px',
       height : '100%',
       backgroundColor : 'hsla(282, 74%, 5%, 0.15)'
    } 

var back = {
    // backgroundColor : '#8F8F8F', 
    // opacity : '0.3'
}

var redButton = {
    backgroundColor : '#ff4444',
    width : '100px',
    
     opacity : '1.0',
     margin : 'auto',
     padding :'10px',
    borderRadius: '10px',
    color : '#ffffff'
}

var MainButton = React.createClass({
    handleClick: function() {
        this.setState({
            isSelected: true,
            
        }),
        alert("Hello World!");
    },
    render : function(){
        return (
            
            <div style = {mainButtonStyle}>
                <div style = {redButton} onClick={this.handleClick}>
                    메인 버튼
                </div>
                
            </div>
           
        );
    }
});

export default MainButton;