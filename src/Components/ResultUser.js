import React from 'react';
import './component.css';

class ResultUser extends React.Component{

    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render() {
        console.log('test', this.state);
       
        return (
              <div className="container">
                    <div className="col s12 m6">
                        
                              <div className="card horizontal">
                                    <div className="card-image waves-effect waves-block waves-light ">
                                    <img className="activator friend-thumbnail" src="http://lorempixel.com/100/190/nature/10"/>
                                     <span className="card-title" style ={{marginBottom: "20px"}}>{}%</span>
                                    </div>
                                    <div className="card-content" style ={{width: "100%"}}>
                                    <span className="card-title activator grey-text text-darken-4"><i className="material-icons right">more_vert</i></span>
                                    <p>This is a link</p>
                                    </div>
                                    <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                    </div>
                                </div>
                               
                   </div>

            </div>
        );
    }
}

export default ResultUser;

//  <div className="card horizontal hoverable">
//                                 <div className="card-image">
//                                     <img src="http://lorempixel.com/100/190/nature/10" className = "friend-thumbnail"/>
//                                     <span className="card-title" style ={{marginBottom: "50px"}}>80%</span>
//                                 </div>
//                                 <div className="card-stacked">
//                                     <div className="card-content">
//                                     <p className="flow-text">I am a very simple card. I am good at containing small bits of information.</p>
//                                     </div>
//                                     <div className="card-action">
//                                     <a href="#">This is a link</a>
//                                     </div>
//                                 </div>
//                                 </div>