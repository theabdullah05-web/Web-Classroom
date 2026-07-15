import { useState } from "react"
import "./Lottery.css"
import { genTicket, sumArr } from "./helper"
import Ticket from "./Ticket";
import Button from "./Button";
export default function Lottery({n=3,winCondition}){
   let[ticket,setTicket]=useState(genTicket(n));
   let isWinning=winCondition(ticket)
   function newTicket(){
        setTicket(genTicket(n))
   }
    return(
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <Button func={newTicket}/>
            {isWinning && <h3>Congratulations!!!You Won.</h3>}
        </div>
    )
}