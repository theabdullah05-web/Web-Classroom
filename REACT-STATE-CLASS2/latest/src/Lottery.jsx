import { useState } from "react"
import "./Lottery.css"
import { genTicket, sumArr } from "./helper"
export default function Lottery(){
   let[ticket,setTicket]=useState(genTicket(3));
   let isWinning=sumArr(ticket)==15
   function newTicket(){
        setTicket(genTicket(3))
   }
    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
            </div>
            <br></br>
            <button onClick={newTicket}>Generate Ticket</button>
            {isWinning && <h3>Congratulations!!!You Won.</h3>}
        </div>
    )
}