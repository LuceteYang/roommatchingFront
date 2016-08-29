import React from 'react';
// import axios from 'axios';
import FacebookButton from './FacebookButton';

class HomeParallax extends React.Component {

     constructor(props){
        super(props);

        this.state = {
                isLogined : true
         };
      
    }

 
    render(){
      $(document).ready(function(){
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger').leanModal();
        });
          const startButton = (
               <a href="/main" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">시작하기</a>
          );
          const loginButton = (
            <a href="#modal1" id="download-button" className="btn-large waves-effect waves-light teal lighten-1 modal-trigger">시작하기</a>

          );

        return (
            
              <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                <div className="container">
                    <br/><br/>
                    <h1 className="header center teal-text text-lighten-2">내 방 안의 soulmate 찾기</h1>
                    <div className="row center">
                    <h5 className="header col s12 light white-text">당신의 soulmate는 생각보다 가까이 있습니다</h5>
                    </div>
                    <div className="row center">

                    {this.state.isLogined? startButton : loginButton}

                    </div>
                    <br/><br/>

                </div>
                </div>
                <div className="parallax"><img src={'./src/public/mainImage.jpg'} alt="Unsplashed background img 1"/></div>

              

                    <div id="modal1" className="modal">
                        <div className="modal-content">
                        <h4>페이스북으로 간편 로그인 하기</h4>
                        <FacebookButton/>
                        
                        </div>
                        <div className="modal-footer">
                        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">닫기</a>
                        </div>
                    </div>
          
            </div>
        
           
        );
    }
}


export default HomeParallax;

