import React from 'react';

const Input = (props) => {
    return <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.callbackSetTextOnInput} />;
}

export default Input;