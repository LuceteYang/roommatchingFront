/**
 * Created by User on 2016-08-07.
 */
import React from 'react';
import ResultUser from './ResultUser';
class ResultTab extends React.Component{

    constructor(props){
        super(props);
         this.state = {
            selectedKey : -1,
            userData:[{
                percent : 77,
                survey1 : { first : "보통형", second : "9시 이후 9시 이전"},
                survey2 : {first : "흡연자", second : "흡연자입니다"},
                survey3 : {first : "엄청친하게", second : "soulmate처럼"},
                survey4 : {first : "완전 취침", second : "어떤 소리와 빛에도 굴하지 않는다"}
                
            },{
                percent :30,
                survey1 : { first : "보통형", second : "9시 이후 9시 이전"},
                survey2 : {first : "금연자", second : "흡연자입니다"},
                survey3 : {first : "안친해", second : "soulmate처럼"},
                survey4 : {first : "안자", second : "어떤 소리와 빛에도 굴하지 않는다"}
            }
            ]
        }
    }

    render() {
        const mapToComponents = (data) =>{
        return data.map((user, i) =>{
          
          return (<ResultUser user = {user} key = {i}/>);
        })
    }
        console.log('test', this.state);
        return (
              <div style = {{textAlign: 'center'}} >
                  
              </div>
        );
    }
}

export default ResultTab;
