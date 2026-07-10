import { useState } from "react";

export default function Count(){
   let [count,setCount]=useState(0);

    function incCount(){
        setCount(count+1);
    }

    return(
        <>
            <h3>count= {count}</h3>
            <button onClick={incCount}>Click</button>
        </>
    )
}