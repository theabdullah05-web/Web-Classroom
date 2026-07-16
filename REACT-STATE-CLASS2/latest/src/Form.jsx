import { useState } from "react"

export default function Form(){
    let[formData,setFormData]=useState({
        fullName:"",
        userName:"",
        password:""
    });
    function handleInputChange(event){
        setFormData((preObj)=>{
            return({...preObj,[event.target.name]:event.target.value})
        })
    }
    function handleFormSubmit(event){
        event.preventDefault();
        console.log({...formData});
        setFormData({...formData,
            fullName:"",
            userName:"",
            password:""
        })
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="fullName">FullName: </label>
            <input value={formData.fullName} onChange={handleInputChange} id="name" name="fullName"></input>
            <br></br><br></br>
            <label htmlFor="userName">Username: </label>
            <input value={formData.userName} onChange={handleInputChange} id="name" name="userName"></input>
            <br></br><br></br>
            <label htmlFor="password">Password: </label>
            <input value={formData.password} onChange={handleInputChange} id="name" name="password" type="password"></input>&nbsp;
            
            <br></br><br></br>
            <button>Enter</button>
        </form>
    )
}