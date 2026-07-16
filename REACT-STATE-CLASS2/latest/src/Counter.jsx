import { useEffect, useState } from "react"

export default function Counter(){
    let[countx,setCountx]=useState(0)
    let[county,setCounty]=useState(0)
    function incCountx(){
        setCountx(preVal=>preVal+1)
    }
    function incCounty(){
        setCounty(preVal=>preVal+1)
    }
    useEffect(function doSomething(){
        console.log("its a side effect")
    },[])
    return(
        <div>
            <h3>{countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>{county}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    )
}