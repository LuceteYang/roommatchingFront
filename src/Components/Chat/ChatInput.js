import React from 'react';





var myFirebaseRef = new Firebase("https://roommatching-9d6da.firebaseio.com/");


class ChatInput extends React.Component {

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

    $(document).ready(function() {
    Materialize.updateTextFields();
  });
    return (
      
      <div>
             
              <div className="row" style={{position:"fixed", bottom:"10px", left:"30px", right:"0px"}} >
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s8 m9">
                        <input id="input_text" type="text" length="10"/>
                        <label for="input_text">메시지 쓰기</label>
                      </div>
                      <div className="col s4 m3">
                       <button className="btn waves-effect waves-light" type="submit" name="action" style ={{ marginTop: "20px"}}>
                          보내기
                        <i className="material-icons right">send</i>
                      </button>
                      </div>
                    </div>
                   
                  </form>
                </div>
                        
      </div>
    );
  }
}

export default ChatInput;


