/**
 * Created by User on 2016-08-07.
 */
import React from 'react';
import Input from '../public/src/Input';



class DormPeriod extends React.Component {

    constructor(props){
        super(props);

    }


    render() {
        $(document).ready(function() {
                $('.datepicker').pickadate({
                        selectMonths: true, // Creates a dropdown to control month
                        selectYears: 16 // Creates a dropdown of 15 years to control year
                    });
        });
        return (
            <div>
                   
                  

                    <div className="card">
                    
                     <div className="card-content ">
                             <span className ="card-title">   
                              <i className="material-icons">schedule</i> 기간 
                              </span>
                                <br/><br/>
                              <Input name='group1' type='checkbox' value='red' label='Red' />
                              <Input name='group1' type='checkbox' value='yellow' label='Yellow'  />
                              <Input name='group1' type='checkbox' value='green' label='Green'  />
                              <Input name='group1' type='checkbox' value='brown' label='Brown'/>
                              <br/><br/>  
                    </div>
                    <div className="card-action">
                      <label for ="calendar">달력보기 </label>
                    <input id ="calendar" type="date" className="datepicker"/>
                    
                    </div>
                </div>
                                   
            </div>
        );
    }
}


export default DormPeriod;