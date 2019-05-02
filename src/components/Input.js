import React from 'react';
const Input=(props)=>{
    let {inputHandler,taskValue}=props;
    return (
        <input type="text" 
        placeholder="Input yout task" 
        className="Input"
        onChange={inputHandler}
        value={taskValue}
        />
    )
} 
export default Input;