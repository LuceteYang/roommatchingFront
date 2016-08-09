import React, { Component } from 'react';

var mainButtonStyle = {
       textAlign : 'center',
       margin : 'auto',
       padding : '125px',
       height : '100%',
       
    } 

var back = {
    backgroundColor : '#8F8F8F', 
    opacity : '0.3'
}

var MainButton = React.createClass({
    render : function(){
        return (
            <div style = {back}>
                <div style = {mainButtonStyle}>메인 버튼</div>
            </div>
        );
    }
});

export default MainButton;