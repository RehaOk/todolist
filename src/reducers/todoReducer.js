const todoReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        console.log(`Added ${action.payload}`);
        return [...state,
          {
            id: action.id,
            payload: action.payload,
            isCompleted: false
          }];       
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      default:
        return state;
    }
};
  
export default todoReducer;