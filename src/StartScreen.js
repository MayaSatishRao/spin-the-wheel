import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import "./StartScreen.css"
const StartScreen = ({setScreen})=>{

    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [tick,setTick] = useState(false);

    const isValid = ()=>{
         let pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" ;
         console.log(email.match(pattern))
         return email.match(pattern);
    }
    const buttonHandler = ()=>{
        // check if all input is provided
        let check = true;
        if(!isValid()){
            alert("Enter proper email");
            check = false;
        }
        if(phone.length!==10){
            alert("Enter proper phone number");
            check = false;
        }
        if(check && tick){
            console.log("store phone and email");
            //proceed to next page
            setScreen(1);
        }

        // ****** api call to store email and phone *************
        /* fetch("https://endpoint.com/api/",{
            method: "POST",
            body: JSON.stringify({
                       email: email,
                       phone: phone,
                 }),
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
        })*/
    }

    return (

        <div className="container">

        
        <div className="start-screen">
            <div className="image-container">
            </div>
            <div className="start-screen-content">
                <p className="start-screen-heading">This is how EngageBud looks like in action!</p>

                 <div className="formInputs">
                     <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                     <div className="input-div">
                     <p>Email</p>
                     <input type={"email"} placeholder="Email"
                      required 
                     onChange={(e)=>setEmail(e.target.value)}/>
                     </div>
                    
                 </div>
                 <div className="formInputs">
                     <FontAwesomeIcon icon={faPhone} className="icon"/>
                     <div className="input-div">
                        <p>Phone number</p>
                        <input type={"text"} placeholder="Phone number" value={"+91 " + phone} onChange={(e)=>setPhone(e.target.value.substring(4))} />
                     </div>
                 </div>
                
                <div className="checkbox-input">
                    <input type={"checkbox"} className="checkbox" onChange={(e)=>setTick(e.target.checked)}/>
                    <p>I agree to receiving recurring automated messages at the number I have provided.
                        <br/>Consent is not a condition to purchase.</p>
                </div>
                

                <button className="green-btn" 
                 onClick={buttonHandler}>Try your luck</button>

                <p className="conditions">
                *You can spin the wheel only once! &nbsp; *If you win, you can claim your coupon for 10 minutes only!
                </p>

                <div className="back-button">
                      <p>No, I don’t feel lucky</p>
                      <button onClick={()=>setScreen(3)}>X</button>
                </div>
               
            </div>  
        </div>

        
        </div>
    )
}

export default StartScreen;