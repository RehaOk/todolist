import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actionCreators';
import CheckBox from './checkboxComponent';
import axios from 'axios';


let checkedDays = {Monday: false, Tuesday: false, Wednesday: false, Thursday: false, Friday: false, Sunday: false};
let checkedCheckboxes = [], todoId = 0;

// Collect values checked by the user
const handleChange = (e) => {
  checkedDays[e.target.name] = e.target.checked;
  if(e.target.checked === true){
    checkedCheckboxes.push(e.target);
  }
};

const AddTodo = ({dispatch}) => {
  let input, checkedItems, newObjCheckedDays, day;

  return (
    <div>
      <form className="ui form"
        onSubmit={e => {
          e.preventDefault();
          todoId++;
          if (!input.value.trim()) {
            return
          }
          // Objects are passed with reference (breaking that link here)
          newObjCheckedDays = Object.assign({}, checkedItems, checkedDays);
          dispatch(addTodo(todoId, input.value, newObjCheckedDays));

          // Uncheck checked items after submit
          checkedCheckboxes.map((target) => {
            return target.checked = false;
          });

          // Re-initialize the checked days object after submit (turn all values to false)
          for (day in checkedDays) {
            checkedDays[day] = false;
          }

          axios.post('/api/todolist/', {
            "content": input.value,
            "id": todoId,
            "checkedDays": JSON.stringify(newObjCheckedDays)
            },
            { 
              headers: { 'content-type': 'application/json' } 
            }
          ).then((response) => {
            input.value = '' // Reset add todo input box
            if(response.status === 200){
                console.log('succesfully added new todo item')
            }
          }).catch(function (error) {
            input.value = '' // Reset add todo input box
            console.log(error);
          });

        }}
      >
        <h4 className="ui dividing header">Todo list</h4>
        <div className="ui action input">
          <input type="text" ref={formInput => (input = formInput)} />
          <button className="ui primary button" type="submit">Add Todo</button>
        </div>
        <div className="ui raised segment px-grid-700">
          <CheckBox onHandleChange={handleChange} label="Monday"/>
          <CheckBox onHandleChange={handleChange} label="Tuesday"/>
          <CheckBox onHandleChange={handleChange} label="Wednesday"/>
          <CheckBox onHandleChange={handleChange} label="Thursday"/>
          <CheckBox onHandleChange={handleChange} label="Friday"/>
          <CheckBox onHandleChange={handleChange} label="Saturday"/>
          <CheckBox onHandleChange={handleChange} label="Sunday"/>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddTodo);