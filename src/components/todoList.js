import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actionCreators/index';
import Todo from './todoComponent';
import axios from 'axios';

class TodoList extends React.Component {

  componentDidMount(){
    // Get to do list from the DB at each refresh
    axios.get('/api/todolist/').then(response => {
      if (response.status === 200) {
        response.data.forEach(element => {
          element.checkedDays = JSON.parse(element.checkedDays);
          this.props.addTodoFromDB(element);
        });
      }
    }).catch((err) => {
      alert(err);
    });
  }

  render() {
    return (
      <ul className="ui middle aligned animated ordered list">
        { this.props.todos &&
            this.props.todos.map(todo => (
              <Todo
                key={todo.id}
                onClick={() => this.props.toggleTodo(todo.id)}
                isCompleted={todo.isCompleted}
                content={todo.payload}
                daysSelected={todo.daysSelected}
              />
            ))
        }
      </ul>
    );
  }
}

const mapStateToProps = store => {
    return { todos: store.todos }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
    addTodoFromDB: todo => dispatch(addTodo(todo.id, todo.content, todo.checkedDays)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);