import React from 'react';





var myFirebaseRef = new Firebase("https://roommatching-9d6da.firebaseio.com/");


class ChatMessage extends React.Component {

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
         
            채팅 메시지

      </div>
    );
  }
}

export default ChatMessage;