import * as types from './actionTypes';

let todoId = 0;
export const addTodo = (todoContent, daysSelected) => {
    return {
        type: types.ADD_TODO,
        id: todoId++,
        payload: todoContent,
        daysSelected: daysSelected
    }
};

export const toggleTodo = (id) => {
    return {
        type: types.TOGGLE_TODO,
        payload: id
    }
};
