/**
 * Created by User on 2016-08-07.
 */
import React from 'react';
import Input from '../public/src/Input';



class DormSelectItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isChecked :false
        }
        this.toggleChange = this.toggleChange.bind(this);
    }

    toggleChange(){
        if(!this.state.isChecked){
            let changedboolean =  !this.state.isChecked
            this.setState({isChecked : changedboolean})
            this.props.onItemSelect(changedboolean,this.props.check.dongid);
        }else{
            let changedboolean =  !this.state.isChecked
            this.setState({isChecked : changedboolean})
            // console.log("unChecked" + this.state.isChecked)
              this.props.onItemSelect(changedboolean,this.props.check.dongid);
        }
    }


    render() {
    
        return (
            <div>
                   
                  

                 <Input name='group1' type='checkbox' value={this.props.check.name} label={this.props.check.name} onChange = {this.toggleChange}/>

                  
                                   
            </div>
        );
    }
}


export default DormSelectItem;