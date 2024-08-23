import './Die.css'
export default function Die({val,color="seagreen"}){
    return(
        <div className="Die" style={{backgroundColor:color}}>
            {val}
        </div>
    )
}