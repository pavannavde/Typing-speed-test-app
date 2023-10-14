import React from "react";
import profile from '../images/user.png';
import logo from '../images/keyboard.png'

const Header = () =>{

    return(
        <div className="Header">
            <div className="logo">
               <h1>TypeCat</h1>
               <img src={logo} alt="img"/>
            </div>
            <img src={profile}alt="img"/>
        </div>
    )
}

export default Header