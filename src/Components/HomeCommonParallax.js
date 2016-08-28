import React from 'react';
// import axios from 'axios';


class HomeCommonParallax extends React.Component {

     constructor(props){
        super(props);

        this.state = {
                
         };
      
    }

 
    render(){
    

        return (
            
             <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                <div className="container">
                    <div className="row center">
                    <h5 className="header col s12 light white-text">룸메이칭 빠샤</h5>
                    </div>
                </div>
                </div>
                <div className="parallax"><img src={'./src/public/mainSecond.jpg' } style = {{height : "1100px"}}alt="Unsplashed background img 3"/></div>
            </div>
        
           
        );
    }
}


export default HomeCommonParallax;

