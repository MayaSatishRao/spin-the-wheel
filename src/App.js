import React,{useState} from "react";
import StartScreen from "./StartScreen";
import Result from "./Result";
import ClientWebsite from "./ClientWebsite"
import Game from "./Game";

function App() {

   const [screen, setScreen] = useState(0);
   const [reward,setReward] = useState(-1);
   const prizes = ["HOT CHOCLATE FREE WITH TEA","Free 50g tea on purchase of Rs. 500",
                  "Buy 2 Effervescent tablets & get 1 free","FREE COFFEE MUG ON PURCHASE WORTH 1000+",
                  "BUY 1 GET 1 FREE","30% SITEWIDE OFF"
                   ]
   if(screen===0)
     return <StartScreen setScreen={setScreen}/>
   else if(screen === 1)
     return <Game setScreen={setScreen} setReward={setReward}/>
   else if(screen===2)
     return <Result setScreen={setScreen} reward={prizes[reward]}/>
   else if(screen===3)
     return <ClientWebsite setScreen={setScreen}/>
}

export default App;
