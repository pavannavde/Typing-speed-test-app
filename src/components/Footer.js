import React from "react";
import insta from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import email from "../images/envelope-circle-check-solid.svg"
import github from "../images/github .svg"


 const Footer = () => {

    return (

       <div className="Footer">
        <div className="socialSites">
         <img src={github} alt="img"/>
         <img src={linkedin} alt="img"/>
         <img src={email} alt="img"/>
         <img src={insta} alt="img"/>
        </div>
        <select>
            <option>Dark-Black</option>
            <option>Dark-grey</option>
        </select>
       </div>
    )
 }

 export default Footer;