import Dice from "./Dice";
import { useState } from "react";
import {getRolls,sum} from './ulits'
function LuckyN({numDice=3, goal=9}){
    const [dice,setDice] = useState(getRolls(numDice))
    const isWinner = sum(dice) === goal
    const roll = () => setDice(getRolls(numDice))
    console.log(dice);
    return(
        <main>
            <h1>Lucky{goal}  <span style={{color:"blue"}}>{isWinner && "You Win!!"}</span></h1>
            <Dice dice={dice}/>
            <button onClick={roll}>Re-Roll Dice</button>
        </main>
    )
}
export default LuckyN;