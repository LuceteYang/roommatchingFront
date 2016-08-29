import React from 'react';

import Header from './Components/Header';

import ChatMessage from './Components/Chat/ChatMessage';
import ChatInput from './Components/Chat/ChatInput';

import logo from './logo.svg';
import './App.css';


var messageRef = new Firebase("https://roommatching-9d6da.firebaseio.com/list");


class Chat extends React.Component {

  constructor(props){
    super(props);
    this.state={
      messagearr:[]
    }
  }

  mapToComponents(data){
/*    var testarr = ["dddd","Dddd","ㅇㅇㅇㅇ"];
    console.log(testarr);
    console.log(testarr[1])*/
  console.log("data")
  console.log("data",data)
  console.log(typeof data)

};

  componentWillMount(){
    var messagearr = [];
    messageRef.once("value", function(snapshot){
      // console.log("snapshot");
      var arr = snapshot.val();
      for(var key in arr) {
          var value = arr[key];
          messagearr.push(value.message);
      }
    });
      this.setState({messagearr : messagearr});
  }

  render() {

    const mapToComponents = (data) => {
      console.log(data);
      console.log("data");
      console.log(data[0]);
       return data.map((message) => {
        console.log("message")
        console.log(message)
        return (<ChatMessage message = {message}/>);
      });
    };

    return (

      <div>

            <Header/>
             <div>{mapToComponents(this.state.messagearr)}</div>
            <ChatInput/>

      </div>
    );
  }
}

export default Chat;