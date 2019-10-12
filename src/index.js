import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';
import MainContainer from './components/mainContainer';

const store = createStore(rootReducer);

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <MainContainer>
                <AddTodo />
                <TodoList />
                </MainContainer>
            </Provider>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));