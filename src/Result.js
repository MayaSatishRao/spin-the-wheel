import React, {useState, useEffect} from "react"
import "./Result.css"
import ReactConfetti from "react-confetti"

const Result = ({setScreen,reward})=>{

    let text = "XAXPDF20"
    console.log(reward);
    const [windowSize, setWindowSize] = useState({width:window.innerWidth, height:window.innerHeight});
    

    const detectSize = ()=>{
        setWindowSize({width:window.innerWidth,height:window.innerHeight});
    }

    useEffect(()=>{
        window.addEventListener("resize",detectSize);
        return ()=>window.removeEventListener("resize",detectSize);
    },[windowSize]);


    const copyContent = async () => {
        try {
          await navigator.clipboard.writeText(text);
          console.log('Content copied to clipboard');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }

    const buttonHandler = ()=>{
        copyContent();
        setScreen(3);
        console.log("Button clicked");
    }
    return (

        <>
        <div className="container">

        
        <div className="start-screen-1">
            <div className="image-container"></div>
            <div className="start-screen-content">
                <p className="start-screen-heading">Congrats! You won</p>
                <p className="result-text">{reward}</p>
                 
                <div className="coupon-code">
                    <p>{text}</p>
                    <button onClick={copyContent}>COPY</button>
                </div>

                <button className="green-btn" 
                 onClick={buttonHandler}>Close  Panel and Copy</button>

                <p className="conditions">
                *You can claim your coupon for 10 minutes only!
                </p>

               
            </div>  
        </div>
        </div>
        <ReactConfetti 
          width={windowSize.width}
          height={windowSize.height}
          
        />
       
        </>
    )
}

export default Result;