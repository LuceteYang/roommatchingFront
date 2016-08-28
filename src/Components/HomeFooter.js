import React from 'react';
// import axios from 'axios';


class HomeFooter extends React.Component {

     constructor(props){
        super(props);

        this.state = {
                
         };
      
    }

 
    render(){
    

        return (
            
               <footer className="page-footer teal">
                    <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                        <h5 className="white-text">룸메이칭(룸메이트 매칭)</h5>
                        <p className="grey-text text-lighten-4">안녕하세요 룸메이트 때문에 고생하시는 여러분을 위해 만든 내게 꼭 맞는 룸메이트를 매칭해주는 룸메이칭입니다.</p>


                        </div>
                        <div className="col l3 s12">
                        <h5 className="white-text">Settings</h5>
                        <ul>
                            <li><a className="white-text" href="#!">Link 1</a></li>
                            <li><a className="white-text" href="#!">Link 2</a></li>
                            <li><a className="white-text" href="#!">Link 3</a></li>
                            <li><a className="white-text" href="#!">Link 4</a></li>
                        </ul>
                        </div>
                        <div className="col l3 s12">
                        <h5 className="white-text">Connect</h5>
                        <ul>
                            <li><a className="white-text" href="#!">개발자 덕명동 남자</a></li>
                            <li><a className="white-text" href="#!">CTO 박상환</a></li>
                            <li><a className="white-text" href="#!">알고리즘 전문가 김태희</a></li>
                            <li><a className="white-text" href="#!">총괄 기획 팀장 진하윤</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="footer-copyright">
                    <div className="container">
                    Made by <a className="brown-text text-lighten-3" target="_blank" href="https://www.facebook.com/likelioncnu/?fref=nf">멋쟁이 사자처럼 충남대</a>
                    </div>
                    </div>
                </footer>
        
           
        );
    }
}


export default HomeFooter;

