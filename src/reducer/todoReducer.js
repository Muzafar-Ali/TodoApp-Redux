
const initialState ={
    todoList:[
        {title: 'Task One',id:'1', status:'Active'},
    ]
}

const todoReducer = (state= initialState ,action) =>{
    switch (action.type) {
      case "ADD_TODO": {
        return {
          ...state,
          todoList: [...state.todoList, action?.payload],
        };
      }
      case "DELETE_TODO": {
        return {
          ...state,
          todoList: state.todoList.filter(
            (item) => item.id != action.payload.id
          ),
        };
      }
      case "EDIT_TODO": {
        return {
          ...state,
          todoList: state.todoList.map((item) => {
            if (item.id == action.payload.id) {
              return {
                ...item,
                title: action.payload.taskName,
              };
            } else {
              return item;
            }
          }),
        };
      }
      case "DELETE_ALL_TODO": {
        return {
          ...state,
          todoList: [],
        };
      }
      case "UPDATE_TODO": {
        return {
          ...state,
          todoList: state.todoList.map((val) => {
            if (val.id == action.payload.id) {
              return {
                ...val,
                status: action.payload.status,
              };
            } else {
              return val;
            }
          }),
        };
      }

      case "DELETE_STATUS": {
        return {
          ...state,
          todoList: state.todoList.filter((item) => item.status != action.payload.status),
        };
      }

      default: {
        return state;
      }
    }
}

export default todoReducer;