import { useEffect, useState } from "react";

export default function API(){
    let[fact,setFact]=useState("")
    let URL="https://meowfacts.herokuapp.com/";
    useEffect(()=>{
        async function generateFirstFact() {
        let res= await fetch(URL);
        let parsedResponse=await res.json();
        setFact(parsedResponse.data[0])
    } generateFirstFact()
    },[])
    async function generateFact() {
        let res= await fetch(URL);
        let parsedResponse=await res.json();
        setFact(parsedResponse.data[0])
    }
    return(
        <div>
            <h1>Cat Facts</h1>
            <h2>{fact}</h2>
            <button onClick={generateFact}>Generate Fact</button>
        </div>
    )
}