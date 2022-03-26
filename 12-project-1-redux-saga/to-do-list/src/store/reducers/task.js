const initialState = {
  todos: [],
  isLoading: false,
}

const task = (state = initialState, action) => {
  switch (action.type) {
    case 'TASK_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_SUCCESS':
      return {
        isLoading: false,
        todos: action.payload,
      }
    case 'ADD_SUCCESS':
      return {
        isLoading: false,
        todos: [...state.todos, action.payload]
      }
    case 'DELETE_SUCCESS':
      return {
        isLoading: false,
        todos: state.todos.filter(item => item._id !== action.id)
      }
    default:
      return state
  }
}

export default task
