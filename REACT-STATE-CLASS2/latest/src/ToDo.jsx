import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function ToDO(){
    let [task,setTask]=useState([{task:"task",id:uuidv4(),isDone:false}]);
    let[newTodo,setNewTodo]=useState("");

    function addTask(event){
    event.preventDefault();
    setTask((preVal)=>{
        return(
            [...task,{task:newTodo,id:uuidv4(),isDone:false}]
        )
    });
    setNewTodo("");
    }
    function updateTodo(event){
        setNewTodo(event.target.value)
    }
   function deleteFunc(Id){
    setTask((preVal)=>{
        return(
            preVal.filter(el=>el.id!=Id)
        )
    })
   }
   function upperCase(){
        setTask((preVal)=>{
            return(
                preVal.map((el)=>{
                    return(
                        {...el,task:el.task.toUpperCase()}
                    )
                })
            )
        })
   }
   function upperCaseOne(Id){
        setTask((preVal)=>{
            return(
                preVal.map(el=>{
                    if(el.id===Id){
                        return(
                            {
                                ...el,task:el.task.toUpperCase()
                            }
                        )
                    }else{
                        return el
                    }
                })
            )
        })
   }
   function markDone(){
        setTask((preVal)=>{
            return(
                preVal.map(el=>{
                    return(
                        {...el,isDone:true}
                    )
                })
            )
        })
   }
   function markDoneOne(Id){
        setTask((preVal)=>{
            return(
                preVal.map(el=>{
                    if(el.id==Id){
                        return {...el, isDone:true}
                    }else{
                        return el
                    }
                })
            )
        })
   }
    return(
        <div>
            <h2>Todo List</h2>
            <form onSubmit={addTask}>
                <input  value={newTodo} onChange={updateTodo}></input>
                <br></br>
                <button>Add</button>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
            </form>
            <ul>
                {task.map(el=>
                <li key={el.id}>
                    <span style={{textDecoration:el.isDone===true?"line-through":"none"}} >{el.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteFunc(el.id)}>Delete</button>
                    &nbsp;
                    <button onClick={()=>upperCaseOne(el.id)}>Upper Case</button>
                    &nbsp;
                    <button onClick={()=>markDoneOne(el.id)}>Mark As Done</button>
                </li>)}
            </ul>
            <button onClick={upperCase}>UpperCase All</button>
            <button onClick={markDone}>Mark As Done</button>
        </div>
    )
}