/**
 * Created by User on 2016-08-07.
 */
import React from 'react';
import axios from 'axios';
class PageTwo extends React.Component {
    onClick() {
        axios.get('https://roommatching-rooney11.c9users.io/auth/facebook')
            .then( response => {
                var myWindow = window.open("", "MsgWindow", "width=200,height=100");
                myWindow.document.write(response.data); } ) // SUCCESS
            .catch( response => { console.log(response); } ); // ERROR
    }
    logoutClick(){
        axios.get('https://roommatching-rooney11.c9users.io/sign_out')
            .then( response => {
               alert(response.data); } ) // SUCCESS
            .catch( response => { console.log(response); } ); // ERROR
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.onClick}>Click Me</button>
                <button type="button" onClick={this.logoutClick}>Log out</button>
                <h2>Hey, I am PageTwo!</h2>
            </div>
        );
    }
}

export default PageTwo;