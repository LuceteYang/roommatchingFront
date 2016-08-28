/**
 * Created by User on 2016-08-07.
 */
 import React from 'react';
 import SurveyChoiceform from './SurveyChoiceform'
 import SendButton from './SendButton'

 class SurveyTab extends React.Component {
    constructor(props) {
        super(props);
        console.log('surveyTab constructor');

        this.state = {
            type0mychoice:3
        };
    }


    render() {
        console.log('surveyTab render');
        return (
          <div>
            <SurveyChoiceform type={0} myChoice={this.state.type0mychoice} wishChoice={0} />
              {this.state.type0mychoice}
            <SurveyChoiceform type={1} myChoice={3} wishChoice={0} />
            <SurveyChoiceform type={2} myChoice={2} wishChoice={0}/>
            <SurveyChoiceform type={3} myChoice={1} wishChoice={0}/>
            <SurveyChoiceform type={4} myChoice={3} wishChoice={0} />
            <SurveyChoiceform type={5} myChoice={2} wishChoice={0} />
            <SendButton/>
        </div>
        );
    }
}

export default SurveyTab;