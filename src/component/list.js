
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, editTodo2 } from '../actions'

const List = ({data}) => {
    const dispatch = useDispatch()
    const [changeData, setChangeData] = useState()
    const [editState, setEditState] = useState(false);
    const [editStatus, setEditStatus] = useState(false)


    const handleEdit = (task)=>{
        try {
            if(!task) throw "EMPTY Field"
            const payload ={
                taskName:task,
                id:data.id
            }
            const action = editTodo(payload);
            dispatch(action);
        } catch (error) {
            console.log('error :', error)
        }
    }
    const handlStatus = ()=>{
        try {
            setEditStatus(!editStatus);

            const state = editStatus ? 'Active' : 'Inactive'

            const payload ={
                status:state,
                id:data.id
            } 
            const action = editTodo2(payload);
            dispatch(action);
        } catch (error) {
            console.log('error :', error)
        }
    }

  return (
    <div>
      <div class="container-sm">
        <table class="table table-success table-striped">
          <thead>
            <tr >
              <th scope="col" >Task ID</th>
              <th scope="col">Task </th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>{data.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button class="btn btn-sm btn-outline-danger" onClick={() => dispatch(deleteTodo(data.id))}>Delete Task</button>
        <button  class="btn btn-sm btn-outline-primary" onClick={() => setEditState(!editState)}>Edit Task</button>
        <button class="btn btn-sm btn-outline-success" onClick={() => handlStatus()}>Change Status</button>
        {editState ? (
          <>
            <input
              value={changeData}
              onChange={(e) => setChangeData(e.target.value)}
            />
            <button onClick={() => handleEdit(changeData)}>Submit</button>
          </>
        ) : (
          ""
        )}
      </div>
      <div></div>
    </div>
  ); 
}

export default List