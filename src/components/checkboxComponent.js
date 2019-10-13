import React from 'react';

let input;
const CheckBox = (props) => (
    <div className="ui checkbox" style={{marginLeft: 10}}>
        <input onChange={props.onHandleChange} name={props.label} type="checkbox" />
        <label>{props.label}</label>
    </div>   
);

export default CheckBox;