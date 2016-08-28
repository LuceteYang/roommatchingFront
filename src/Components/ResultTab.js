/**
 * Created by User on 2016-08-07.
 */
import React from 'react';
import ResultUser from './ResultUser';
class ResultTab extends React.Component{

    constructor(props){
        super(props);
        console.log('ResultTab constructor');
         this.state = {
            selectedKey : -1,
            
            prefernce_survey : {preference_sociality : 3, preference_familiarity : 2, preference_awaken : 1, preference_smoke : 2, preference_game : 1},
            
            userData:[{
                percent: 77,
                id : 4, 
                name:"준태",
                email : "kiss9815@naver.com", 
                image :'https://scontent.xx.fbcdn.net/v/t1.0-9/544172_438657176227436_1237703087_n.jpg?oh=70e163ff0dc39453b211cf074fcd0867&oe=5853FC43', 
                birth:1990, major:"컴퓨터공학과", 
                univ_dong1_name: "4동", univ_dong2_name: "1동", 
                preference_period1_name: "하계 1차", preference_period2_name: "하계 2차",
                survey :{sociality : 2, familiarity :1, awaken :2, smoke :1, game : 2} 
            
            },{
                percent: 33,
                id : 4, 
                name:"상환",
                email : "sangwhan@naver.com", 
                image :'https://scontent.xx.fbcdn.net/v/t1.0-9/544172_438657176227436_1237703087_n.jpg?oh=70e163ff0dc39453b211cf074fcd0867&oe=5853FC43', 
                birth:1990, major:"철학과", 
                univ_dong1_name: "4동", univ_dong2_name: "1동", 
                preference_period1_name: "하계 1차", preference_period2_name: "하계 2차",
                survey :{sociality : 1, familiarity :1, awaken :2, smoke :1, game : 2}
            }
            ]
        }
    }

    render() {
        console.log('ResultTab render');

        const mapToComponents = (data) =>{
        return data.map((user, i) =>{
          
          return (<ResultUser user = {user} key = {i}/>);
        })
    }
        console.log('test', this.state);
        return (
              <div style = {{textAlign: 'center'}} >
                  <div>{mapToComponents(this.state.userData)}</div>
              </div>
        );
    }
}

export default ResultTab;
