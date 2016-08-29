import React from 'react';





var messageListRef = new Firebase('https://roommatching-9d6da.firebaseio.com/list');


class ChatInput extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      value : ''
    }
    // var messageListRef = new Firebase('https://samplechat.firebaseio-demo.com/message_list');
    //   var newMessageRef = messageListRef.push();
    //       newMessageRef.set({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });
    //   // We've appended a new message to the message_list location.
    //   var path = newMessageRef.toString();
    this.handleChange = this.handleChange.bind(this);
     this.handlePost = this.handlePost.bind(this);
     this.handleKeyPress = this.handleKeyPress.bind(this);

  }
  firebase(message){

    messageListRef.push({ 'message' : message });
      //  newMessageRef.set({ 'message': message });
  }

  handleChange(event){

    this.setState({value: event.target.value});
  }
  handlePost(){
    let message = this.state.value;
    console.log(message);
    this.firebase(message);


    this.setState({value : ""});
  }
  handleKeyPress(e){

    if(e.key === 'Enter'){
      let message = this.state.value;
      console.log(message);
      this.firebase(message);
      this.setState({value : ""});
    }
  }

  // componentWillMount(){
  //      var messageListRef = new Firebase('https://roommatching-9d6da.firebaseio.com/list');
  //     var newMessageRef = messageListRef.push();
  //     newMessageRef.set({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });
  // }

  render() {

    $(document).ready(function() {
    Materialize.updateTextFields();
  });
    return (

      <div>

              <div className="row" style={{position:"fixed", bottom:"10px", left:"30px", right:"0px"}} >
                  <div className="col s12" >
                    <div className="row">
                      <div className="input-field col s8 m9">
                        <input id="input_text" type="text" length="10" value={this.state.value} onChange = {this.handleChange } onKeyPress={this.handleKeyPress}/>
                        <label for="input_text">메시지 쓰기</label>
                      </div>
                      <div className="col s4 m3">
                       <button className="btn waves-effect waves-light" onClick = {this.handlePost} onKeyPress={this.handleKeyPress} style ={{ marginTop: "20px"}}>
                          보내기
                        <i className="material-icons right">send</i>
                      </button>
                      </div>
                    </div>

                  </div>
                </div>

      </div>
    );
  }
}

export default ChatInput;


