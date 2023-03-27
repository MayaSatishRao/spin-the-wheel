import React, { useState } from "react";
import SpinWheel from "./assets/spin-wheel.png"
import Pointer from "./assets/pointer.png"

import "./Game.css"

const Game = ({setScreen,setReward})=>{

    const [enabled,setEnabled] = useState(true);
    const [wheelClass, setWheelClass] = useState("");
    const [wheelStyle, setWheelStyle] = useState({});

    let deg=0;

    
    const spinButtonHandler = ()=>{
        
        setEnabled(false);
        deg = Math.floor(4000 + Math.random() * 3000);
        
        console.log(deg);
        setWheelStyle({
            transition:"all 7s ease-out",
            transform:"rotate("+deg+"deg)",
        });
        setWheelClass("blur");

        let actualDegree = (deg%360 - 30);
        if(actualDegree<0)
          actualDegree+=360;
        let index = Math.ceil(actualDegree/60)-1;
        setReward(index);
        console.log("index is ",index);
        setTimeout(()=>{
            setScreen(2);
        },8000);
    }

    return (
        <>
            <div className="start-screen-2">
                <div className="wheel-container">
                    <img src={SpinWheel} alt="wheel" className={wheelClass} style={wheelStyle}/>
                    <div className="pointer-container">
                       <img src={Pointer} alt="pointer" />
                    </div>
                    
                </div>
                <button className="green-btn-2" disabled={!enabled}
                  onClick={spinButtonHandler}>Spin</button>
            </div>
        </>
    )
}

export default Game;