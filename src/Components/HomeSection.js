import React from 'react';
// import axios from 'axios';



class HomeSection extends React.Component {

     constructor(props){
        super(props);

        this.state = {
                
         };
      
    }

  
    render(){
         let background1 = {
                    width:"200px",
                    backgroundPosition: 'center center',
                    height:"190px",
                    display:"inline-block",
                     backgroundSize:'cover',
                   backgroundImage:'url(../src/public/home_facebook.png)'
                };
               
         let background2 = {
                    width:"200px",
                    backgroundPosition: 'center center',
                    height:"190px",
                    display:"inline-block",
                     backgroundSize:'cover',
                   backgroundImage:'url(../src/public/home_survey.png)'
                };
        let background3 = {
            width:"200px",
            backgroundPosition: 'center center',
            height:"190px",
            display:"inline-block",
                backgroundSize:'cover',
            backgroundImage:'url(../src/public/home_choose.png)'
        };
        let background4 = {
            width:"200px",
            backgroundPosition: 'center center',
            height:"190px",
            display:"inline-block",
                backgroundSize:'cover',
            backgroundImage:'url(../src/public/home_contact.png)'
        };
        return (
            
             <div className="container">
                    <div className="section">

                    <div className="row">
                        <div className="col s6 l3" >
                        <div className="icon-block center" >
                            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                            <h5 className="center">페이스북 연동</h5>
                            <div style = {background1}> </div>
                        </div>
                        </div>

                        <div className="col s6 l3">
                        <div className="icon-block center">
                            <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                            <h5 className="center">설문조사 하기</h5>

                            <div style = {background2}> </div>
                        </div>
                        </div>

                        <div className="col s6 l3">
                        <div className="icon-block center">
                            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                            <h5 className="center">매칭 결과보기</h5>
                            <div style = {background3}> </div>    
                        </div>
                        </div>
                        <div className="col s6 l3">
                        <div className="icon-block center">
                            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                            <h5 className="center">룸메 연락하기</h5>
                            <div style = {background4}> </div>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
        
           
        );
    }
}


export default HomeSection;

