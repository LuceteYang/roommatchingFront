import React from 'react';

class SendButton extends React.Component {
     constructor(props){
        super(props);

        this.state = {
            is_login:"default",
            user:"default"
         };
      this.getinfoclick = this.getinfoclick.bind(this);
      this.loginclick = this.loginclick.bind(this);
    }
    getinfoclick(){
             $.ajax({
              url : 'https://roommatching-cloned-rooney11.c9users.io/home',
              type: 'get',
              dataType: 'json',
              crossDomain : true,
              cache: false,
              success: function(data) {
                  this.setState({is_login: JSON.stringify(data.is_login),user:JSON.stringify(data.user)});
              }.bind(this),
              error: function(xhr, status, err) {
                  console.error(this.state.source, status, err.toString());
              }.bind(this)
          });
         }

    loginclick(){
             $.ajax({
              url : 'https://roommatching-cloned-rooney11.c9users.io/auth/facebook',
              type: 'get',
              dataType: 'json',
              crossDomain : true,
              cache: false,
              success: function(data) {
                  this.setState({is_login: JSON.stringify(data.is_login),user:JSON.stringify(data.user)});
              }.bind(this),
              error: function(xhr, status, err) {
                  console.error(this.state.source, status, err.toString());
              }.bind(this)
          });
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
            <button className="btn waves-effect waves-light" onClick={this.loginclick} type="submit" name="action" style ={{marginBottom : "20px"}}>
            작성완료<i className="material-icons right">send</i></button>
            <h5>is_login : {this.state.is_login}</h5>
            <h5>user : {this.state.user}</h5>
            </div>
        )
    }
}


export default SendButton;
