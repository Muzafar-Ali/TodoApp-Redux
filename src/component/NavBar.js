
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteAll, deleteStatus } from '../actions';
import { v4 as uuid } from "uuid";


const NavBar = () => {

    const [inputData, setInputData] = useState();
    const list = useSelector((state) => state.todoReducer.todoList);
    const dispatch = useDispatch();

    const handleTodo = async (task) => {
      try {
        if (!task) throw "EMPTY FIELD";
        const payload = {
          title: task,
          id: uuid(),
        };
        const action = addTodo(payload);
        dispatch(action);
      } catch (error) {
        console.log("error :", error);
      }
    };

  return (
    <div class="container-sm">
      <nav class="navbar navbar-light bg-light">
        <form class="container-fluid justify-content-start">
            <input onChange={(e) => setInputData(e.target.value)}/>
          <button class="btn btn-outline-success me-2" type="button" onClick={() => handleTodo(inputData)}>
            Add New Task
          </button>
          <button class="btn btn-sm btn-outline-danger" type="button" onClick={()=> dispatch(deleteAll())}>
            Delete all Tasks
          </button>
          <button class="btn btn-sm btn btn-outline-secondary" type="button" onClick={()=> dispatch(deleteStatus('Inactive'))}>
            Show Active Status Only
          </button>
        </form>
      </nav>
    </div>
  );
}

export default NavBar


//<button class="btn btn-info" ></button>
