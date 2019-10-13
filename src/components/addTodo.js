import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actionCreators';
import CheckBox from './checkboxComponent';


let checkedDays = {Monday: false, Tuesday: false, Wednesday: false, Thursday: false, Friday: false, Sunday: false};
let checkedChekboxes = [];

// Collect values checked by the user
const handleChange = (e) => {
  checkedDays[e.target.name] = e.target.checked;
  if(e.target.checked === true){
    checkedChekboxes.push(e.target);
  }
  console.log(checkedDays);
};

const AddTodo = ({dispatch}) => {
  let input, checkedItems, newObj;

  return (
    <div>
      <form className="ui form"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          // Objects are passed with reference (breaking that link here)
          newObj = Object.assign({}, checkedItems, checkedDays);
          dispatch(addTodo(input.value, newObj));
          input.value = ''

          // Uncheck checked items after submit
          checkedChekboxes.map((target) => {
            return target.checked = false;
          });

          // Re iniitalize the checked days object after submit (turn all values to false)
          for (var day in checkedDays) {
            checkedDays[day] = false;
          }
        }}
      >
        <h4 className="ui dividing header">Todo list</h4>
        <div className="ui action input">
          <input type="text" ref={formInput => (input = formInput)} />
          <button className="ui primary button" type="submit">Add Todo</button>
        </div>
        <div className="ui raised segment" style={{width: 700}}>
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