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