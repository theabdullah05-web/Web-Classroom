import { useState } from "react"

export default function LikeButton(){
    let [isLiked,setisLiked]=useState(false);
    let[clicks,setClick]=useState(0)
    function toggleLike(){
        setisLiked(!isLiked);
        setClick(clicks+1)
    }
    return(
        <>
            <p>{clicks}</p>
            <p onClick={toggleLike}>{isLiked?<i className="fa-solid fa-heart" style={{color:"red"}}></i>:<i className="fa-regular fa-heart"></i>}</p>
        </>
    )
}