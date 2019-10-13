import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actionCreators/index';
import Todo from './todoComponent';

const TodoList = ({ todos, toggleTodo }) => (
  <ul className="ui middle aligned animated ordered list">
    { todos &&
        todos.map(todo => (
          <Todo 
            onClick={() => toggleTodo(todo.id)}
            isCompleted={todo.isCompleted}
            content={todo.payload}
            daysSelected={todo.daysSelected}
          />
        ))
    }
  </ul>
);

const mapStateToProps = store => {
  return {todos: store.todos}
};

const mapDispatchToProps = dispatch => {
  return {toggleTodo: id => dispatch(toggleTodo(id))}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);