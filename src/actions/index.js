

export const addTodo = ({title,id}) =>{
    return{
        type:"ADD_TODO",
        payload:{
            title,
            id,
            status:'Active'
        }
    }
}

export const deleteTodo = (id) =>{
    return {
      type: "DELETE_TODO",
      payload:{id}
    };
}

export const deleteAll = () =>{
    return {
      type: "DELETE_ALL_TODO",
    };
}

export const editTodo = ({taskName,id}) =>{
    return {
      type: "EDIT_TODO",
      payload: {
        taskName,
        id
      }
    };
}

export const editTodo2 = ({ status, id }) => {
  return {
    type: "UPDATE_TODO",
    payload: {
      status,
      id,
    },
  };
};

export const deleteStatus= (status) => {
  return {
    type: "DELETE_STATUS",
    payload: { status },
  };
};
