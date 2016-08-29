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



  render() {


    return (

      <div>
            <div className="chip" style = {{marginLeft : "30px", marginTop :"30px"}}>
              <img src="images/yuna.jpg" alt="Contact Person"/>
              Jane Doe
            </div>
             <div className="chip"  style = {{marginLeft : "20px", marginTop :"10px", paddingLeft : "30px", paddingRight : "30px"}}>
              {this.props.message}
            </div>
      </div>
    );
  }
}

export default ChatMessage;


