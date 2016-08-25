/**
 * Created by User on 2016-08-07.
 */
import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';


class Home extends React.Component {
    render() {
        var sectionStyle = {
            color:'#ff4444'
        }
        return (
            <div>
                <h2><span style={sectionStyle}> ></span> 학교</h2>
                <h2>충남대학교"</h2>
                <h2><span style={sectionStyle}>></span> 기간</h2>
                <div class="checkbox">
                    <label><input type="checkbox" id="four" name="fourthdong" value="1" />하계 1차</label>
                    <label><input type="checkbox" id="four" name="fourthdong" value="2" />하계 2차</label>
                </div>
                <h2><span style={sectionStyle}>></span> 희망동 선택</h2>
                <div class="checkbox">
                    <label><input type="checkbox" name="fourthdong" value="1" />1 동</label>
                    <label><input type="checkbox"  name="fourthdong" value="2" />2 동</label>
                    <label><input type="checkbox" name="fourthdong" value="3" />3 동</label>
                    <label><input type="checkbox"  name="fourthdong" value="4" />4 동</label>
                    <label><input type="checkbox"  name="fourthdong" value="8" />8 동</label>
                    <label><input type="checkbox"  name="fourthdong" value="9" />9 동</label>
                </div>
                <button>저장</button>

                <Test/>
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

export default Home;