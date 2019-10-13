const todoReducer = (store = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        console.log(`Added ${action.payload}`);
        console.log(`Added ${JSON.stringify(action.daysSelected)}`);
        return [...store,
          {
            id: action.id,
            payload: action.payload,
            daysSelected: action.daysSelected,
            isCompleted: false
          }];       
      case 'TOGGLE_TODO':
        return store.map(todo =>
          todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      default:
        return store;
    }
};
  
export default todoReducer;