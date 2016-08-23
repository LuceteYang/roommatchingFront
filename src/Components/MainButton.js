import React, { Component } from 'react';
import axios from 'axios';


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
        this.onClick = this.onClick.bind(this);
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

        
        

    }
    
    isFaceBookLogin(){
            axios({url :'http://roommatching.xyz/home',
                    method :'get',
                    headers : {'Access-Control-Allow-Origin': "*", 
                                "Access-Control-Allow-Headers": "x-requested-with",
                                "Access-Control-Max-Age": "3600"
                            }
                    }
                ).then(response => {
                try{
                    JSON.parse(response.data);
                }catch(e){
                    var myWindow = window.open("", "MsgWindow", "width=500,height=500");
                    myWindow.document.write(response.data);
                    return false;
                }
                     console.log('componentDidMount', response.data);
                    this.props.onReceive(response.data);
// 아까 그게 뭐예요?? 페북 화면 작은 화면 로그인 창 이뜨는
                     return true;
                })
               
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
            url: 'http://roommatching.xyz/home',
            type: 'GET',
            dataType: 'json',
            crossDomain : true,
            cache: false,
            success: function(data) {
                console.log('facebook success ajax', data);
                this.setState({facebook: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.state.source, status, err.toString());
            }.bind(this)
        });
    }
    onClick(){
        // this.isFaceBookLogin();
        this.loginFaceBook();
        console.log("dddd")
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
                <a className="modal-trigger waves-effect waves-light btn" href="#modal1" onClick = {this.onClick}>{loginButton}</a>
                
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