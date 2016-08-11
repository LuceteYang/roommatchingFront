/**
 * Created by User on 2016-08-07.
 */
import React from 'react';
import axios from 'axios';
import {RadioGroup, Radio} from 'react-radio-group';
class PageTwo extends React.Component {
    getInitialState() {
        return {selectedValue: 'apple'};
    }

    handleChange(value) {
        this.setState({selectedValue: value});
    }
    onClick() {
        axios.get('https://roommatching-rooney11.c9users.io/auth/facebook')
            .then( response => {
                var myWindow = window.open("", "MsgWindow", "width=500,height=500");
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
                <h2>언제 일어나나요?</h2>
                <form name="fruit">
                    <input type="radio" name="fruit" value="apple" />올빼미형 9시 이후
                    <input type="radio" name="fruit" value="orange" />아침형 8시 이전
                    <input type="radio" name="fruit" value="watermelon" />보통형 8시 이후 9시 이전
                    <input type="radio" name="fruit" value="watermelon" />상관없어요
                </form>
                <button type="button" onClick={this.onClick}>Click Me</button>
                <button type="button" onClick={this.logoutClick}>Log out</button>
                <h2>Hey, I am PageTwo!</h2>
            </div>
        );
    }
}

export default PageTwo;