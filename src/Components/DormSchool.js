/**
 * Created by User on 2016-08-07.
 */
import React from 'react';



class DormSchool extends React.Component {

    constructor(props){
        super(props);

    }


    render() {
     
        return (
            <div>
                <div className="card">
                    <div className="card-content ">
                    <span className="card-title"><i className="material-icons">business</i> 학교정보</span>
                        <blockquote>
                            <p className="flow-text"> 충남대학교</p>
                        </blockquote>

                    </div>
                    <div className="card-action">
                    <a href="#">기숙사 홈페이지</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default DormSchool;