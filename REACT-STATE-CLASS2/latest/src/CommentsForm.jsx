import { useState } from "react"

export default function CommentsForm(){
    let[formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    })

    function handleDataChange(e){
        setFormData((currData)=>{
            return(
                {...currData,[e.target.name]:e.target.value}
            )
        }
        )
    }
    function handleFormSubmit(e){
        e.preventDefault();
        console.log(formData)
        setFormData({
            username:"",
            remarks:"",
            rating:5
        });
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username: </label>
            <input id="username" placeholder="username" value={formData.username} onChange={handleDataChange} name="username"></input>
            <br></br><br></br>
            <label htmlFor="remarks">Remarks: </label>
            <textarea id="remarks" cols={30} rows={4} placeholder="give some remarks!!!" onChange={handleDataChange} value={formData.remarks} name="remarks"></textarea>
            <br></br><br></br>
            <label htmlFor="rating">Rating: </label>
            <input type="number" id="rating" placeholder="rating" value={formData.rating} onChange={handleDataChange} name="rating"></input>
            <br></br><br></br>
            <button>Enter</button>
        </form>
    )
}