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
             
              <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s6">
                        <input id="input_text" type="text" length="10"/>
                        <label for="input_text">메시지 쓰기</label>
                      </div>
                    </div>
                   
                  </form>
                </div>
                        
      </div>
    );
  }
}

export default ChatInput;


