import * as types from './actionTypes';

export const addTodo = (id, todoContent, daysSelected) => {
    return {
        type: types.ADD_TODO,
        id: id,
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
