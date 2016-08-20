import React, { Component } from 'react';
import { Link } from 'react-router';

import Home from './Home';
import PageTwo from './PageTwo';
import Search from './Search';

class Tab extends React.Component{
     getInitialState(){
        return {
            stage : 1 
        }
    }

    render(){
        return(
              <div className="row">
                         <div className="col s12">
                         <ul className="tabs">
                             <li className="tab col s3"><a  href="#test1">Test 1</a></li>
                            <li className="tab col s3"><a href="#test2 ">Test 2</a></li>
                            <li className="tab col s3"><a className="active" href="#test4">Test 4</a></li>
                        </ul>
                        </div>
                        <div id="test1" className="col s12"><Home/></div>
                        <div id="test2" className="col s12"><PageTwo/></div>
                        <div id="test4" className="col s12"><Search url="https://api.github.com/users/octocat/gists"/></div>
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
