import { useState } from "react"

export default function LudoBoard(){
   let[moves,setMoves] = useState({blue:0,green:0,red:0,yellow:0})
   let[arr,setArr]=useState(["no move"]);
    function updateBlue(){
        setMoves((prevMove)=>{
            return({...prevMove,blue:prevMove.blue+1})
        })
        setArr((preVal)=>{
            return([...preVal,"blue moves"])
        })
    }

    function updateYellow(){
        setMoves((prevMove)=>{
            return({...prevMove,yellow:prevMove.yellow+1})
        })
        setArr((preVal)=>{
            return([...preVal,"yellow moves"])
        })
    }

    function updateGreen(){
        setMoves((prevMove)=>{
            return({...prevMove,green:prevMove.green+1})
        })
        setArr((preVal)=>{
            return([...preVal,"green moves"])
        })
    }
     function updateRed(){
        setMoves((prevMove)=>{
            return({...prevMove,red:prevMove.red+1})
        })
        setArr((preVal)=>{
            return([...preVal,"red moves"])
        })
    }
    return(
        <div>
            <p>Game Begins!</p>
            <p>{arr[arr.length-1]}</p>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button onClick={updateRed}  style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}