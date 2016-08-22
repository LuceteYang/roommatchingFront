import React, { Component } from 'react';
import axios from 'axios';


// var MainButton = React.createClass({
//      getInitialState: function() {
//             return {
//             username: '',
//             lastGistUrl: '',
//             source : 'http://52.78.90.9/home',
//             searchResults : [],
//             data : ''
//             };
//         },
    // https://api.github.com/users/octocat/gists
    // https://roommatching-rooney11.c9users.io/home
    // componentDidMount: function() {
    //     this.serverRequest = $.get(this.state.source, function (result) {
    //         console.log('result', result);
    //     var lastGist = result[0];
    //     this.setState({
    //         username: lastGist.owner.login,
    //         lastGistUrl: lastGist.html_url
    //     });
    //     }.bind(this));
 	// },
    // componentDidMount: function() {
    //    this.serverRequest = $.ajax({
    //         url: this.state.source,
    //         type: 'GET',
    //         dataType: 'json',
    //         crossDomain : true,
    //         cache: false,
    //         success: function(data) {
    //             console.log('data', data);
    //             this.setState({data: data});
    //         }.bind(this),
    //         error: function(xhr, status, err) {
    //             console.error(this.state.source, status, err.toString());
    //         }.bind(this)
    //     });
    // },
     
    // // componentDidMount: function() {
    // //    axios.get('https://roommatching-rooney11.c9users.io/home').then(response => {
    // //           console.log('response', response);
    // //            this.props.onReceive(response.data.number);
    // //            setTimeout(getNumber, 1000 * 5); // REPEAT THIS EVERy 5 SECONDS
    // //         });
    // // },

    // componentWillUnmount: function() {
    //     this.serverRequest.abort();
    // },
    
    
    
    // handleClick: function() {
    //     this.setState({
    //         isSelected: true,
            
    //     }),
    //     alert("Hello World!");
    // },
    // openModal: function(){
    //         // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    //         $('.modal-trigger').leanModal();
    // },
    // loginFaceBook : function(){
    //      this.serverRequest = $.ajax({
    //         url: 'http://52.78.90.9/users/auth/facebook',
    //         type: 'GET',
    //         dataType: 'json',
    //         crossDomain : true,
    //         cache: false,
    //         success: function(data) {
    //             console.log('facebook', data);
    //             this.setState({facebook: data});
    //         }.bind(this),
    //         error: function(xhr, status, err) {
    //             console.error(this.state.source, status, err.toString());
    //         }.bind(this)
    //     });
    // },


//     render : function(){
//         console.log('state', this.state.data);
//         console.log('state data', this.state.data.is_login);

//         var loginButton;
//         if(this.state.data.is_login){
//             loginButton = "로그인 했음";
//         }else{
//             loginButton = "로그인 안함";
//         }

//         return (
            
//             <div style = {mainButtonStyle}>
//                 <a className="modal-trigger waves-effect waves-light btn" href="#modal1" onClick = {this.loginFaceBook}>{loginButton}</a>
                
//                     <div id="modal1" className="modal">
//                         <div className="modal-content">
//                         <h4>Modal Header</h4>
//                         <p>A bunch of text</p>
//                         </div>
//                         <div className="modal-footer">
//                         <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
//                         </div>
//                     </div>
//             </div>
           
//         );
//     }
// });
var mainButtonStyle = {
       textAlign : 'center',
       margin : 'auto',
       padding : '125px',
       height : '100%',
       backgroundColor : 'hsla(282, 74%, 5%, 0.15)'
    } 

var back = {
    // backgroundColor : '#8F8F8F', 
    // opacity : '0.3'
}

var redButton = {
    backgroundColor : '#ff4444',
    width : '100px',
    
     opacity : '1.0',
     margin : 'auto',
     padding :'10px',
    borderRadius: '10px',
    color : '#ffffff',
    borderColor : 'transparent'
}
class MainButton extends React.Component {

     constructor(props){
        super(props);

        this.state = {
             username: '',
            lastGistUrl: '',
            source : 'http://roommatching.xyz/home',
            searchResults : [],
            data : '',
            facebook : ''       
         };
         this.loginFaceBook = this.loginFaceBook.bind(this);
        // this._updateValue = this._updateValue.bind(this);
    }

    componentDidMount(){
        //  this.serverRequest = $.ajax({
        //     url: this.state.source,
        //     type: 'GET',
        //     dataType: 'json',
        //     crossDomain : true,
        //     cache: false,
        //     success: function(data) {
        //         console.log('data', data);
        //         this.setState({data: data});
        //     }.bind(this),
        //     error: function(xhr, status, err) {
        //         console.error(this.state.source, status, err.toString());
        //     }.bind(this)
        // });

        let isLoginedButton = function(){
            axios.get('http://roommatching.xyz/home').then(response => {
                console.log('componentDidMount', response.data);
                this.props.onReceive(response.data);
            });
        }

        isLoginedButton();

        let isFaceBookLogin = function(){
            axios.get('http://roommatching.xyz/auth/facebook').then(response => {
                console.log('componentDidMount', response.data.is_login);
                this.props.onReceive(response.data);
            });
        }
        isFaceBookLogin();
    }
    componentWillUnmount(){
         this.serverRequest.abort();
    }

openModal(){
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger').leanModal();
    }
    loginFaceBook(){
          $.ajax({
            url: 'http://roommatching.xyz/auth/facebook',
            type: 'GET',
            dataType: 'json',
            crossDomain : true,
            cache: false,
            success: function(data) {
                console.log('facebook', data);
                this.setState({facebook: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.state.source, status, err.toString());
            }.bind(this)
        });
    }


    render(){
        
        console.log('state', this.state.data);
        console.log('state data', this.state.data.is_login);
        console.log('facebook data', this.state.facebook);

        let loginButton;
        if(this.state.data.is_login){
            loginButton = "로그인 했음";
        }else{
            loginButton = "로그인 안함";
        }

        return (
            
            <div style = {mainButtonStyle}>
                <a className="modal-trigger waves-effect waves-light btn" href="#modal1" onClick = {this.openModal}>{loginButton}</a>
                
                    <div id="modal1" className="modal">
                        <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                        </div>
                        <div className="modal-footer">
                        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.loginFaceBook}>Agree</a>
                        </div>
                    </div>
            </div>
           
        );
    }
}


export default MainButton;

// <div style = {redButton} onClick={this.handleClick}>
//                     메인 버튼
//                 </div>