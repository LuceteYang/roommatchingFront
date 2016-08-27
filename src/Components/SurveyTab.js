/**
 * Created by User on 2016-08-07.
 */
 import React from 'react';
 import SurveyChoiceform from './SurveyChoiceform'
 class SurveyTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
          <div>
            <SurveyChoiceform type={0} />
            <SurveyChoiceform type={1} />
            <SurveyChoiceform type={2} />
            <SurveyChoiceform type={3} />
            <SurveyChoiceform type={4} />
            <SurveyChoiceform type={5} />
        </div>
        );
    }
}

export default SurveyTab;