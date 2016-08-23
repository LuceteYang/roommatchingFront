import React from 'react';
// import FacebookLogin from 'react-facebook-login';

class FacebookButton extends React.Component {
  constructor(props) {
      super(props);
         this.FB = props.fb;

      this.state = {
         message: ""
      };
    }


  componentDidMount() {
      this.FB.Event.subscribe('auth.logout', 
         this.onLogout.bind(this));
      this.FB.Event.subscribe('auth.statusChange', 
         this.onStatusChange.bind(this));
   }
      
   onStatusChange(response) {
      console.log( response );
      var self = this;

      if( response.status === "connected" ) {
         this.FB.api('/me','GET',{"fields":"id,name,email,gender,picture"}, function(response) {
	      console.log('##',response)
            var message = "Welcome " + response.name;
            self.setState({
               message: message
            });
         })
      }
   }

   onLogout(response) {
      this.setState({
         message: ""
      });
   }
  render() {
    return (
         <div>
            <div 
               className="fb-login-button" 
               data-max-rows="1" 
               data-size="xlarge" 
               data-show-faces="false" 
               data-auto-logout-link="true"
               >
            </div>
            <div>{this.state.message}</div>
         </div>
    )
  }
}
//여기 코드 그대로 복붙
//https://iamalivingcontradiction.wordpress.com/2015/09/21/how-to-use-facebook-login-with-react-and-babel/
export default FacebookButton;
