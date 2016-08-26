import React from 'react';

import Header from './Components/Header';

import ChatMessage from './Components/Chat/ChatMessage';
import ChatInput from './Components/Chat/ChatInput';

import logo from './logo.svg';
import './App.css';


var myFirebaseRef = new Firebase("https://roommatching-9d6da.firebaseio.com/");


class Chat extends React.Component {

  constructor(props){
    super(props);

     myFirebaseRef.set({
      title: "Hello World!",
      author: "Firebase",
      location: {
        city: "San Francisco",
        state: "California",
        zip: 94103
      }
    }); 
  }
 
  render() {
    return (
      
      <div>
         
            <Header/>
            <ChatMessage/>
            <ChatInput/>

      </div>
    );
  }
}

export default Chat;