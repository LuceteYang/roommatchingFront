import React from 'react';
// import axios from 'axios';


class HomeParallax extends React.Component {

     constructor(props){
        super(props);

        this.state = {
                
         };
      
    }

 
    render(){
    

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
                    <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">시작하기</a>
                    </div>
                    <br/><br/>

                </div>
                </div>
                <div className="parallax"><img src={'./src/public/mainImage.jpg'} alt="Unsplashed background img 1"/></div>
            </div>
        
           
        );
    }
}


export default HomeParallax;

