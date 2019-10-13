import React from 'react';

const CheckBox = (props) => (
    <div className="ui checkbox checkbox-margin">
        <input onChange={props.onHandleChange} name={props.label} type="checkbox" />
        <label>{props.label}</label>
    </div>   
);

export default CheckBox;