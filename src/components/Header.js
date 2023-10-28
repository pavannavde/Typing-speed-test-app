import React from "react";
import profile from '../images/user.png';
import logo from '../images/keyboard.png'

const Header = ({bgcolor}) =>{
    let Color='white';
if(bgcolor!=="black")
{
    Color="black";
}
    return(
        <div className="Header">
            <div className="logo">
               <h1 style={{color:Color}}>TypeCat</h1>
               <img src={logo} alt="img"/>
            </div>
            <img src={profile}alt="img"/>
        </div>
    )
}

export default Header