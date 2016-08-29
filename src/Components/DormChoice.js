/**
 * Created by User on 2016-08-07.
 */
import React from 'react';
import Input from '../public/src/Input';
import DormSelectItem from './DormSelectItem';
 import update from 'react-addons-update';

class DormChoice extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isSelectedKey : -1,
            dormData : [
                {name : "6동", dongid:0},
                {name : "7동", dongid:1},
                {name : "8동", dongid:2},
                {name : "9동", dongid:3}
            ],
            donglist:[]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange( isChecked,dongid){
        console.log('handleChange1', isChecked,dongid);
        if(isChecked){
            this.setState({
            donglist:update(
                this.state.donglist,{
                    $push:[dongid]
                }
            )})
        }else{
            this.setState({
            donglist:update(
                this.state.donglist,{
                    $splice:[[dongid,1]]
                }
            )})
        }
        console.log('handleChange2',this.state.donglist)
    }


    render() {
            const mapToComponents = (data) =>{
                return data.map((check, i) =>{
            
            return (<DormSelectItem check = {check} key = {i}
                    isSelected = {this.state.isSelected != -1 }
                    onItemSelect = {this.handleChange}/>);
            })
        }
        return (
            <div>
                   
                
                    <div className="card">
                    
                     <div className="card-content ">   
                               <span className ="card-title">     
                              <i className="material-icons">schedule</i> 기숙사 희망동 선택
                               </span>
                               <br/><br/>
                              <Input name='group1' type='checkbox' value='6동' label='6동' />
                              <Input name='group1' type='checkbox' value='7동' label='7동'  />
                              <Input name='group1' type='checkbox' value='8동' label='8동'  />
                              <Input name='group1' type='checkbox' value='9동' label='9동'/>
                              <br/><br/> 
                              <div>{mapToComponents(this.state.dormData)}</div> 
                    </div>
                  
                    
                   
                   </div>
                                   
            </div>
        );
    }
}


export default DormChoice;