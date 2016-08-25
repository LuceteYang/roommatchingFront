import React from 'react';
 import SelectItemInfo from './SelectItemInfo'

 class Choiceform extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            MyChoice: -1,
            selectedKey1: -1,
            contactData:[
            {title: "올빼미형 9시 이후", img: '../src/public/owl.PNG'},
            {title: "아침형 8시 이전", img: '../src/public/clock.PNG'},
            {title: "보통형 8시 이후 9시 이전", img: '../src/public/chicken.PNG'},
            {title: "상관없어요", img: '../src/public/owl.PNG'}
            ]
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
            selected: this.state.contactData[key]
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
             selected: this.state.contactData[key]
         });
     }

    render() {
        return (
          <div className="row">
              <div className="col s12 m12 l6">
              <div className= "col s1 m1 l1"></div>
                      <div className= "col s10 m10 l10 card">
                      <h6>언제 일어나나요? {this.state.MyChoice>-1 ? this.state.contactData[this.state.MyChoice].title : ""}</h6>
                      {this.state.contactData.map((contact, i) => {
                        return (<SelectItemInfo title={contact.title}
                        img={contact.img}
                        key={i}
                        contactKey={i}
                        isSelected={this.isSelectedMyChoice.bind(this)(i)}
                        onSelect={this.MyChoiceSelect.bind(this)}/>);
                    })}
                       </div>
              <div className= "col s1 m1 l1"></div>
                </div>
              <div className="col s12 m12 l6">
              <div className= "col s1 m1 l1"></div>
                      <div className= "col s10 m10 l10 card">
                      <h6>룸메이트는 어떤 대답을 하길 원하나요? {this.state.selectedKey1>-1 ? this.state.contactData[this.state.selectedKey1].title : ""}</h6>
                      {this.state.contactData.map((contact, i) => {
                        return (<SelectItemInfo title={contact.title}
                        img={contact.img}
                        key={i}
                        contactKey={i}
                        isSelected={this._isSelected1.bind(this)(i)}
                        onSelect={this._onSelect1.bind(this)}/>);
                    })}
                       </div>
              <div className= "col s1 m1 l1"></div>
                </div>
        </div>
        );
    }
}

export default Choiceform;
