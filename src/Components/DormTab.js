/**
 * Created by User on 2016-08-07.
 */
import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';
import DormSchool from './DormSchool';
import DormPeriod from './DormPeriod';
import DormChoice from './DormChoice';

class DormTab extends React.Component {
    render() {
    

        return (
          <div className="container">
             <div className="container">
                    <div className ="card">
                        <DormSchool/>
                        <DormPeriod/>
                
                        <DormChoice/>
                                <div className ="center-align" >
                                <button className="btn waves-effect waves-light" type="submit" name="action" style ={{marginBottom : "20px"}}>
                                    작성완료
                                    <i className="material-icons right">send</i>
                                </button>
                                </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Test extends React.Component {
    render(){

        return(
            <div>

                 <Counter/>
                <Option/>
                <Buttons/>
            </div>
        );
    }
}

export default DormTab;