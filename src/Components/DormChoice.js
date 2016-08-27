/**
 * Created by User on 2016-08-07.
 */
import React from 'react';
import Input from '../public/src/Input';



class DormChoice extends React.Component {

    constructor(props){
        super(props);

    }


    render() {
    
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
                    </div>
                  
                    
                   
                   </div>
                                   
            </div>
        );
    }
}


export default DormChoice;