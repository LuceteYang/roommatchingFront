/**
 * Created by User on 2016-08-07.
 */
import React from 'react';
import ResultUser from './ResultUser';
class ResultTab extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        console.log('test', this.state);
        return (
              <div style = {{textAlign: 'center'}} >
                    <ResultUser/>
                     <ResultUser/>
                      <ResultUser/>
              </div>
        );
    }
}

export default ResultTab;
