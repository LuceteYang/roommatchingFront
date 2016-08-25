/**
 * Created by User on 2016-08-07.
 */
 import React from 'react';
 import Choiceform from './Choiceform'
 import SelectItemInfo from './SelectItemInfo'
 class PageTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
          <div>
            <Choiceform/>
        </div>
        );
    }
}

export default PageTwo;