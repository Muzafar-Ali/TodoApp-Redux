import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteAll, deleteStatus } from "../actions"
import List from "./list"
import { v4 as uuid } from "uuid"
import NavBar from "./NavBar"

const Todo = ()=>{

    const list = useSelector((state)=> state.todoReducer.todoList)
   
    return(
        <div>
            <NavBar/>  
            <div>
                {
                    list.map((val)=>{
                        return(
                            <List data={val}/>
                        )
                    })    
                }
            </div>
        </div>
    )
    
}


export default Todo