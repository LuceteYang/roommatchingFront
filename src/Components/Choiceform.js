import React from 'react';
 import SelectItemInfo from './SelectItemInfo'

 class Choiceform extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            MyChoice: -1,
            selectedKey1: -1,
            type:this.props.type,
            surveyData:[
            {question:"아침에 언제 일어나나요?",
              answers:[
            {title: "올빼미형 9시 이후", img: '../src/public/owl.PNG'},
            {title: "아침형 8시 이전", img: '../src/public/clock.PNG'},
            {title: "보통형 8시 이후 9시 이전", img: '../src/public/chicken.PNG'},
            {title: "상관없어요", img: '../src/public/owl.PNG'}
            ]},{question:"저녁 몇 시쯤 잠드나요?",
              answers:[
            {title: "올빼미형 9시 이후", img: '../src/public/owl.PNG'},
            {title: "아침형 8시 이전", img: '../src/public/clock.PNG'},
            {title: "보통형 8시 이후 9시 이전", img: '../src/public/chicken.PNG'},
            {title: "상관없어요", img: '../src/public/owl.PNG'}
            ]},{question:"당신의 성격은 어떤가요?",
              answers:[
            {title: "올빼미형 9시 이후", img: '../src/public/owl.PNG'},
            {title: "아침형 8시 이전", img: '../src/public/clock.PNG'},
            {title: "보통형 8시 이후 9시 이전", img: '../src/public/chicken.PNG'},
            {title: "상관없어요", img: '../src/public/owl.PNG'}
            ]},{question:"흡연자인가요?",
              answers:[
            {title: "올빼미형 9시 이후", img: '../src/public/owl.PNG'},
            {title: "아침형 8시 이전", img: '../src/public/clock.PNG'},
            {title: "보통형 8시 이후 9시 이전", img: '../src/public/chicken.PNG'},
            {title: "상관없어요", img: '../src/public/owl.PNG'}
            ]},{question:"룸메이트랑 얼마나 친하고 싶나요?",
              answers:[
            {title: "올빼미형 9시 이후", img: '../src/public/owl.PNG'},
            {title: "아침형 8시 이전", img: '../src/public/clock.PNG'},
            {title: "보통형 8시 이후 9시 이전", img: '../src/public/chicken.PNG'},
            {title: "상관없어요", img: '../src/public/owl.PNG'}
            ]},{question:"잠귀가 밝나요?",
              answers:[
            {title: "올빼미형 9시 이후", img: '../src/public/owl.PNG'},
            {title: "아침형 8시 이전", img: '../src/public/clock.PNG'},
            {title: "보통형 8시 이후 9시 이전", img: '../src/public/chicken.PNG'},
            {title: "상관없어요", img: '../src/public/owl.PNG'}
            ]},
            {question:"게임을 하시나요?",
              answers:[
            {title: "올빼미형 9시 이후", img: '../src/public/owl.PNG'},
            {title: "아침형 8시 이전", img: '../src/public/clock.PNG'},
            {title: "보통형 8시 이후 9시 이전", img: '../src/public/chicken.PNG'},
            {title: "상관없어요", img: '../src/public/owl.PNG'}
            ]}]
        };
    }

    MyChoiceSelect(key){
        if(key==this.state.MyChoice){
            this.setState({
                MyChoice: -1
            });
            return;
        }

        this.setState({
            MyChoice: key,
            selected: this.state.surveyData[this.state.type].answers[key]
        });
    }

     isSelectedMyChoice(key){
         if(this.state.MyChoice == key){
             return true;
         }else{
             return false;
         }
     }

     _isSelected1(key){
        if(this.state.selectedKey1 == key){
            return true;
        }else{
            return false;
        }
    }

     _onSelect1(key){
         if(key==this.state.selectedKey1){
             this.setState({
                 selectedKey1: -1
             });
             return;
         }

         this.setState({
             selectedKey1: key,
             selected: this.state.surveyData[this.state.type].answers[key]
         });
     }
     centerstyle = {
        textAlign:"center"
     }


    render() {
        return (
          <div className="row">
              <div className="col s12 m12 l6">
              <div className= "col s0 m1 l1"></div>
                      <div className= "col s12 m10 l10 card">
                      <h6>{this.state.surveyData[this.state.type].question} {this.state.MyChoice>-1 ? this.state.surveyData[this.state.type].answers[this.state.MyChoice].title : ""}</h6>
                      <div className="col s12 m12 l12" style={this.centerstyle}>
                      <SelectItemInfo
                        title={this.state.surveyData[this.state.type].answers[0].title}
                        img = {this.state.surveyData[this.state.type].answers[0].img}
                        contactKey = {0}
                        isSelected={this.isSelectedMyChoice.bind(this)(0)}
                        onSelect={this.MyChoiceSelect.bind(this)} />
                      <SelectItemInfo
                        title={this.state.surveyData[this.state.type].answers[1].title}
                        img = {this.state.surveyData[this.state.type].answers[1].img}
                        contactKey = {1}
                        isSelected={this.isSelectedMyChoice.bind(this)(1)}
                        onSelect={this.MyChoiceSelect.bind(this)} />
                       </div>
                      <div className="col s12 m12 l12" style={this.centerstyle} >
                      <SelectItemInfo
                        title={this.state.surveyData[this.state.type].answers[2].title}
                        img = {this.state.surveyData[this.state.type].answers[2].img}
                        contactKey = {2}
                        isSelected={this.isSelectedMyChoice.bind(this)(2)}
                        onSelect={this.MyChoiceSelect.bind(this)} />
                      <SelectItemInfo
                        title={this.state.surveyData[this.state.type].answers[3].title}
                        img = {this.state.surveyData[this.state.type].answers[3].img}
                        contactKey = {3}
                        isSelected={this.isSelectedMyChoice.bind(this)(3)}
                        onSelect={this.MyChoiceSelect.bind(this)} />
                       </div>
                       </div>
              <div className= "col s0 m1 l1"></div>
                </div>
              <div className="col s12 m12 l6">
              <div className= "col s0 m1 l1"></div>
                      <div className= "col s12 m10 l10 card">
                      <h6>룸메이트는 어떤 대답을 하길 원하나요? {this.state.selectedKey1>-1 ? this.state.surveyData[this.state.type].answers[this.state.selectedKey1].title : ""}</h6>
                      <div className="col s12 m12 l12" style={this.centerstyle}>
                      <SelectItemInfo
                        title={this.state.surveyData[this.state.type].answers[0].title}
                        img = {this.state.surveyData[this.state.type].answers[0].img}
                        contactKey = {0}
                        isSelected={this._isSelected1.bind(this)(0)}
                        onSelect={this._onSelect1.bind(this)} />
                      <SelectItemInfo
                        title={this.state.surveyData[this.state.type].answers[1].title}
                        img = {this.state.surveyData[this.state.type].answers[1].img}
                        contactKey = {1}
                        isSelected={this._isSelected1.bind(this)(1)}
                        onSelect={this._onSelect1.bind(this)} />
                       </div>
                      <div className="col s12 m12 l12" style={this.centerstyle} >
                      <SelectItemInfo
                        title={this.state.surveyData[this.state.type].answers[2].title}
                        img = {this.state.surveyData[this.state.type].answers[2].img}
                        contactKey = {2}
                        isSelected={this._isSelected1.bind(this)(2)}
                        onSelect={this._onSelect1.bind(this)} />
                      <SelectItemInfo
                        title={this.state.surveyData[this.state.type].answers[3].title}
                        img = {this.state.surveyData[this.state.type].answers[3].img}
                        contactKey = {3}
                        isSelected={this._isSelected1.bind(this)(3)}
                        onSelect={this._onSelect1.bind(this)} />
                       </div>
                       </div>
              <div className= "col s0  m1 l1"></div>
                </div>
        </div>
        );
    }
}

export default Choiceform;
