import React, { useState } from "react";


let displayText =" Aspiring software developer with a passion for coding and a diverse skill set in HTML, CSS, JavaScript, Java, SQL, and OOPs concepts. Committed to honing my skills through hands-on experience, I've undertaken exciting projects like a Spotify clone, replicating the popular music streaming web application, and a Blinkit clone, simulating an e-commerce website. These projects have fueled my desire to explore new challenges and contribute to the world of software development. I am open to new opportunities and collaborations in the dynamic realm of technology. Let's connect and explore the endless possibilities of software development together!"

const TypingBox = (bgcolor) =>{

    const [timer ,setTimer] =useState(15)
    return (
        <div className="TypingBox">
            <div class="row">
                <p>{timer}</p>
                <div>
                <button onClick={()=>setTimer(15)}>15s</button>
                <button onClick={()=>setTimer(30)}>30s</button>
                <button onClick={()=>setTimer(60)}>60s</button>
                </div>
                
            </div>
            <div class='paraText'>
             {
                displayText.split("").map(char=>(<span>{char}</span>))
             }
            </div>
        </div>
    )
}

export default TypingBox