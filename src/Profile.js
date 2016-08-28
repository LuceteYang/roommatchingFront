/**
 * Created by User on 2016-08-07.
 */
 import React from 'react';
 import Header from './Components/Header';
 class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nickname:"",
            univ:"",
            birth:"",
            major:""
        }
    }
    componentDidMount() {
        this.viewServerData();
    }
    viewServerData() {
        this.setState({
            nickname:"박상환",
            univ:1,
            birth:'1991-06-25',
            major:"수학과"
            });
    }
    render() {
      $(document).ready(function() {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 100 // Creates a dropdown of 15 years to control year
        });
        $('select').material_select();
        $('.datepicker').val(this.state.birth);
    })
      return (
        <div>
        <Header/>
            <div className="container">
            <div className="container">
                <div className="card" >
                <div className="card">
                     <div className="card-content ">
                             <span className ="card-title">
                              <blockquote> 별명</blockquote>
                              </span>
                            <input id="nickname" type="text" className="validate" value={this.state.nickname}/>
                              <br/>
                    </div>
                    </div>
                    <div className="card">
                     <div className="card-content ">
                             <span className ="card-title">
                             <blockquote>학교</blockquote>
                              </span>
                                <select value={this.state.univ}>
                                    <option value="" disabled selected>-</option>
                                    <option value="0">충남대학교</option>
                                    <option value="1">Kaist</option>
                                </select>
                              <br/>
                    </div>
                    </div>
                    <div className="card">
                     <div className="card-content ">
                             <span className ="card-title">
                              <blockquote> 생일</blockquote>
                              </span>
                             <input id ="calendar" type="date" className="datepicker" value={this.state.birth}/>
                              <br/>
                    </div>
                    </div>
                    <div className="card">
                     <div className="card-content ">
                             <span className ="card-title">
                              <blockquote> 학과</blockquote>
                              </span>
                             <input id="nickname" value={this.state.major} type="text" className="validate" />
                              <br/>
                    </div>
                    </div>
                    <div className="row" style={{textAlign:"center"}}>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Profile;
