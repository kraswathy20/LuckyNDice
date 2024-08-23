import Die from "./Die";
import './Dice.css'
function Dice({dice,color}){
    return(
        <div className="Dice">
            {dice.map((v,i)=>(
                <Die key={i} val={v} color={color}/>
            ))}
        </div>
    )
}
export default Dice;