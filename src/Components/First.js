/**
 * Created by User on 2016-08-07.
 */
import React from 'react';

import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';


class First extends React.Component {
    render() {
        var sectionStyle = {
            color:'#ff4444'
        }
      $(document).ready(function() {
        $('select').material_select();
      });
        return (
          <div className="container">
                <div className="col s12 m12 l12">
                    <div className="input-field col s5 m5 l5">
                    <select>
                       <option value="" disabled selected>Choose your option</option>
                       <option value="1">충남대학교</option>
                       <option value="2">Kaist</option>
                    </select>
                    <label>학교</label>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                <h4><span style={sectionStyle}>></span> 기간</h4>
                <form action="#">

                    <input type="checkbox" value="ㅎㅎㅎ" />HTML
                    <p>
                      <input type="checkbox" id="test5" />
                      <label for="test5">Red</label>
                    </p>
                    <p>
                      <input type="checkbox" id="test6" checked="checked" />
                      <label for="test6">Yellow</label>
                    </p>
                    <p>
                      <input type="checkbox" className="filled-in" id="filled-in-box" checked="checked" />
                      <label for="filled-in-box">Filled in</label>
                    </p>
                    <p>
                      <input type="checkbox" id="indeterminate-checkbox" />
                      <label for="indeterminate-checkbox">Indeterminate Style</label>
                    </p>
                  </form>
                <div className="checkbox">
                    <label><input type="checkbox" id="four" name="fourthdong" value="1" />하계 1차</label>
                    <label><input type="checkbox" id="four" name="fourthdong" value="2" />하계 2차</label>
                </div>
                </div>
                <h4><span style={sectionStyle}>></span> 희망동 선택</h4>
                <div className="checkbox">
                    <label><input type="checkbox" name="fourthdong" value="1" />1 동</label>
                    <label><input type="checkbox"  name="fourthdong" value="2" />2 동</label>
                    <label><input type="checkbox" name="fourthdong" value="3" />3 동</label>
                    <label><input type="checkbox"  name="fourthdong" value="4" />4 동</label>
                    <label><input type="checkbox"  name="fourthdong" value="8" />8 동</label>
                    <label><input type="checkbox"  name="fourthdong" value="9" />9 동</label>
                </div>
                <button>저장</button>
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

export default First;