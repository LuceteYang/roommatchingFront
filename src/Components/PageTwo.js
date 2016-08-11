/**
 * Created by User on 2016-08-07.
 */
import React from 'react';
import axios from 'axios';
var jsonp = require('jsonp');
import Choiceform from './Choiceform'
import SelectItemInfo from './SelectItemInfo'
class PageTwo extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                selectedKey: -1,
                contactData:[
                    {title: "올빼미형 9시 이후", img: '../src/public/owl.PNG'},
                    {title: "아침형 8시 이전", img: '../src/public/clock.PNG'},
                    {title: "보통형 8시 이후 9시 이전", img: '../src/public/chicken.PNG'},
                    {title: "상관없어요", img: '../src/public/owl.PNG'}
                ]
            };
    }
    onClick() {
        /*        axios.get('https://roommatching-rooney11.c9users.io/auth/facebook')
         .then( response => {
         var myWindow = window.open("", "MsgWindow", "width=500,height=500");
         myWindow.document.write(response.data); } ) // SUCCESS
         .catch( response => { console.log(response); } ); // ERROR*/
        $(function(){
            $.ajax({
                url: 'https://roommatching-rooney11.c9users.io/auth/facebook',
                type: "GET",
                crossDomain: true,
                contentType: "application/json; charset=utf-8",
                dataType: "JSONP",
                success : function(data) {
                    console.log(data)
                    var myWindow = window.open("", "MsgWindow", "width=500,height=500");
                    myWindow.document.write(data.data);
                },
            });
        });
    }
    logoutClick(){
        axios.get('https://roommatching-rooney11.c9users.io/sign_out')
            .then( response => {
                alert(response.data); } ) // SUCCESS
            .catch( response => { console.log(response); } ); // ERROR
    }


    _onSelect(key){
        if(key==this.state.selectedKey){
            console.log("key select cancelled");
            this.setState({
                selectedKey: -1,
                selected: {
                    name: "",
                    phone: ""
                }
            });
            return;
        }

        this.setState({
            selectedKey: key,
            selected: this.state.contactData[key]
        });
        console.log(key + " is selected");
    }

    _isSelected(key){
        if(this.state.selectedKey == key){
            return true;
        }else{
            return false;
        }
    }
    ulstyle = {
        "list-style": "none"
    }
    render() {
        return (
            <div>
                <Choiceform title="언제 일어나나요?" />
                <h2>언제 일어나나요?</h2>
                <ul style={this.ulstyle}>
                    {this.state.contactData.map((contact, i) => {
                        return (<SelectItemInfo title={contact.title}
                                             img={contact.img}
                                             key={i}
                                             contactKey={i}
                                             isSelected={this._isSelected.bind(this)(i)}
                                             onSelect={this._onSelect.bind(this)}/>);
                    })}
                </ul>
                <button type="button" onClick={this.onClick}>Click Me</button>
                <button type="button" onClick={this.logoutClick}>Log out</button>
                <h2>Hey, I am PageTwo!</h2>
            </div>
        );
    }
}

export default PageTwo;