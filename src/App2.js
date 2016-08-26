import React from 'react';

import Header from './Components/Header';
import MainButton from './Components/MainButton';

import HomeParallax from './Components/HomeParallax';
import HomeSection from './Components/HomeSection';
import HomeCommonParallax from './Components/HomeCommonParallax';
import HomeFooter from './Components/HomeFooter';

import FacebookButton from './Components/FacebookButton';

// //
import Counter from './Components/Counter';
import Buttons from './Components/Buttons';
import Option from './Components/Option';
//////

import logo from './logo.svg';
import './App.css';
import path from './public/mainImage.jpg';

// var mainImageStyle = {
//        backgroundImage: 'url(' + './src/public/mainImage.jpg' + ')',
//        textAlign : 'center',
//        width : '100%',
//        height : '500px',
//        backgroundSize:'cover',
//        backgroundPosition: 'center center',
//        paddingTop : '100px',
//        paddingBottom : '100px'
//     }

// var containerCenter = {
//     textAlign : 'center'
// }
// <div style = {mainImageStyle}>
//                       <MainButton/>
//               </div>

// var App = React.createClass({


    

//     render : function(){
//       // this.parallaxFuc();
//       return (
//         <div>
          
//                <Header/>
              
//               <div className="parallax-container">
//                 <div className="parallax"><img src={'./src/public/mainImage.jpg'} alt ="dddd"/></div>
//               </div>
//                <div className="section white">
//                     <div className="row container">
//                       <h2 className="header">Parallax</h2>
//                       <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
//                     </div>
//                </div>
//               <div className="container" style = {containerCenter}>
//                     <FacebookButton fb={FB}/>
//                   <MainSection/>
//                   <MainSection/>
//                   <MainSection/>
//                   <MainSection/>
                  
//                     <Counter/>
//                    <Option/>
//                    <Buttons/>
//               </div >
           
//        </div>
//       );
//     }
// });

class App extends React.Component {
      constructor(props){
          super(props);
          this.state = {

          }
           let containerCenter = {
                textAlign : 'center'
            }
         
      }
     
     parall(){
        $(document).ready(function(){
           $('.parallax').parallax();
         }); 
     }

    render(){
      this.parall()
      return(
        <div>
            
                <Header/>
                

                 <HomeParallax/>
                <HomeSection/>
                <div className="container" style = {{textAlign:'center'}}>
                      <FacebookButton fb={FB}/>
                   
                    
                      <Counter/>
                    <Option/>
                    <Buttons/>
                </div >
                <HomeCommonParallax/>
                <HomeFooter/>
            
        </div>
      )
    }


}


export default App;
