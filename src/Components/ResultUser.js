import React from 'react';

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
                            <div className="card-image">
                                <img src="http://lorempixel.com/100/190/nature/10"/>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                                <div className="card-action">
                                <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                   </div>

            </div>
        );
    }
}

export default ResultUser;