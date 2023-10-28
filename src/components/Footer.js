import React from "react";
import insta from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import email from "../images/envelope.png"
import github from "../images/github.png"
import reset from "../images/reset.png"


 const Footer = ({setBgcolor}) => {
    function setBackgroundColor(e){
      // alert("hey")
      let color = e.target.value
      if(color==='Darken-black')
      {
         setBgcolor('black')
      }
      if(color==='Colored-Grey')
      {
         setBgcolor('rgb(206, 195, 195)')
      }if(color==='Colored-Pink')
      {
         setBgcolor('rgb(233, 195, 202)')
      }if(color==='Colored-Green')
      {
         setBgcolor('rgb(102, 224, 102)')
      }if(color==='Colored-Blue')
      {
         setBgcolor('rgb(111, 111, 243)')
      }if(color==='Colored-LightPurpule')
      {
         setBgcolor('rgb(243, 151, 243')
      }
      if(color==='Lighten-white')
      {
         setBgcolor('#fff')
      }
       
    }

    return (

       <div className="Footer">
        <div className="socialSites">
         <a href="https://github.com/pavannavde"><img src={github} alt="img"/></a>
         <a href="https://www.linkedin.com/in/pavan-navde-pn1997/"><img src={linkedin} alt="img"/></a>
         <a href="mailto:pavannavde97@gmail.com"><img src={email} alt="img"/></a>
         <a  href="https://www.linkedin.com/in/pavan-navde-pn1997/"><img src={insta} alt="img"/></a>
        </div>
        <div className="ButtonsDiv">
         <img src={reset} alt="reset"/>
         <div>
            <button>esc</button>
            <p> - reset</p>
         </div>
         <div>
             <button>10</button>
             <button>50</button>
             <button>100</button>
             <p> - no.of words</p>
         </div>
        </div>
        <select onChange={setBackgroundColor}>
            <option>Darken-black</option>
            <option>Colored-Grey</option>
            <option>Colored-Pink</option>
            <option>Colored-Green</option>
            <option>Colored-Blue</option>
            <option>Colored-LightPurpule</option>
            <option>Lighten-white</option>
        </select>
       </div>
    )
 }

 export default Footer;