import React from 'react';
import './component.css';

class ResultUser extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            surveyData:[
            {question:"아침에 언제 일어나나요?",
              answers:[
            {title: "올빼미형 9시 이후", img: './src/public/owl.PNG'},
            {title: "아침형 8시 이전", img: './src/public/clock.PNG'},
            {title: "보통형 8시 이후 9시 이전", img: './src/public/chicken.PNG'},
            {title: "상관없어요", img: './src/public/owl.PNG'}
            ]},
            {question:"저녁 몇 시쯤 잠드나요?",
              answers:[
            {title: "올빼미형 9시 이후", img: '../src/public/owl.PNG'},
            {title: "아침형 8시 이전", img: '../src/public/clock.PNG'},
            {title: "보통형 8시 이후 9시 이전", img: '../src/public/chicken.PNG'},
            {title: "상관없어요", img: '../src/public/owl.PNG'}
            ]}]
        }
    }

    render() {
        console.log('test', this.state);
     //  https://scontent.xx.fbcdn.net/v/t1.0-9/544172_438657176227436_1237703087_n.jpg?oh=70e163ff0dc39453b211cf074fcd0867&oe=5853FC43
  
        // const propSociality =;
    //    let sociality = this.state.surveyData[0].answers[this.props.user.survey.sociality];
        return (
              <div className="container">
                    <div className="col s12 m6">
                        
                        <div className="card horizontal">
                            <div className="card-image waves-effect waves-block waves-light ">
                            <img className="activator friend-thumbnail" src={this.props.user.image}/>
                                <span className="card-title" style ={{marginBottom: "20px"}}>{this.props.user.percent}%</span>
                            </div>
                            <div className="card-content" style ={{width: "100%"}}>
                            <span className="card-title activator grey-text text-darken-4"><i className="material-icons right">more_vert</i></span>
                            <p>{this.props.user.name} {this.props.user.email}
                                 {this.props.user.percent}<br/>
                                {this.props.user.birth}<br/>
                                {this.props.user.major}<br/>
                                {this.props.user.univ_dong1_name}<br/>
                                {this.props.user.univ_dong2_name}<br/>
                                {this.state.surveyData[0].answers[this.props.user.survey.sociality].title }<br/>
                              
                                {this.props.user.survey.familiarity  }<br/>
                                {this.props.user.survey.awaken   }<br/>
                                {this.props.user.survey.smoke  }<br/>
                                {this.props.user.survey.game  }

                            </p>
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