import React from "react";
import insta from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
import email from "../images/envelope.png"
import github from "../images/github.png"
import reset from "../images/reset.png"


 const Footer = () => {

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
        <select>
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