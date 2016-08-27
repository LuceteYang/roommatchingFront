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
            <Choiceform type={0} />
            <Choiceform type={1} />
            <Choiceform type={2} />
            <Choiceform type={3} />
            <Choiceform type={4} />
            <Choiceform type={5} />
        </div>
        );
    }
}

export default PageTwo;