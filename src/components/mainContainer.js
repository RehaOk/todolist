import React from 'react';

const MainContainer = (props) => (
    <div className="main ui container">
        {props.children}
    </div>
);

export default MainContainer;