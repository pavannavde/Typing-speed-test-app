import React, { useState } from "react";
import Header from "./components/Header";
import TypingBox from "./components/TypingBox";
import Footer from "./components/Footer";

const App = () =>{

    const [bgcolor , setBgcolor] = useState("black");
    return (
        <div style={{background : bgcolor}}>
            <Header bgcolor={bgcolor}/>
            <TypingBox bgcolor={bgcolor}/>
            <Footer setBgcolor={setBgcolor}/>
        </div>
    )
}

export default App;