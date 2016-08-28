import React from 'react';
import Input from '../../public/src/Input';
import Row from '../../public/src/Row';




var messageRef = new Firebase("https://roommatching-9d6da.firebaseio.com/list");


class ChatMessage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
       message : ""
    }
   
  }
  componentWillMount(){
    messageRef.once("value", function(snapshot){
      var messageSnapshot = snapshot.child();
      var messageSnapshot2 = snapshot.child("message");
    console.log("dddddddddd", messageSnapshot + " :: " + messageSnapshot2);
    });
    // this.setState({message : })
  }


  render() {

     
    return (
      
      <div>
            <div className="chip" style = {{marginLeft : "30px", marginTop :"30px"}}>
              <img src="images/yuna.jpg" alt="Contact Person"/>
              Jane Doe
            </div>
             <div className="chip"  style = {{marginLeft : "20px", marginTop :"10px", paddingLeft : "30px", paddingRight : "30px"}}>
            	
              메시지 내용입니다 아녕하시오아ㅏ 아아아
            </div>
                
      

      </div>
    );
  }
}

export default ChatMessage;


        