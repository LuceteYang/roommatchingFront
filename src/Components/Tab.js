import React, { Component } from 'react';
import { Link } from 'react-router';

import First from './First';
import PageTwo from './PageTwo';
import ResultTab from './ResultTab';

class Tab extends React.Component{

    render(){
        return(
              <div className="row">
                         <div className="col s12">
                         <ul className="tabs">
                             <li className="tab col s3"><a  href="#test1">Test 1</a></li>
                            <li className="tab col s3"><a className="active" href="#test2 ">설문 조사 하기</a></li>
                            <li className="tab col s3"><a  href="#test4">매칭 결과 보기</a></li>
                        </ul>
                        </div>
                        <div id="test1" className="col s12"><First/></div>
                        <div id="test2" className="col s12"><PageTwo/></div>
                        <div id="test4" className="col s12"><ResultTab url="https://api.github.com/users/octocat/gists"/></div>


             </div>
        );
    }
}


export default Tab;
            // <div data-role="navbar">

            //    <ul>
            //       <li><Link to="/home">Home</Link></li>
            //       <li><Link to="/pagetwo">Page Two</Link></li>
            //       <li><Link to="/search">Search</Link></li>
            //   </ul>
                    //    </div>
